import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Epilogue.css";

/**
 * Chapter 08 — Epilogue (历史评说)
 * kraft-paper theme: warm kraft beige, deep brown ink, copper-rust accent.
 *
 * 4 steps:
 *   0 — 功绩回顾 (merits, items slide in from left)
 *   1 — 过失回顾 (faults, items slide in from right)
 *   2 — 黄仁宇结语 (left/right quote split)
 *   3 — 片尾 (finale with ritual feel, copper corners)
 */
export default function EpilogueChapter({ step }: ChapterStepProps) {
  /* ─── Step 0: 功绩回顾 ─── */
  if (step === 0) {
    const merits = [
      { label: "统一中国", delay: 0 },
      { label: "郡县制", delay: 400 },
      { label: "文字统一", delay: 800 },
      { label: "度量衡统一", delay: 1200 },
      { label: "长城", delay: 1600 },
      { label: "疆域扩张", delay: 2000 },
    ];
    return (
      <div className="ep-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 08</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ep-merits">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>
            功绩
          </div>
          {merits.map((m, i) => (
            <div className="ep-merit-item" key={i}>
              <MaskReveal show delay={m.delay} duration={700}>
                <span className="ep-merit-dot" />
              </MaskReveal>
              <MaskReveal show delay={m.delay + 100} duration={700}>
                <span className="serif-cn ep-merit-label">{m.label}</span>
              </MaskReveal>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ─── Step 1: 过失回顾 ─── */
  if (step === 1) {
    const faults = [
      { label: "严刑峻法", delay: 0 },
      { label: "横征暴敛", delay: 500 },
      { label: "焚书坑儒", delay: 1000 },
      { label: "二世而亡", delay: 1500 },
    ];
    return (
      <div className="ep-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 08</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ep-faults">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>
            过失
          </div>
          {faults.map((f, i) => (
            <div className="ep-fault-item" key={i}>
              <MaskReveal show delay={f.delay} duration={700}>
                <span className="ep-fault-dot" />
              </MaskReveal>
              <MaskReveal show delay={f.delay + 100} duration={700}>
                <span className="serif-cn ep-fault-label">{f.label}</span>
              </MaskReveal>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ─── Step 2: 黄仁宇结语 — 左右对照 ─── */
  if (step === 2) {
    return (
      <div className="ep-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 08</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ep-quote-split">
          <div className="ep-quote-side">
            <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>
              无法不谴责
            </div>
            <div className="ep-quote-text">
              <MaskReveal show duration={1000}>
                <span className="serif-cn">他的残酷</span>
              </MaskReveal>
              <br />
              <MaskReveal show delay={350} duration={1000}>
                <span className="serif-it ep-em">让我们无法不谴责</span>
              </MaskReveal>
            </div>
          </div>

          <div className="ep-quote-divider" />

          <div className="ep-quote-side" style={{ textAlign: "right" }}>
            <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>
              无法不仰慕
            </div>
            <div className="ep-quote-text">
              <MaskReveal show duration={1000}>
                <span className="serif-cn">但他统一中国的眼光和手腕，</span>
              </MaskReveal>
              <br />
              <MaskReveal show delay={400} duration={1000}>
                <span className="serif-it ep-em">又让我们无法不仰慕</span>
              </MaskReveal>
            </div>
          </div>
        </div>

        <div className="ep-quote-attribution label-mono">
          <span className="dot-accent" /> &nbsp;黄仁宇
        </div>
      </div>
    );
  }

  /* ─── Step 3: 片尾 ─── */
  return (
    <div className="ep-scene scene-pad">
      <div className="ep-paper-texture" />

      {/* Copper corner decorations */}
      <div className="ep-corner-tl" />
      <div className="ep-corner-br" />

      <div className="ep-finale">
        <div className="ep-finale-icon">
          <MaskReveal show duration={1200}>
            <span>兵马俑 · 长城</span>
          </MaskReveal>
        </div>

        <div className="ep-finale-main">
          <MaskReveal show delay={600} duration={1000}>
            <span className="serif-cn">千古一帝，</span>
          </MaskReveal>
          <br />
          <MaskReveal show delay={1000} duration={1000}>
            <span className="serif-it ep-em">千古暴君。</span>
          </MaskReveal>
        </div>

        <div className="ep-finale-sub">
          <MaskReveal show delay={1600} duration={900}>
            <span className="serif-cn">功过是非，只能由历史来评说</span>
          </MaskReveal>
        </div>

        <div className="ep-finale-foot label-mono">
          <MaskReveal show delay={2200} duration={700}>
            <span className="dot-accent" /> &nbsp;全片完
          </MaskReveal>
        </div>
      </div>
    </div>
  );
}
