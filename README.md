# 秦朝历史视频演示 · Qin Dynasty Video Presentation

> 基于 [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) 的 `web-video-presentation` 技能构建的 16:9 历史视频演示项目。

8 章节交互式历史演示，kraft-paper 主题，支持音频配音与自动播放。

## 预览

```bash
cd presentation && npm run dev
```

打开 `http://localhost:5174`，侧栏选章节，舞台区域点击推进。

| 模式 | 操作 |
|------|------|
| 手动 | 默认，点击/方向键翻页 |
| 半自动 | 打开 `?audio=1`，进 step 自动播配音 |
| 全自动 | 打开 `?auto=1`，按 `Space` 启动 |

快捷键 `M` 循环切换模式。

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

## 音频合成

```bash
# 免费 edge-tts（无 API key）
pip install edge-tts
python scripts/synthesize-edge-tts.py

# 或使用 OpenAI TTS
export OPENAI_API_KEY=sk-...
PRESENTATION_TTS=openai npm run synthesize-audio
```

## 来源

本项目的演示框架、组件系统、主题系统、音频流水线均源自 [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) 的 `web-video-presentation` 技能。内容素材（口播稿、历史文案）为独立编写。

## 技术栈

- Vite + React + TypeScript
- 1920×1080 16:9 视频演示画布
- kraft-paper 主题（牛皮纸古籍风格）
- edge-tts / OpenAI TTS 配音
- 支持 manual / audio / auto 三种播放模式
