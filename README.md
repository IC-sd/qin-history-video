# 秦朝历史视频演示 · Qin Dynasty Video Presentation

> 基于 [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) 的 `web-video-presentation` 技能构建的 16:9 历史视频演示项目。

🔗 **在线预览**：[ic-sd.github.io/qin-history-video](https://ic-sd.github.io/qin-history-video/)

> ⚠️ 这是互动演示与视频制作项目，不是学术史料库。历史表述包含通俗叙事与评价性内容，正式引用前请与可靠史料交叉核验。

---

## 简介

8 章节交互式秦朝历史演示，kraft-paper（牛皮纸古籍风格）主题，支持音频配音与自动播放。内容涵盖秦始皇嬴政从出生到统一的传奇一生，以及秦二世而亡的故事。

- 📜 **8 个章节**，从开篇到历史评说
- 🎨 **牛皮纸主题**，古朴典雅的视觉风格
- 🔊 **中文配音**，支持 edge-tts / OpenAI TTS 合成
- 🎮 **三种播放模式**：手动 / 半自动（音频推进）/ 全自动
- ⌨️ **键盘快捷键**：方向键翻页，数字键跳章，M 切换模式
- 📱 **响应式 16:9 画布**，自适应屏幕

---

## 本地运行

环境要求：Node.js 20.19+ 或 22.12+。

```bash
git clone https://github.com/IC-sd/qin-history-video.git
cd qin-history-video/presentation
npm ci
npm run dev
```

打开 `http://localhost:5174`，点击舞台区域推进演示。

构建与检查：

```bash
npm run lint
npm run build
npm run preview
```

---

## 播放模式

| 模式 | 启用方式 | 行为 |
|------|----------|------|
| 手动 | 默认 | 点击舞台、方向键或空格推进 |
| 配音 | URL 添加 `?audio=1` | 自动播放当前步骤配音，手动推进 |
| 自动 | URL 添加 `?auto=1` | 按空格或点击启动，配音结束后自动推进 |

### 键盘快捷键

- `→` / `Space`：下一步
- `←` / `Backspace`：上一步
- `M`：循环切换手动、配音、自动模式
- `Home` / `End`：跳转到第一/最后一章
- `1`–`8`：跳转到对应章节

当前播放位置会保存在浏览器本地存储中，刷新页面后可以继续。

---

## 章节

| # | 标题 | 内容 |
|---|------|------|
| 01 | 千古一帝，还是千古暴君？ | 开篇 — 秦始皇的两张面孔 |
| 02 | 传奇人生的开始 | 子楚、吕不韦、赵姬、嬴政出生与流亡 |
| 03 | 清君侧 灭六国 | 嫪毐叛乱、逼死吕不韦、十年统一 |
| 04 | 全面革新 创立帝国 | 郡县制、文字度量衡统一、长城 |
| 05 | 荒淫暴君 焚书坑儒 | 严刑峻法、阿房宫、焚书坑儒、民怨 |
| 06 | 妄求长生 身死异乡 | 徐福骗局、五次巡游、沙丘之死 |
| 07 | 二世嬴胡亥 | 血洗宗室、指鹿为马、大泽乡起义 |
| 08 | 历史评说 | 功过回顾、黄仁宇结语 |

---

## 音频合成

### 提取旁白

章节文字位于 `presentation/src/chapters/<章节>/narrations.ts`。

```bash
cd presentation
npm run extract-narrations
```

这会生成已被忽略的 `audio-segments.json`。音频路径：`public/audio/<chapter-id>/<step>.mp3`

### 免费 TTS（推荐）

```bash
pip install edge-tts
python scripts/synthesize-edge-tts.py
```

### 可选：OpenAI TTS

```bash
export OPENAI_API_KEY=sk-...
PRESENTATION_TTS=openai npm run synthesize-audio
```

---

## 部署（GitHub Pages）

```bash
cd presentation
npm run deploy
```

或 push 到 `main` 分支后，[GitHub Actions](.github/workflows/deploy.yml) 自动构建并部署到 `gh-pages` 分支。

---

## 目录结构

```text
qin-history-video/
├── article.md                 长文内容
├── outline.md                 章节提纲
├── script.md                  视频脚本
├── README.md
└── presentation/
    ├── public/audio/          已发布的分步配音
    ├── scripts/               旁白提取与 TTS 流程
    ├── src/chapters/          8 个章节的画面与旁白
    ├── src/components/        舞台、导航和播放控件
    ├── src/hooks/             步进、音频、自动播放与缩放
    ├── src/registry/          章节注册表
    └── src/styles/            主题、排版与动画
```

---

## 隐私与发布检查

- 项目本身不包含登录、统计或用户数据采集代码。
- 使用第三方 TTS 时，旁白文本会发送给对应服务商；请先确认其数据处理政策。
- **API Key 只应通过环境变量提供，不要写入脚本、README 或提交记录。**
- `.env`、日志、临时音频清单和构建产物已被 `.gitignore` 忽略。
- `public/audio/` 下的 MP3 会随网站公开发布。替换音频前请确认没有真人私密录音或个人内容。
- 发布前建议运行 `git diff --cached`，只提交预期的源码、文档和公开素材。

---

## 技术栈

- **Vite** + **React 19** + **TypeScript**
- 1920×1080 16:9 演示画布
- kraft-paper 主题（牛皮纸古籍风格）
- edge-tts / OpenAI TTS 配音
- 支持 manual / audio / auto 三种播放模式
- GitHub Actions 自动部署

---

## 来源与致谢

演示框架、组件系统、主题系统和音频流水线基于 [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) 中的 `web-video-presentation` 技能构建。历史文案和章节内容在本项目中独立整理。

---

## License

MIT
