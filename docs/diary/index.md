---
title: 我的博客
outline: deep
---

# 📝 我的博客

欢迎来到我的个人博客，这里分享技术心得、学习笔记、生活感悟和成长思考。

## 📅 最新文章

### 2025年8月

- [软考系统架构师：嵌入式系统设计与开发全面解析](./2025-08-15-embedded-systems.md)
  *深入解析嵌入式系统硬件架构、实时操作系统、开发流程和性能优化，参考文老师软考教育重点内容*

- [软考系统架构师：存储系统深度解析与性能优化](./2025-08-15-storage-systems.md)
  *全面解析存储系统层次结构、缓存技术、RAID技术和分布式存储，助力软考备考*

- [软考系统架构师：指令流水线计算详解与实战](./2025-08-14-pipeline-calculation.md)
  *深入解析指令流水线技术，重点讲解流水线性能计算方法和实战技巧*

- [软考系统架构师：指令寻址与操作数寻址方式详解](./2025-08-14-addressing-modes.md)
  *深入浅出地讲解计算机组成原理中的寻址方式，帮助软考考生理解重要知识点*

- [Vue keep-alive 缓存机制详解](./2025-08-09-vue-keep-alive.md)
  *详解 Vue 路由组件缓存中 keep-alive 的 name 匹配机制和使用技巧*

- [React 和 Vue3 路由导航深度解析](./2025-08-07-react-vue-router.md)
  *深入对比 React Router v6 和 Vue Router 4 的设计理念、API 使用和最佳实践*

- [React Render Props vs Vue 插槽 - 组件复用模式对比](./2025-08-06-react-render-props.md)
  *深入对比 React 的 Render Props 和 Vue 插槽机制，探索组件逻辑复用的不同思路*

- [2025年8月6日 - 开始写博客](./2025-08-06.md) 
  *开始搭建个人博客网站，学习VitePress框架*

- [2025年8月5日 - 周末的思考](./2025-08-05.md)
  *阅读《原则》的心得，关于时间管理和个人发展的思考*

## 🏷️ 文章分类

### 💻 技术相关
- [软考系统架构师](./2025-08-14-addressing-modes.md) - 寻址方式详解
- [指令流水线](./2025-08-14-pipeline-calculation.md) - 性能计算实战
- [Vue 组件缓存](./2025-08-09-vue-keep-alive.md) - keep-alive 机制
- [路由导航](./2025-08-07-react-vue-router.md) - React Router vs Vue Router
- [React](./2025-08-06-react-render-props.md) - Render Props 模式
- [Vue](./2025-08-06-react-render-props.md) - 插槽机制
- [VitePress](./2025-08-06.md) - 静态网站生成器
- [前端架构](./2025-08-06-react-render-props.md) - 组件设计模式
- [单页应用](./2025-08-07-react-vue-router.md) - SPA 路由方案

### 📚 学习成长  
- [软考备考](./2025-08-14-addressing-modes.md) - 系统架构师考试
- [计算机组成原理](./2025-08-14-pipeline-calculation.md) - 流水线技术
- [思考](./2025-08-05.md) - 个人成长思考
- [阅读](./2025-08-05.md) - 读书笔记分享

### 🌱 生活感悟
- [周末](./2025-08-05.md) - 生活节奏与平衡

## 📊 博客统计

<script setup>
import { ref } from 'vue'

const stats = ref({
  totalPosts: 9,
  currentMonth: '2025年8月',
  totalWords: 22000,
  categories: ['软考', '嵌入式系统', '实时系统', 'ARM', 'RTOS', '存储系统', '流水线', 'RAID', '缓存', 'Vue', 'React', '路由', 'keep-alive', '性能优化', '技术', '学习', '生活', '思考']
})
</script>

- **文章总数**: {{ stats.totalPosts }} 篇
- **本月更新**: {{ stats.currentMonth }}
- **总字数**: 约 {{ stats.totalWords }} 字
- **主要分类**: {{ stats.categories.join('、') }}

## 🎯 写作目标

- [x] 搭建个人博客网站
- [x] 每月至少发布4篇文章
- [x] 坚持技术学习分享
- [ ] 建立自己的知识体系

::: tip 博客的价值
- 📖 记录学习过程和成果
- 🧠 整理知识体系和思路  
- 📈 见证个人成长轨迹
- 🤝 与读者分享交流经验
:::

---

*这个博客使用 [VitePress](https://vitepress.dev/) 构建，支持 Markdown 语法和 Vue 组件集成。*
