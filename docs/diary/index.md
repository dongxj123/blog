---
title: 我的博客
outline: deep
---

# � 我的博客

欢迎来到我的个人博客，这里分享技术心得、学习笔记、生活感悟和成长思考。

## 📅 最新文章

### 2025年8月

- [React Render Props vs Vue 插槽 - 组件复用模式对比](./2025-08-06-react-render-props.md)
  *深入对比 React 的 Render Props 和 Vue 插槽机制，探索组件逻辑复用的不同思路*

- [2025年8月6日 - 开始写博客](./2025-08-06.md) 
  *开始搭建个人博客网站，学习VitePress框架*

- [2025年8月5日 - 周末的思考](./2025-08-05.md)
  *阅读《原则》的心得，关于时间管理和个人发展的思考*

## 🏷️ 文章分类

### 💻 技术相关
- [React](./2025-08-06-react-render-props.md) - Render Props 模式
- [Vue](./2025-08-06-react-render-props.md) - 插槽机制
- [VitePress](./2025-08-06.md) - 静态网站生成器
- [前端架构](./2025-08-06-react-render-props.md) - 组件设计模式

### 📚 学习成长  
- [思考](./2025-08-05.md) - 个人成长思考
- [阅读](./2025-08-05.md) - 读书笔记分享

### 🌱 生活感悟
- [周末](./2025-08-05.md) - 生活节奏与平衡

## 📊 博客统计

<script setup>
import { ref } from 'vue'

const stats = ref({
  totalPosts: 3,
  currentMonth: '2025年8月',
  totalWords: 2800,
  categories: ['React', 'Vue', '技术', '学习', '生活', '思考']
})
</script>

- **文章总数**: {{ stats.totalPosts }} 篇
- **本月更新**: {{ stats.currentMonth }}
- **总字数**: 约 {{ stats.totalWords }} 字
- **主要分类**: {{ stats.categories.join('、') }}

## 🎯 写作目标

- [x] 搭建个人博客网站
- [ ] 每月至少发布4篇文章
- [ ] 坚持技术学习分享
- [ ] 建立自己的知识体系

::: tip 博客的价值
- � 记录学习过程和成果
- 🧠 整理知识体系和思路  
- 📈 见证个人成长轨迹
- 🤝 与读者分享交流经验
:::

---

*这个博客使用 [VitePress](https://vitepress.dev/) 构建，支持 Markdown 语法和 Vue 组件集成。*
