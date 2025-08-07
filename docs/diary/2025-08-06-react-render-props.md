---
title: React Render Props vs Vue 插槽 - 组件复用模式对比
date: 2025-08-06
author: 我的名字
tags: [React, Vue, 组件设计, 前端]
outline: deep
---

# 2025年8月6日 - React Render Props vs Vue 插槽 - 组件复用模式对比

::: info 文章概述
深入对比 React 的 Render Props 模式和 Vue 的插槽机制，探索两种框架中组件逻辑复用的不同思路
:::

## 什么是 Render Props

Render Props 是 React 中一种通过将函数作为 prop 传递来共享组件逻辑的技术。这个函数返回 React 元素，并由组件内部调用。

### React Render Props 示例

让我们通过一个鼠标位置跟踪的例子来理解 Render Props：

```jsx
// MouseTracker.jsx - 使用 Render Props 的组件
import React, { useState, useEffect } from 'react';

const MouseTracker = ({ children, render }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 支持两种方式：render prop 或 children 函数
  return (
    <div>
      {render ? render(mousePosition) : children(mousePosition)}
    </div>
  );
};

export default MouseTracker;
```

#### 使用方式 1：通过 render prop

```jsx
// App.jsx
import MouseTracker from './MouseTracker';

const App = () => {
  return (
    <div>
      <h1>鼠标位置跟踪</h1>
      
      {/* 方式1: 使用 render prop */}
      <MouseTracker
        render={(mousePosition) => (
          <div>
            <h2>当前鼠标位置</h2>
            <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
          </div>
        )}
      />
      
      {/* 方式2: 使用 children 函数 */}
      <MouseTracker>
        {(mousePosition) => (
          <div style={{
            position: 'absolute',
            left: mousePosition.x,
            top: mousePosition.y,
            width: 10,
            height: 10,
            backgroundColor: 'red',
            borderRadius: '50%'
          }}>
            🔴
          </div>
        )}
      </MouseTracker>
    </div>
  );
};

export default App;
```

#### 更复杂的数据获取示例

```jsx
// DataFetcher.jsx
import React, { useState, useEffect } from 'react';

const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('网络请求失败');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return render({ data, loading, error });
};

// 使用示例
const UserList = () => {
  return (
    <DataFetcher
      url="/api/users"
      render={({ data, loading, error }) => {
        if (loading) return <div>加载中...</div>;
        if (error) return <div>错误: {error}</div>;
        
        return (
          <ul>
            {data?.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    />
  );
};
```

## Vue 插槽对比

Vue 使用插槽（Slots）来实现类似的组件内容定制功能，语法更加直观和声明式。

### Vue 作用域插槽示例

```vue
<!-- MouseTracker.vue -->
<template>
  <div>
    <!-- 默认插槽传递鼠标位置数据 -->
    <slot :mousePosition="mousePosition" />
    
    <!-- 具名插槽示例 -->
    <slot name="info" :x="mousePosition.x" :y="mousePosition.y" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mousePosition = ref({ x: 0, y: 0 })

const handleMouseMove = (event) => {
  mousePosition.value = {
    x: event.clientX,
    y: event.clientY
  }
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>
```

#### Vue 使用方式

```vue
<!-- App.vue -->
<template>
  <div>
    <h1>鼠标位置跟踪</h1>
    
    <!-- 使用作用域插槽接收数据 -->
    <MouseTracker>
      <template #default="{ mousePosition }">
        <div>
          <h2>当前鼠标位置</h2>
          <p>X: {{ mousePosition.x }}, Y: {{ mousePosition.y }}</p>
        </div>
      </template>
      
      <!-- 具名插槽 -->
      <template #info="{ x, y }">
        <div :style="{
          position: 'absolute',
          left: x + 'px',
          top: y + 'px',
          width: '10px',
          height: '10px',
          backgroundColor: 'red',
          borderRadius: '50%'
        }">
          🔴
        </div>
      </template>
    </MouseTracker>
  </div>
</template>

<script setup>
import MouseTracker from './components/MouseTracker.vue'
</script>
```

#### Vue 数据获取组件

```vue
<!-- DataFetcher.vue -->
<template>
  <slot :data="data" :loading="loading" :error="error" />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  }
})

const data = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchData = async () => {
  try {
    loading.value = true
    error.value = null
    const response = await fetch(props.url)
    if (!response.ok) throw new Error('网络请求失败')
    data.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
watch(() => props.url, fetchData)
</script>
```

```vue
<!-- 使用示例 -->
<template>
  <DataFetcher url="/api/users">
    <template #default="{ data, loading, error }">
      <div v-if="loading">加载中...</div>
      <div v-else-if="error">错误: {{ error }}</div>
      <ul v-else>
        <li v-for="user in data" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </template>
  </DataFetcher>
</template>
```

## 详细对比分析

### 1. 语法差异

| 特性 | React Render Props | Vue 作用域插槽 |
|------|-------------------|----------------|
| **数据传递** | 函数参数 | 插槽 props |
| **语法复杂度** | 相对复杂 | 更直观 |
| **类型支持** | 需要 TypeScript 辅助 | 天然支持类型推导 |

```jsx
// React: 函数式，JavaScript 表达式
<MouseTracker render={(pos) => <div>{pos.x}</div>} />
```

```vue
<!-- Vue: 模板语法，更声明式 -->
<MouseTracker>
  <template #default="{ mousePosition }">
    <div>{{ mousePosition.x }}</div>
  </template>
</MouseTracker>
```

### 2. 多个内容区域支持

**React 需要多个 render props：**
```jsx
<Layout
  header={(user) => <Header user={user} />}
  sidebar={(menu) => <Sidebar items={menu} />}
  content={(data) => <Content data={data} />}
/>
```

**Vue 使用具名插槽更优雅：**
```vue
<Layout>
  <template #header="{ user }">
    <Header :user="user" />
  </template>
  <template #sidebar="{ menu }">
    <Sidebar :items="menu" />
  </template>
  <template #content="{ data }">
    <Content :data="data" />
  </template>
</Layout>
```

### 3. TypeScript 支持

**React 需要明确定义类型：**
```tsx
interface MousePosition {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (position: MousePosition) => React.ReactNode;
}

const MouseTracker: React.FC<MouseTrackerProps> = ({ render }) => {
  // ...
};
```

**Vue 自动推导类型：**
```vue
<script setup lang="ts">
// Vue 会自动推导插槽 props 的类型
const mousePosition = ref({ x: 0, y: 0 })
</script>
```

### 4. 性能考虑

**React Render Props 潜在问题：**
```jsx
// ❌ 每次渲染都创建新函数，可能导致不必要的重渲染
<MouseTracker render={(pos) => <Child position={pos} />} />

// ✅ 使用 useCallback 优化
const renderChild = useCallback((pos) => <Child position={pos} />, []);
<MouseTracker render={renderChild} />
```

**Vue 插槽天然优化：**
```vue
<!-- Vue 的插槽在编译时优化，性能更好 -->
<MouseTracker>
  <template #default="{ mousePosition }">
    <Child :position="mousePosition" />
  </template>
</MouseTracker>
```

## 应用场景对比

### 适合 Render Props 的场景
- 需要高度动态的组件组合
- 逻辑复用优先于模板复用
- 函数式编程风格

### 适合插槽的场景  
- 模板结构相对固定
- 需要多个内容区域
- 追求模板的可读性

## 总结

| 方面 | React Render Props | Vue 插槽 |
|------|-------------------|----------|
| **学习曲线** | 较陡峭 | 相对平缓 |
| **代码可读性** | 函数嵌套较多 | 模板结构清晰 |
| **灵活性** | 极高 | 高 |
| **性能** | 需要手动优化 | 编译时优化 |
| **类型安全** | 需要额外配置 | 天然支持 |

两种模式都是优秀的组件复用方案，选择哪种主要取决于：

1. **团队技术栈** - React 项目用 Render Props，Vue 项目用插槽
2. **应用复杂度** - 简单场景插槽更合适，复杂逻辑 Render Props 更灵活  
3. **开发偏好** - 函数式 vs 模板式编程风格

::: tip 最佳实践
无论使用哪种模式，都要注意：
- 保持组件职责单一
- 避免过度抽象
- 考虑性能影响
- 确保良好的类型安全
:::

---
*发布于 2025年8月6日*
