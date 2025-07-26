# 大学录取通知书生成器 - React + TypeScript + Zustand 版本

这是一个使用 React、TypeScript 和 Zustand 构建的大学录取通知书生成器。

## 项目特色

- ✅ **React 18** - 现代化的 React 框架
- ✅ **TypeScript** - 类型安全的开发体验
- ✅ **Zustand** - 轻量级状态管理
- ✅ **Tailwind CSS** - 实用优先的 CSS 框架
- ✅ **Vite** - 快速的构建工具
- ✅ **pnpm** - 高效的包管理器

## 功能特性

- 📋 **完全自定义** - 可自定义大学名称、专业、学生信息等
- 🎨 **精美设计** - 仿真实录取通知书的精美界面
- 📱 **响应式** - 支持移动端和桌面端
- 🖼️ **图片导出** - 支持将通知书导出为高清图片
- 👀 **实时预览** - 实时预览通知书效果
- 🎲 **随机生成** - 一键随机生成内容
- 📤 **分享功能** - 支持分享生成的通知书

## 技术栈

- **前端框架**: React 18 + TypeScript
- **状态管理**: Zustand
- **样式**: Tailwind CSS + 自定义CSS
- **构建工具**: Vite
- **包管理**: pnpm
- **图片生成**: html2canvas

## 项目结构

```
university-admission-react/
├── src/
│   ├── components/          # React组件
│   │   ├── AdmissionLetter.tsx    # 通知书展示组件
│   │   ├── ControlPanel.tsx       # 控制面板组件
│   │   ├── SettingsDrawer.tsx     # 设置抽屉组件
│   │   ├── PreviewModal.tsx       # 预览模态框组件
│   │   └── Loading.tsx            # 加载组件
│   ├── store/               # 状态管理
│   │   └── admissionStore.ts      # Zustand状态存储
│   ├── utils/               # 工具函数
│   │   └── dateUtils.ts           # 日期格式化工具
│   ├── App.tsx              # 主应用组件
│   ├── App.css              # 样式文件
│   └── main.tsx             # 应用入口
├── index.html               # HTML模板
├── package.json             # 项目配置
├── tsconfig.json           # TypeScript配置
└── vite.config.ts          # Vite配置
```

## 快速开始

### 安装依赖

```bash
cd university-admission-react
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm preview
```

## 使用说明

1. **自定义内容**: 点击右下角的设置按钮，在弹出的抽屉中填写相关信息
2. **随机生成**: 点击"一键随机内容"按钮可以快速生成随机内容
3. **预览效果**: 点击"预览通知书"按钮查看效果
4. **导出图片**: 点击"下载图片"按钮将通知书保存为PNG图片
5. **分享喜报**: 点击"分享喜报"按钮分享你的录取通知书

## 可自定义内容

- 大学名称
- 录取专业
- 学制时间
- 录取日期
- 考生姓名
- 考生号
- 报到时间
- 通知标题
- 通知副标题
- 通知正文
- 签发单位
- 单位名称

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License
