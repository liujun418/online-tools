# AI ToolBox Online — PRD

## 项目概述

**项目名称:** AI ToolBox Online
**域名:** ai.toolboxonline.club
**描述:** 基于 AI 的在线工具站，提供照片处理、文档转换等实用工具，采用 Freemium + 点数付费模式。
**技术栈:** Next.js 前端 (Vercel) + FastAPI 后端 (Render/Railway) + Replicate API + Stripe 计费
**主站关系:** 独立站点，主站 (toolboxonline.club) 首页提供入口导流

---

## 技术架构

```
┌─────────────────────────────────────────┐
│  ai.toolboxonline.club (Next.js)         │
│  部署: Vercel                            │
│  功能: 前端页面、用户登录、支付引导       │
└──────────────┬──────────────────────────┘
               │ HTTPS API
┌──────────────▼──────────────────────────┐
│  FastAPI Backend (Render/Railway)        │
│  功能: 任务队列、文件处理、点数扣费        │
├─────────────────────────────────────────┤
│  ┌─────────────┐  ┌──────────────────┐  │
│  │ Replicate   │  │ pdf2docx (自建)  │  │
│  │ API (图像)  │  │ (PDF 转换)       │  │
│  └─────────────┘  └──────────────────┘  │
│  ┌─────────────┐  ┌──────────────────┐  │
│  │ Stripe      │  │ S3 / R2 (存储)   │  │
│  │ (支付)      │  │ (临时文件)       │  │
│  └─────────────┘  └──────────────────┘  │
└─────────────────────────────────────────┘
```

**数据库:** PostgreSQL (Supabase 或 Railway 自带)
**文件存储:** Cloudflare R2 (便宜) 或 AWS S3
**认证:** 邮箱 + 密码 / Google OAuth
**唯一外部 AI API:** Replicate（按次计费，统一账单）

---

## 计费模式

| 计划 | 价格 | 点数 | 说明 |
|------|------|------|------|
| Free | $0 | 5 点/月 | 每月刷新，不可累积 |
| Basic | $9.99/月 | 100 点/月 | 每月刷新 |
| Pro | $24.99/月 | 500 点/月 | 每月刷新 |
| 单次充值 | $4.99 | 50 点 | 一次性购买，不刷新 |

**各工具消耗点数：**
- 照片转卡通/头像：5 点/张
- 背景移除：2 点/张
- 水印消除：3 点/张
- 老照片修复：5 点/张
- PDF 转 Word：1 点/次（页数>10 则 2 点）
- 文案生成：1 点/次

---

## 首批 AI 工具定义

### Tool-001: AI 头像/卡通生成 (AI Avatar Generator)
**描述:** 上传真人照片，生成卡通/动漫/专业头像风格的图片
**输入:** 用户上传照片
**输出:** 1-4 张风格化头像
**Replicate 模型:** SDXL + LoRA (如 cartoon style)
**消耗:** 5 点/次
**SEO 关键词:** ai avatar generator, cartoon photo converter, anime profile picture

### Tool-002: AI 背景移除 (Background Remover)
**描述:** 一键移除图片背景，支持透明/纯色/自定义背景替换
**输入:** 上传图片
**输出:** 去背景后的 PNG
**Replicate 模型:** rembg / sam
**消耗:** 2 点/次
**SEO 关键词:** background remover, remove bg, transparent background

### Tool-003: AI 水印消除 (Watermark Remover)
**描述:** 智能消除图片上的水印、文字、logo 等
**输入:** 上传图片 + 涂抹水印区域（或自动检测）
**输出:** 消除水印后的图片
**Replicate 模型:** LaMa (inpainting)
**消耗:** 3 点/次
**SEO 关键词:** watermark remover, remove watermark from photo, ai inpainting

### Tool-004: AI 老照片修复 (Photo Restorer)
**描述:** 修复模糊、划痕、褪色的老照片，支持上色
**输入:** 上传老照片
**输出:** 修复/上色的清晰照片
**Replicate 模型:** GFPGAN / CodeFormer
**消耗:** 5 点/次
**SEO 关键词:** old photo restore, photo enhancer, photo colorizer

### Tool-005: PDF 转 Word (PDF to Word Converter)
**描述:** 将 PDF 文档转换为可编辑的 Word (.docx) 文件
**输入:** 上传 PDF
**输出:** 下载 .docx 文件
**技术方案:** 后端 pdf2docx（非 Replicate，零 API 成本）
**消耗:** 1 点/次（>10 页 2 点）
**SEO 关键词:** pdf to word converter, pdf to docx, convert pdf to word online

---

## 后续可扩展工具

- AI 图片放大 (Upscaler)
- AI 图片压缩
- AI 视频摘要
- AI 简历优化
- AI 社交媒体文案生成
- AI 表情包生成
