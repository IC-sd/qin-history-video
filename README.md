# 秦始皇历史视频演示

一个面向网页录制的 16:9 互动历史演示。项目用 8 个章节讲述秦始皇从质子经历、统一六国到秦朝覆亡的历史叙事，提供手动、配音和全自动三种播放方式。

[在线预览](https://ic-sd.github.io/qin-history-video/)

> 这是互动演示与视频制作项目，不是学术史料库。历史表述包含通俗叙事与评价性内容，正式引用前请与可靠史料交叉核验。

## 特性

- 1920 × 1080 固定舞台，自动适配浏览器窗口
- 8 章、多个分步动画场景
- 章节导航、进度提示与键盘快捷键
- 每一步独立配音，支持自动衔接
- 浏览器自动播放门槛处理
- 尊重系统“减少动态效果”设置
- 可直接构建并发布到 GitHub Pages

## 播放方式

| 模式 | 启用方式 | 行为 |
|---|---|---|
| 手动 | 默认 | 点击舞台、方向键或空格推进 |
| 配音 | URL 添加 `?audio=1` | 自动播放当前步骤配音，手动推进 |
| 自动 | URL 添加 `?auto=1` | 按空格或点击启动，配音结束后自动推进 |

快捷键：

- `←` / `Backspace`：上一步
- `→`：下一步
- `Space`：手动模式下一步；自动模式启动播放
- `M`：循环切换手动、配音、自动模式
- `Home` / `End`：第一章 / 最后一章
- `1`–`8`：跳转到对应章节

当前播放位置会保存在浏览器本地存储中，刷新页面后可以继续。

## 本地运行

环境要求：Node.js 20.19+ 或 22.12+。

```bash
git clone https://github.com/IC-sd/qin-history-video.git
cd qin-history-video/presentation
npm ci
npm run dev
```

打开 <http://localhost:5174/qin-history-video/>。

构建与检查：

```bash
npm run lint
npm run build
npm run preview
```

## 内容与配音

章节文字位于：

```text
presentation/src/chapters/<章节>/narrations.ts
```

提取全部非空旁白：

```bash
cd presentation
npm run extract-narrations
```

这会生成已被忽略的 `audio-segments.json`。音频路径遵循：

```text
public/audio/<chapter-id>/<step>.mp3
```

### 免费本地流程

```bash
python -m pip install edge-tts
python scripts/synthesize-edge-tts.py
```

### 可选第三方 TTS

```bash
# 示例：使用 OpenAI TTS
export OPENAI_API_KEY="your-key"
PRESENTATION_TTS=openai npm run synthesize-audio
```

更多提供商配置见 [TTS providers](./presentation/scripts/tts-providers/README.md)。

## 隐私与发布检查

- 项目本身不包含登录、统计或用户数据采集代码。
- 使用第三方 TTS 时，旁白文本会发送给对应服务商；请先确认其数据处理政策。
- API Key 只应通过环境变量或服务商 CLI 登录提供，不要写入脚本、README、截图或提交记录。
- `.env`、日志、临时音频清单和构建产物已被忽略。
- `public/audio/` 下的 MP3 会随网站公开发布。替换音频前请确认其中没有真人私密录音、姓名、地址或其他个人内容。
- 发布前建议运行 `git diff --cached`，只提交预期的源码、文档和公开素材。

## 目录结构

```text
qin-history-video/
├─ article.md                 长文内容
├─ outline.md                 章节提纲
├─ script.md                  视频脚本
└─ presentation/
   ├─ public/audio/           已发布的分步配音
   ├─ scripts/                旁白提取与 TTS 流程
   ├─ src/chapters/           8 个章节的画面与旁白
   ├─ src/components/         舞台、导航和播放控件
   ├─ src/hooks/              步进、音频、自动播放与缩放
   ├─ src/registry/           章节注册表
   └─ src/styles/             主题、排版与动画
```

## 部署

仓库已配置 Vite 基础路径 `/qin-history-video/`：

```bash
cd presentation
npm run deploy
```

该命令会构建项目并更新 `gh-pages` 分支。执行前请先完成上面的隐私与发布检查。

## 来源与致谢

演示框架、组件系统、主题系统和音频流水线基于
[ConardLi/garden-skills](https://github.com/ConardLi/garden-skills)
中的 `web-video-presentation` 技能构建；历史文案和章节内容在本项目中独立整理。
