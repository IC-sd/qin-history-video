import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Legendary.css";

export default function LegendaryChapter({ step }: ChapterStepProps) {
  /* Step 0 — 子楚：落魄质子 */
  if (step === 0) {
    return (
      <div className="lg-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 02</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="lg-body">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>落魄的王子</div>
          <h2 className="lg-title">
            <MaskReveal show duration={900}>
              <span className="serif-cn">子楚：被遗忘的</span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={300} duration={900}>
              <span className="serif-it lg-em">秦国质子</span>
            </MaskReveal>
          </h2>
          <p className="lg-text">
            <MaskReveal show delay={700} duration={800}>
              <span>安国君20多个儿子，子楚排行居中，不受宠。被送到赵国当人质，衣食难以为继。</span>
            </MaskReveal>
          </p>
          <div className="lg-footnote label-mono">
            <MaskReveal show delay={1200} duration={600}>
              <span>只有仆人赵升相伴</span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 1 — 吕不韦：奇货可居 */
  if (step === 1) {
    return (
      <div className="lg-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 02</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="lg-body">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>投机商人</div>
          <div className="lg-bigquote">
            <MaskReveal show duration={1100}>
              <span className="serif-it lg-hero-quote">奇货可居</span>
            </MaskReveal>
          </div>
          <p className="lg-text" style={{ marginTop: "var(--space-5)" }}>
            <MaskReveal show delay={600} duration={800}>
              <span>卫国商人吕不韦，看准了统一是大势所趋。他把眼光投向了穷困的质子子楚——</span>
            </MaskReveal>
          </p>
          <p className="lg-text" style={{ marginTop: "var(--space-4)" }}>
            <MaskReveal show delay={1100} duration={800}>
              <span className="lg-em">"定国立君，泽及后世"</span>
            </MaskReveal>
          </p>
        </div>
      </div>
    );
  }

  /* Step 2 — 吕不韦的投资路线图 */
  if (step === 2) {
    return (
      <div className="lg-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 02</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="lg-body">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>吕不韦的布局</div>
          <div className="lg-path">
            <div className="lg-path-item">
              <MaskReveal show duration={600}>
                <span className="lg-path-dot" />
              </MaskReveal>
              <MaskReveal show delay={100} duration={600}>
                <span className="serif-cn lg-path-label">金钱结交子楚，广交邯郸豪杰</span>
              </MaskReveal>
            </div>
            <div className="lg-path-item">
              <MaskReveal show delay={500} duration={600}>
                <span className="lg-path-dot" />
              </MaskReveal>
              <MaskReveal show delay={600} duration={600}>
                <span className="serif-cn lg-path-label">入秦游说华阳夫人</span>
              </MaskReveal>
            </div>
            <div className="lg-path-item">
              <MaskReveal show delay={1000} duration={600}>
                <span className="lg-path-dot" />
              </MaskReveal>
              <MaskReveal show delay={1100} duration={600}>
                <span className="serif-cn lg-path-label">华阳夫人收子楚为嗣子</span>
              </MaskReveal>
            </div>
            <div className="lg-path-item">
              <MaskReveal show delay={1500} duration={600}>
                <span className="lg-path-dot lg-path-dot-last" />
              </MaskReveal>
              <MaskReveal show delay={1600} duration={600}>
                <span className="serif-cn lg-path-label">确立子楚为太子继承人</span>
              </MaskReveal>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 3 — 赵姬的故事 */
  if (step === 3) {
    return (
      <div className="lg-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 02</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="lg-body">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>赵姬</div>
          <h2 className="lg-title">
            <MaskReveal show duration={900}>
              <span className="serif-cn">从卖唱女到</span>
            </MaskReveal>
            <MaskReveal show delay={300} duration={900}>
              <span className="serif-it lg-em">未来王后</span>
            </MaskReveal>
          </h2>
          <div className="lg-timeline" style={{ marginTop: "var(--space-7)" }}>
            <div className="lg-tl-item">
              <MaskReveal show delay={700} duration={600}>
                <span className="mono lg-tl-tag">卖唱</span>
              </MaskReveal>
              <MaskReveal show delay={800} duration={600}>
                <span className="serif-cn">→ 吕不韦小妾</span>
              </MaskReveal>
            </div>
            <div className="lg-tl-item">
              <MaskReveal show delay={1100} duration={600}>
                <span className="mono lg-tl-tag">送妾</span>
              </MaskReveal>
              <MaskReveal show delay={1200} duration={600}>
                <span className="serif-cn">→ 嫁给子楚</span>
              </MaskReveal>
            </div>
            <div className="lg-tl-item">
              <MaskReveal show delay={1500} duration={600}>
                <span className="mono lg-tl-tag">生子</span>
              </MaskReveal>
              <MaskReveal show delay={1600} duration={600}>
                <span className="serif-cn">→ 诞下嬴政</span>
              </MaskReveal>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 4 — 嬴政出生 */
  if (step === 4) {
    return (
      <div className="lg-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 02</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="lg-body lg-center">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>公元前259年 · 正月</div>
          <div className="lg-birth-hero">
            <MaskReveal show duration={1100}>
              <span className="serif-it lg-hero-num">嬴政</span>
            </MaskReveal>
          </div>
          <p className="lg-text" style={{ marginTop: "var(--space-5)" }}>
            <MaskReveal show delay={600} duration={800}>
              <span>生于赵国邯郸，取名赵政。后来秦灭赵，改从秦姓——嬴政。</span>
            </MaskReveal>
          </p>
          <div className="lg-footnote label-mono" style={{ marginTop: "var(--space-5)" }}>
            <MaskReveal show delay={1000} duration={600}>
              <span>一个商人的政治投资，改变了一个时代</span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 5 — 流亡岁月 */
  if (step === 5) {
    return (
      <div className="lg-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 02</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="lg-body">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>流亡岁月</div>
          <div className="lg-chronology">
            <div className="lg-ch-item">
              <MaskReveal show duration={600}>
                <span className="mono lg-ch-year">9个月</span>
              </MaskReveal>
              <MaskReveal show delay={150} duration={600}>
                <span className="serif-cn">秦军第一次进攻邯郸</span>
              </MaskReveal>
            </div>
            <div className="lg-ch-item">
              <MaskReveal show delay={500} duration={600}>
                <span className="mono lg-ch-year">3岁</span>
              </MaskReveal>
              <MaskReveal show delay={650} duration={600}>
                <span className="serif-cn">王翦重兵压境，子楚逃回秦国</span>
              </MaskReveal>
            </div>
            <div className="lg-ch-item">
              <MaskReveal show delay={1000} duration={600}>
                <span className="mono lg-ch-year">3-8岁</span>
              </MaskReveal>
              <MaskReveal show delay={1150} duration={600}>
                <span className="serif-cn">嬴政母子在赵国东躲西藏</span>
              </MaskReveal>
            </div>
            <div className="lg-ch-item">
              <MaskReveal show delay={1500} duration={600}>
                <span className="mono lg-ch-year">8岁</span>
              </MaskReveal>
              <MaskReveal show delay={1650} duration={600}>
                <span className="serif-cn">秦赵议和，回到秦国</span>
              </MaskReveal>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 6 — 13岁登基 */
  return (
    <div className="lg-scene scene-pad">
      <header className="masthead">
        <span className="brand">Qin · 秦</span>
        <span className="issue">Chapter 02</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
      <div className="lg-body lg-center">
        <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>公元前247年</div>
        <div className="lg-throne">
          <MaskReveal show duration={1000}>
            <span className="serif-it lg-hero-num">13岁</span>
          </MaskReveal>
        </div>
        <p className="lg-text" style={{ marginTop: "var(--space-5)" }}>
          <MaskReveal show delay={500} duration={800}>
            <span>祖父孝文王在位3天去世，父亲庄襄王在位3年去世。</span>
          </MaskReveal>
        </p>
        <p className="lg-text" style={{ marginTop: "var(--space-4)" }}>
          <MaskReveal show delay={900} duration={800}>
            <span className="lg-em">年仅13岁的嬴政，就这样登上了王位。</span>
          </MaskReveal>
        </p>
        <div className="lg-footnote label-mono" style={{ marginTop: "var(--space-5)" }}>
          <MaskReveal show delay={1300} duration={600}>
            <span className="dot-accent" /> 但他的称霸之路，才刚刚开始
          </MaskReveal>
        </div>
      </div>
    </div>
  );
}
