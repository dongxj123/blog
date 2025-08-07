---
title: React 和 Vue3 路由导航深度解析 - 单页应用路由方案对比
date: 2025-08-07
author: 我的名字
tags: [React, Vue3, 路由, React Router, Vue Router]
outline: deep
---

# 2025年8月7日 - React 和 Vue3 路由导航深度解析 - 单页应用路由方案对比

::: info 文章概述
深入对比 React Router v6 和 Vue Router 4 的设计理念、API 使用和最佳实践，帮助开发者选择合适的路由方案
:::

在现代前端开发中，路由管理是单页应用（SPA）的核心功能之一。本文将详细对比 React 和 Vue3 的路由解决方案，分析它们的异同点和适用场景。

## React 路由导航

React 主要使用 **React Router** 库进行路由管理，当前主流版本是 v6，相比之前版本有了显著的 API 简化和性能优化。

### 基本路由配置

React Router v6 采用了更加声明式的配置方式：

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
        
        {/* 嵌套路由示例 */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="stats" element={<Stats />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
        {/* 404 页面 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 编程式导航

#### 使用 `useNavigate` 钩子

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    // 基本跳转
    navigate('/about');
    
    // 带路径参数跳转
    navigate('/users/123');
    
    // 替换当前历史记录而不是添加新记录
    navigate('/about', { replace: true });
    
    // 带状态跳转，可以传递数据
    navigate('/about', { 
      state: { 
        from: 'home',
        userData: { name: 'John', age: 25 }
      } 
    });
    
    // 相对导航
    navigate('../parent'); // 上一级路径
    navigate(-1); // 后退一页
    navigate(1);  // 前进一页
  };
  
  return (
    <div>
      <button onClick={handleNavigation}>导航示例</button>
    </div>
  );
}
```

#### 使用 `<Link>` 组件进行声明式导航

```jsx
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* 基本链接 */}
      <Link to="/">首页</Link>
      <Link to="/about">关于我们</Link>
      
      {/* 带参数链接 */}
      <Link to="/users/123" state={{ from: 'nav' }}>
        用户详情
      </Link>
      
      {/* NavLink 支持激活状态样式 */}
      <NavLink 
        to="/dashboard"
        className={({ isActive }) => isActive ? 'active' : ''}
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'blue'
        })}
      >
        仪表板
      </NavLink>
      
      {/* 替换历史记录的链接 */}
      <Link to="/login" replace>
        登录
      </Link>
    </nav>
  );
}
```

### 获取路由参数和信息

```jsx
import { useParams, useLocation, useSearchParams } from 'react-router-dom';

function UserProfile() {
  // 获取路径参数 /users/:id
  const { id } = useParams();
  
  // 获取location对象，包含路径、搜索参数、状态等
  const location = useLocation();
  const navigationState = location.state;
  
  // 获取和设置URL搜索参数 ?key=value
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab');
  
  const updateTab = (newTab) => {
    setSearchParams({ tab: newTab });
  };
  
  return (
    <div>
      <h2>用户 ID: {id}</h2>
      <p>当前标签: {tab}</p>
      <p>导航状态: {JSON.stringify(navigationState)}</p>
      
      <button onClick={() => updateTab('profile')}>
        个人资料
      </button>
      <button onClick={() => updateTab('settings')}>
        设置
      </button>
    </div>
  );
}
```

## Vue3 路由导航

Vue3 使用 **Vue Router 4.x** 进行路由管理，提供了组合式 API 和选项式 API 两种使用方式。

### 基本路由配置

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import UserProfile from '../views/UserProfile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // 路由元信息
    meta: { requiresAuth: true }
  },
  {
    path: '/users/:id',
    name: 'UserProfile',
    component: UserProfile,
    // 路由参数类型验证
    props: route => ({ 
      id: Number(route.params.id) 
    })
  },
  {
    // 嵌套路由
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'stats',
        name: 'DashboardStats',
        component: () => import('../views/DashboardStats.vue')
      },
      {
        path: 'settings',
        name: 'DashboardSettings',
        component: () => import('../views/DashboardSettings.vue')
      }
    ]
  },
  {
    // 404页面
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
```

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
```

### 编程式导航

#### 使用 `useRouter` 组合式 API

```vue
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleNavigation = () => {
  // 字符串路径跳转
  router.push('/about');
  
  // 对象形式跳转
  router.push({ path: '/users/123' });
  
  // 命名路由跳转（推荐）
  router.push({ 
    name: 'UserProfile', 
    params: { id: 123 } 
  });
  
  // 带查询参数
  router.push({ 
    path: '/about', 
    query: { from: 'home', tab: 'info' } 
  });
  
  // 替换当前历史记录
  router.replace('/about');
  
  // 带状态跳转（Vue Router 4.1.6+）
  router.push({ 
    path: '/about', 
    state: { from: 'home' } 
  });
  
  // 历史记录导航
  router.go(-1); // 后退
  router.go(1);  // 前进
  router.back(); // 后退
  router.forward(); // 前进
};

const handleAsyncNavigation = async () => {
  try {
    await router.push('/dashboard');
    console.log('导航成功');
  } catch (error) {
    if (error.name === 'NavigationDuplicated') {
      console.log('重复导航');
    } else {
      console.log('导航被取消', error);
    }
  }
};
</script>

<template>
  <div>
    <button @click="handleNavigation">基本导航</button>
    <button @click="handleAsyncNavigation">异步导航</button>
  </div>
</template>
```

#### 使用 `<router-link>` 组件进行声明式导航

```vue
<template>
  <nav>
    <!-- 基本链接 -->
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于我们</router-link>
    
    <!-- 命名路由链接 -->
    <router-link :to="{ name: 'UserProfile', params: { id: 123 } }">
      用户详情
    </router-link>
    
    <!-- 带查询参数 -->
    <router-link :to="{ 
      path: '/users/123', 
      query: { from: 'nav', tab: 'profile' } 
    }">
      用户资料
    </router-link>
    
    <!-- 自定义激活类名 -->
    <router-link 
      to="/dashboard"
      active-class="router-link-active"
      exact-active-class="router-link-exact-active"
    >
      仪表板
    </router-link>
    
    <!-- 替换历史记录 -->
    <router-link to="/login" replace>
      登录
    </router-link>
    
    <!-- 自定义渲染 -->
    <router-link to="/custom" custom v-slot="{ href, route, navigate, isActive }">
      <a 
        :href="href" 
        @click="navigate"
        :class="{ active: isActive }"
      >
        自定义链接
      </a>
    </router-link>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: #42b883;
}

.router-link-exact-active {
  color: #42b883;
  font-weight: bold;
}
</style>
```

### 获取路由参数和信息

```vue
<script setup>
import { useRoute, watch } from 'vue-router';
import { ref, computed } from 'vue';

const route = useRoute();

// 获取路径参数
const userId = computed(() => route.params.id);

// 获取查询参数
const currentTab = computed(() => route.query.tab || 'profile');
const fromPage = computed(() => route.query.from);

// 获取路由元信息
const requiresAuth = computed(() => route.meta.requiresAuth);

// 获取完整路径
const fullPath = computed(() => route.fullPath);

// 监听路由变化
watch(() => route.params.id, (newId, oldId) => {
  console.log(`用户ID从 ${oldId} 变更为 ${newId}`);
  // 重新获取用户数据
  fetchUserData(newId);
});

// 监听查询参数变化
watch(() => route.query, (newQuery, oldQuery) => {
  console.log('查询参数变化:', newQuery);
});

const fetchUserData = (id) => {
  // 模拟数据获取
  console.log(`获取用户 ${id} 的数据`);
};
</script>

<template>
  <div>
    <h2>用户 ID: {{ userId }}</h2>
    <p>当前标签: {{ currentTab }}</p>
    <p>来源页面: {{ fromPage }}</p>
    <p>需要认证: {{ requiresAuth ? '是' : '否' }}</p>
    <p>完整路径: {{ fullPath }}</p>
  </div>
</template>
```

## 主要功能对比

### 1. 路由配置方式

| 特性 | React Router v6 | Vue Router 4 |
|------|----------------|--------------|
| **配置方式** | JSX 组件式 | 配置对象式 |
| **嵌套路由** | 组件嵌套 | children 配置 |
| **动态导入** | React.lazy() | () => import() |
| **路由元信息** | 无内置支持 | meta 字段 |

```jsx
// React: JSX 组件式配置
<Routes>
  <Route path="/users/:id" element={<UserProfile />} />
</Routes>
```

```javascript
// Vue: 配置对象式
const routes = [
  { 
    path: '/users/:id', 
    component: UserProfile,
    meta: { requiresAuth: true }
  }
];
```

### 2. 编程式导航 API

| 功能 | React Router v6 | Vue Router 4 |
|------|----------------|--------------|
| **基本导航** | `navigate('/path')` | `router.push('/path')` |
| **替换历史** | `navigate('/path', { replace: true })` | `router.replace('/path')` |
| **带状态导航** | `navigate('/path', { state: {} })` | `router.push({ path: '/path', state: {} })` |
| **历史记录控制** | `navigate(-1)` | `router.go(-1)` |

### 3. 声明式导航组件

| 特性 | React Router v6 | Vue Router 4 |
|------|----------------|--------------|
| **基本组件** | `<Link>` | `<router-link>` |
| **激活状态** | `<NavLink>` | active-class 属性 |
| **自定义渲染** | render prop | custom + v-slot |

### 4. 参数获取

| 参数类型 | React Router v6 | Vue Router 4 |
|---------|----------------|--------------|
| **路径参数** | `useParams()` | `route.params` |
| **查询参数** | `useSearchParams()` | `route.query` |
| **导航状态** | `useLocation().state` | `history.state` |

## 高级特性对比

### 导航守卫

**Vue Router 提供完整的导航守卫系统：**

```javascript
// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});

// 路由独享守卫
{
  path: '/admin',
  component: Admin,
  beforeEnter: (to, from, next) => {
    if (hasAdminPermission()) {
      next();
    } else {
      next('/unauthorized');
    }
  }
}

// 组件内守卫
export default {
  beforeRouteEnter(to, from, next) {
    // 组件实例还未创建
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改变但组件复用时调用
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 离开该组件的对应路由时调用
    next();
  }
}
```

**React Router 需要自行实现：**

```jsx
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { 
        state: { from: location },
        replace: true 
      });
    }
  }, [navigate, location]);
  
  return isAuthenticated() ? children : null;
}

// 使用
<Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
```

### 路由懒加载

**React:**
```jsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

<Route path="/dashboard" element={
  <Suspense fallback={<div>Loading...</div>}>
    <Dashboard />
  </Suspense>
} />
```

**Vue:**
```javascript
{
  path: '/dashboard',
  component: () => import('./Dashboard.vue')
}
```

## 性能对比

### 包大小
- **React Router v6**: ~13kb (gzipped)
- **Vue Router 4**: ~12kb (gzipped)

### 渲染性能
- **React Router**: 依赖 React 的渲染机制，需要注意避免不必要的重渲染
- **Vue Router**: Vue 的响应式系统天然优化了渲染性能

## 选择建议

### 选择 React Router 当：
- 项目使用 React 框架
- 喜欢 JSX 风格的路由配置
- 需要与 React 生态系统深度集成
- 团队熟悉函数式编程思维

### 选择 Vue Router 当：
- 项目使用 Vue 框架
- 需要完整的导航守卫系统
- 喜欢配置对象的路由定义方式
- 需要更多开箱即用的路由功能

## 最佳实践

### React Router 最佳实践

1. **使用命名导入**: 明确导入需要的组件
2. **合理使用 useCallback**: 优化事件处理函数
3. **路由拆分**: 将路由配置拆分到独立文件
4. **错误边界**: 为路由组件添加错误边界

```jsx
// routes.jsx
export const routeConfig = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary />
  }
];
```

### Vue Router 最佳实践

1. **使用命名路由**: 便于维护和重构
2. **合理使用导航守卫**: 避免过度嵌套的守卫逻辑
3. **路由模块化**: 按功能模块拆分路由
4. **类型安全**: 配合 TypeScript 使用

```typescript
// types/router.ts
interface RouteMeta {
  requiresAuth?: boolean;
  title?: string;
}
```

## 总结

| 方面 | React Router v6 | Vue Router 4 |
|------|----------------|--------------|
| **设计哲学** | 组件化、函数式 | 配置化、声明式 |
| **学习曲线** | 中等 | 相对简单 |
| **功能完整度** | 基础功能完善 | 功能丰富，开箱即用 |
| **生态集成** | React 生态 | Vue 生态 |
| **TypeScript 支持** | 良好 | 优秀 |

**总体评价：**

- **React Router** 更符合 React 的设计哲学，与 React 生态系统集成度更高，但需要开发者自行实现一些高级功能
- **Vue Router** 提供了更完整的路由解决方案，内置导航守卫、滚动行为等功能，开发体验更佳

两者都是成熟稳定的路由解决方案，选择主要取决于项目使用的框架和团队的技术偏好。无论选择哪种，都能很好地满足现代单页应用的路由需求。

::: tip 实践建议
在实际项目中，建议根据项目规模和复杂度选择合适的路由策略：
- 小型项目：使用默认配置即可
- 中型项目：合理使用导航守卫和路由懒加载
- 大型项目：考虑路由模块化和类型安全
:::

---
*发布于 2025年8月7日*
