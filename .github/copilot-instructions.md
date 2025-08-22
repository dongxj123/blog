# VitePress 文档站点 - AI 智能体指南

## 项目概述
这是一个基于 VitePress 的文档站点，采用标准结构：
- `docs/` - 主要文档内容目录
- `docs/.vitepress/config.mts` - 站点配置和导航
- `docs/.vitepress/theme/` - 自定义主题扩展

## 架构与结构

### 内容组织
- 内容文件为 `docs/` 目录中的 Markdown (`.md`) 文件
- 使用 frontmatter 进行页面配置（布局、大纲等）
- `index.md` 作为首页，使用 `layout: home` frontmatter

### 配置模式
- 站点配置在 `docs/.vitepress/config.mts` 中使用 TypeScript
- 导航定义在 `themeConfig.nav` 和 `themeConfig.sidebar` 中
- 默认主题在 `docs/.vitepress/theme/index.ts` 中扩展

### Markdown 中的 Vue 集成
- VitePress 允许在 `.md` 文件中直接使用 `<script setup>` 块
- 导入 VitePress 运行时 API（如 `useData()`）用于动态内容
- 使用 Vue 模板语法（`{{ }}`）显示响应式数据

## 开发工作流

### 常用命令
```bash
npm run docs:dev     # 启动开发服务器
npm run docs:build   # 生产环境构建
npm run docs:preview # 预览生产构建
```

### 内容编辑
- 编辑 `docs/` 目录中的 `.md` 文件来修改内容
- 添加新页面时更新 `docs/.vitepress/config.mts` 中的导航
- 使用 VitePress markdown 扩展（容器、代码高亮等）

## 关键约定

### 文件结构
- 简单站点在 `docs/` 中遵循平面结构
- 使用与导航链接匹配的描述性文件名
- 将资源放在 `docs/public/` 中（自动在根目录提供服务）

### Markdown 特性
- 使用 frontmatter `outline: deep` 自动生成目录
- 利用 VitePress 容器：`::: info`、`::: tip`、`::: warning`
- 代码块支持行高亮：```js{4}

### 主题定制
- 在 `docs/.vitepress/theme/index.ts` 中扩展默认主题
- 在 `docs/.vitepress/theme/style.css` 中覆盖 CSS 变量
- 使用 Vue 组合式函数实现动态功能

## 集成要点

### VitePress 运行时 API
- `useData()` 提供 `site`、`theme`、`page`、`frontmatter` 对象
- 在 `.md` 文件和 `.vue` 组件中都可用
- 用于基于当前页面上下文的动态内容

### 配置依赖关系
- 导航结构必须匹配实际文件路径
- 侧边栏项目应引用现有的 markdown 文件
- 主题配置影响外观和功能

在处理此代码库时：
1. 内容/配置更改后使用 `npm run docs:dev` 进行本地测试
2. 添加新页面时遵循现有导航结构
3. 优先使用 VitePress 内置功能，而非自定义解决方案
4. 参考官方 VitePress 文档了解高级功能
 
### 博客风格

- 要求突出重点、考点。结合生活实例
- 重点要记的用不一样的颜色标出来
