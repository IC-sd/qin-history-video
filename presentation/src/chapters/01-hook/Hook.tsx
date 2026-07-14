import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Hook.css";

/**
 * Chapter 1 — hook: 千古一帝还是暴君？
 * kraft-paper theme: warm kraft beige, deep brown ink, copper-rust accent.
 */
export default function HookChapter({ step }: ChapterStepProps) {
  /* Step 0 — Cold open: "千古一帝，还是千古暴君？" */
  if (step === 0) {
    return (
      <div className="h-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">公元前 221 — 前 207</span>
        </header>

        <div className="h-coldopen">
          <div className="kicker">Chapter 01 — 开篇</div>
          <h1 className="h-coldopen-h">
            <MaskReveal show duration={1200}>
              <span className="serif-cn">千古一帝，</span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={500} duration={1200}>
              <span className="serif-it h-em">还是千古暴君？</span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={1100} duration={900}>
              <span className="serif-cn">——秦始皇的两张面孔</span>
            </MaskReveal>
          </h1>
          <div className="h-coldopen-foot label-mono">
            <span className="dot-accent" /> &nbsp;点击推进
          </div>
        </div>

        <div className="h-corner-tl" />
        <div className="h-corner-br" />
      </div>
    );
  }

  /* Step 1 — 黄仁宇的点评，左右对照 */
  if (step === 1) {
    return (
      <div className="h-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 01</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="h-quote-split">
          <div className="h-quote-side">
            <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>谴责的一面</div>
            <div className="h-quote-text h-quote-left">
              <MaskReveal show duration={1000}>
                <span className="serif-cn">"他的残酷无道</span>
              </MaskReveal>
              <br />
              <MaskReveal show delay={350} duration={1000}>
                <span className="serif-it h-em">达到离奇之境界</span>
              </MaskReveal>
              <br />
              <MaskReveal show delay={700} duration={800}>
                <span className="serif-cn">，如何可以不受谴责？"</span>
              </MaskReveal>
            </div>
          </div>

          <div className="h-quote-divider" />

          <div className="h-quote-side">
            <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>仰慕的一面</div>
            <div className="h-quote-text h-quote-right">
              <MaskReveal show duration={1000}>
                <span className="serif-cn">"可是他统一中国的工作，</span>
              </MaskReveal>
              <br />
              <MaskReveal show delay={350} duration={1000}>
                <span className="serif-cn">用这样长远的眼光设计，</span>
              </MaskReveal>
              <br />
              <MaskReveal show delay={700} duration={1000}>
                <span className="serif-cn">又用这样精到的手腕完成，</span>
              </MaskReveal>
              <br />
              <MaskReveal show delay={1050} duration={800}>
                <span className="serif-it h-em">又如何能不仰慕？"</span>
              </MaskReveal>
            </div>
          </div>
        </div>

        <div className="h-quote-attribution label-mono">
          <span className="dot-accent" /> &nbsp;黄仁宇 ——《中国大历史》
        </div>
      </div>
    );
  }

  /* Step 2 — 李贽「千古一帝」+ 争议延续两千多年 */
  if (step === 2) {
    return (
      <div className="h-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 01</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="h-praise">
          <div className="h-praise-hero">
            <MaskReveal show duration={1100}>
              <span className="serif-it h-hero-num">千古一帝</span>
            </MaskReveal>
          </div>
          <div className="h-praise-byline label-mono">
            <MaskReveal show delay={600} duration={800}>
              <span>—— 明代思想家 李贽</span>
            </MaskReveal>
          </div>
          <div className="h-praise-sub">
            <MaskReveal show delay={1100} duration={900}>
              <span className="serif-cn">然而两千多年来，</span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={1400} duration={900}>
              <span className="serif-cn">关于他的争论 </span>
            </MaskReveal>
            <MaskReveal show delay={1700} duration={900}>
              <span className="serif-it h-em">从未停止</span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 3 — 预告视频结构：从传奇到暴政，从统一到覆灭 */
  return (
    <div className="h-scene scene-pad">
      <header className="masthead">
        <span className="brand">Qin · 秦</span>
        <span className="issue">Chapter 01</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

      <div className="h-preview">
        <div className="kicker" style={{ marginBottom: "var(--space-5)" }}>本集内容</div>
        <div className="h-preview-grid">
          <div className="h-preview-item">
            <MaskReveal show duration={700}>
              <span className="h-preview-dot" />
            </MaskReveal>
            <MaskReveal show delay={100} duration={700}>
              <span className="serif-cn h-preview-label">传奇人生的开始</span>
            </MaskReveal>
          </div>
          <div className="h-preview-item">
            <MaskReveal show delay={400} duration={700}>
              <span className="h-preview-dot" />
            </MaskReveal>
            <MaskReveal show delay={500} duration={700}>
              <span className="serif-cn h-preview-label">清君侧 灭六国</span>
            </MaskReveal>
          </div>
          <div className="h-preview-item">
            <MaskReveal show delay={800} duration={700}>
              <span className="h-preview-dot" />
            </MaskReveal>
            <MaskReveal show delay={900} duration={700}>
              <span className="serif-cn h-preview-label">全面革新 创立帝国</span>
            </MaskReveal>
          </div>
          <div className="h-preview-item">
            <MaskReveal show delay={1200} duration={700}>
              <span className="h-preview-dot" />
            </MaskReveal>
            <MaskReveal show delay={1300} duration={700}>
              <span className="serif-cn h-preview-label">荒淫暴君 焚书坑儒</span>
            </MaskReveal>
          </div>
          <div className="h-preview-item">
            <MaskReveal show delay={1600} duration={700}>
              <span className="h-preview-dot" />
            </MaskReveal>
            <MaskReveal show delay={1700} duration={700}>
              <span className="serif-cn h-preview-label">妄求长生 身死异乡</span>
            </MaskReveal>
          </div>
          <div className="h-preview-item">
            <MaskReveal show delay={2000} duration={700}>
              <span className="h-preview-dot" />
            </MaskReveal>
            <MaskReveal show delay={2100} duration={700}>
              <span className="serif-cn h-preview-label">二世嬴胡亥</span>
            </MaskReveal>
          </div>
          <div className="h-preview-item">
            <MaskReveal show delay={2400} duration={700}>
              <span className="h-preview-dot h-preview-dot-last" />
            </MaskReveal>
            <MaskReveal show delay={2500} duration={700}>
              <span className="serif-cn h-preview-label">历史评说</span>
            </MaskReveal>
          </div>
        </div>
        <div className="h-preview-foot label-mono" style={{ marginTop: "var(--space-7)" }}>
          <span className="dot-accent" /> &nbsp;共 8 章 · 约 10 分钟
        </div>
      </div>
    </div>
  );
}
