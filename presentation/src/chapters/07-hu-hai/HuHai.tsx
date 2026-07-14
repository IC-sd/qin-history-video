import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./HuHai.css";

/**
 * Chapter 07 — 二世嬴胡亥
 * kraft-paper theme: warm kraft beige, deep brown ink, copper-rust accent.
 */
export default function HuHaiChapter({ step }: ChapterStepProps) {
  /* Step 0 — 纨绔子弟：胡亥踢鞋的故事 */
  if (step === 0) {
    return (
      <div className="hh-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 07</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="hh-shoes-scene">
          <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
            纨绔子弟
          </div>

          <div className="hh-shoes-grid">
            <MaskReveal show duration={500}>
              <span className="hh-shoe hh-shoe-kicked" style={{"--rot": "-12deg"} as React.CSSProperties}>鞋</span>
            </MaskReveal>
            <MaskReveal show delay={200} duration={500}>
              <span className="hh-shoe hh-shoe-scattered" style={{"--rot": "25deg"} as React.CSSProperties}>鞋</span>
            </MaskReveal>
            <MaskReveal show delay={400} duration={500}>
              <span className="hh-shoe hh-shoe-kicked" style={{"--rot": "8deg"} as React.CSSProperties}>鞋</span>
            </MaskReveal>
            <MaskReveal show delay={600} duration={500}>
              <span className="hh-shoe hh-shoe-scattered" style={{"--rot": "-20deg"} as React.CSSProperties}>鞋</span>
            </MaskReveal>
            <MaskReveal show delay={800} duration={500}>
              <span className="hh-shoe" style={{"--rot": "0deg"} as React.CSSProperties}>鞋</span>
            </MaskReveal>
            <MaskReveal show delay={1000} duration={500}>
              <span className="hh-shoe hh-shoe-kicked" style={{"--rot": "30deg"} as React.CSSProperties}>鞋</span>
            </MaskReveal>
            <MaskReveal show delay={1200} duration={500}>
              <span className="hh-shoe hh-shoe-scattered" style={{"--rot": "-35deg"} as React.CSSProperties}>鞋</span>
            </MaskReveal>
            <MaskReveal show delay={1400} duration={500}>
              <span className="hh-shoe" style={{"--rot": "5deg"} as React.CSSProperties}>鞋</span>
            </MaskReveal>
          </div>

          <div className="hh-kicker-label">
            <MaskReveal show delay={800} duration={800}>
              <span className="serif-cn">秦始皇宴请群臣，胡亥吃饱了</span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={1100} duration={800}>
              <span className="serif-it">把所有人的鞋子踢得乱七八糟</span>
            </MaskReveal>
          </div>

          <div className="hh-footnote label-mono">
            <MaskReveal show delay={1500} duration={600}>
              <span className="dot-accent" /> &nbsp;二世即位时年仅21岁
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 1 — 血洗宗室：赵高唆使大开杀戒 */
  if (step === 1) {
    return (
      <div className="hh-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 07</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="hh-slaughter">
          <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
            血洗宗室
          </div>
          <p className="hh-text" style={{ maxWidth: "50ch" }}>
            <MaskReveal show duration={700}>
              <span>赵高教唆胡亥大开杀戒，清除一切潜在的威胁——</span>
            </MaskReveal>
          </p>

          <div className="hh-slag-grid">
            <div className="hh-slag-item">
              <MaskReveal show delay={400} duration={500}>
                <span className="hh-slag-icon">✕</span>
              </MaskReveal>
              <MaskReveal show delay={500} duration={500}>
                <span className="hh-slag-label"><span className="hh-slag-count">蒙恬 · 蒙毅</span> 被冤杀</span>
              </MaskReveal>
            </div>
            <div className="hh-slag-item">
              <MaskReveal show delay={800} duration={500}>
                <span className="hh-slag-icon">✕</span>
              </MaskReveal>
              <MaskReveal show delay={900} duration={500}>
                <span className="hh-slag-label"><span className="hh-slag-count">12 个兄弟</span> 在咸阳街头被砍头处死</span>
              </MaskReveal>
            </div>
            <div className="hh-slag-item">
              <MaskReveal show delay={1200} duration={500}>
                <span className="hh-slag-icon">✕</span>
              </MaskReveal>
              <MaskReveal show delay={1300} duration={500}>
                <span className="hh-slag-label"><span className="hh-slag-count">6 个兄弟 + 10 个姐妹</span> 被活活碾死</span>
              </MaskReveal>
            </div>
            <div className="hh-slag-item">
              <MaskReveal show delay={1600} duration={500}>
                <span className="hh-slag-icon hh-slag-icon-last">✕</span>
              </MaskReveal>
              <MaskReveal show delay={1700} duration={500}>
                <span className="hh-slag-label"><span className="hh-slag-count">李斯</span> 被腰斩，剁成肉酱</span>
              </MaskReveal>
            </div>
          </div>

          <div className="hh-footnote label-mono" style={{ marginTop: "var(--space-6)" }}>
            <MaskReveal show delay={2100} duration={600}>
              <span>秦始皇的子女几乎被屠杀殆尽</span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 2 — 不理朝政：胡亥吃喝玩乐，国事扔给赵高 */
  if (step === 2) {
    return (
      <div className="hh-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 07</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="hh-neglect">
          <div className="kicker" style={{ textAlign: "center" }}>
            不理朝政
          </div>

          <div className="hh-neglect-split">
            <div className="hh-neglect-side hh-center">
              <div className="hh-neglect-label">胡亥</div>
              <div className="hh-neglect-item">
                <MaskReveal show duration={600}>
                  <span className="serif-cn">每天吃喝玩乐</span>
                </MaskReveal>
              </div>
              <div className="hh-neglect-item">
                <MaskReveal show delay={300} duration={600}>
                  <span className="serif-cn">大兴土木建宫殿</span>
                </MaskReveal>
              </div>
              <div className="hh-neglect-item">
                <MaskReveal show delay={600} duration={600}>
                  <span className="serif-cn">横征暴敛</span>
                </MaskReveal>
              </div>
            </div>

            <div className="hh-neglect-divider" />

            <div className="hh-neglect-side">
              <div className="hh-neglect-label">赵高</div>
              <div className="hh-neglect-item">
                <MaskReveal show delay={200} duration={600}>
                  <span className="hh-em serif-it">大权独揽</span>
                </MaskReveal>
              </div>
              <div className="hh-neglect-item">
                <MaskReveal show delay={500} duration={600}>
                  <span className="hh-em serif-it">操纵朝政</span>
                </MaskReveal>
              </div>
              <div className="hh-neglect-item">
                <MaskReveal show delay={800} duration={600}>
                  <span className="hh-em serif-it">铲除异己</span>
                </MaskReveal>
              </div>
            </div>
          </div>

          <div className="hh-neglect-result">
            <MaskReveal show delay={1200} duration={800}>
              <span className="serif-cn">结果：赋税徭役更重，民力枯竭，</span>
            </MaskReveal>
            <MaskReveal show delay={1500} duration={800}>
              <span className="serif-it hh-em">天下人怨声载道</span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 3 — 指鹿为马 */
  if (step === 3) {
    return (
      <div className="hh-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 07</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="hh-deer-scene">
          <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
            指鹿为马
          </div>

          <div className="hh-deer-stage">
            <div className="hh-deer-claim">
              <MaskReveal show duration={800}>
                <span className="serif-it">鹿</span>
              </MaskReveal>
              <MaskReveal show delay={600} duration={700}>
                <span className="hh-strike serif-it">马</span>
              </MaskReveal>
            </div>

            <div className="hh-deer-arrow">
              <MaskReveal show delay={1100} duration={500}>
                <span>▼ 赵高牵鹿上殿 ▼</span>
              </MaskReveal>
            </div>

            <div className="hh-deer-foot">
              <MaskReveal show delay={1400} duration={700}>
                <span className="serif-cn">大臣们吓得面面相觑，</span>
              </MaskReveal>
              <br />
              <MaskReveal show delay={1700} duration={700}>
                <span className="serif-it hh-em">纷纷跟着说是马</span>
              </MaskReveal>
            </div>

            <div className="hh-footnote label-mono">
              <MaskReveal show delay={2100} duration={600}>
                <span className="dot-accent" /> &nbsp;赵高知道，再没有人敢反对他了
              </MaskReveal>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 4 — 大泽乡起义 */
  if (step === 4) {
    return (
      <div className="hh-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 07</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="hh-revolt">
          <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
            天下大乱
          </div>
          <p className="hh-text" style={{ maxWidth: "50ch" }}>
            <MaskReveal show duration={700}>
              <span>就在朝堂乌烟瘴气之时，外面已经翻了天——</span>
            </MaskReveal>
          </p>

          <div className="hh-revolt-grid">
            <div className="hh-rev-item">
              <MaskReveal show delay={400} duration={500}>
                <span className="hh-rev-icon">⚔</span>
              </MaskReveal>
              <div>
                <MaskReveal show delay={500} duration={500}>
                  <span className="hh-rev-label"><span className="hh-slag-count">陈胜 · 吴广</span> 大泽乡起义</span>
                </MaskReveal>
                <br />
                <MaskReveal show delay={700} duration={500}>
                  <span className="hh-rev-sub">\"王侯将相宁有种乎？\"</span>
                </MaskReveal>
              </div>
            </div>
            <div className="hh-rev-item">
              <MaskReveal show delay={1000} duration={500}>
                <span className="hh-rev-icon">⚔</span>
              </MaskReveal>
              <div>
                <MaskReveal show delay={1100} duration={500}>
                  <span className="hh-rev-label"><span className="hh-slag-count">项羽</span> 破釜沉舟</span>
                </MaskReveal>
                <br />
                <MaskReveal show delay={1300} duration={500}>
                  <span className="hh-rev-sub">巨鹿之战，大败秦军主力</span>
                </MaskReveal>
              </div>
            </div>
            <div className="hh-rev-item">
              <MaskReveal show delay={1600} duration={500}>
                <span className="hh-rev-icon">⚔</span>
              </MaskReveal>
              <div>
                <MaskReveal show delay={1700} duration={500}>
                  <span className="hh-rev-label"><span className="hh-slag-count">六国贵族</span> 纷纷复国</span>
                </MaskReveal>
                <br />
                <MaskReveal show delay={1900} duration={500}>
                  <span className="hh-rev-sub">秦朝的统治迅速瓦解</span>
                </MaskReveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 5 — 胡亥之死 */
  return (
    <div className="hh-scene scene-pad">
      <header className="masthead">
        <span className="brand">Qin · 秦</span>
        <span className="issue">Chapter 07</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

      <div className="hh-death-scene">
        <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
          二世而亡
        </div>

        <div className="hh-death-final">
          <MaskReveal show duration={900}>
            <span>胡亥之死</span>
          </MaskReveal>
        </div>

        <div className="hh-death-line">
          <MaskReveal show delay={500} duration={700}>
            <span className="serif-cn">赵高派人闯进行宫，</span>
          </MaskReveal>
          <br />
          <MaskReveal show delay={800} duration={700}>
            <span className="serif-it hh-em">逼他拔剑自刎</span>
          </MaskReveal>
        </div>

        <div className="hh-death-stats">
          <div className="hh-death-stat">
            <MaskReveal show delay={1200} duration={600}>
              <span className="hh-death-stat-num">24</span>
            </MaskReveal>
            <MaskReveal show delay={1350} duration={500}>
              <span className="hh-death-stat-label">岁</span>
            </MaskReveal>
          </div>
          <div className="hh-death-stat">
            <MaskReveal show delay={1500} duration={600}>
              <span className="hh-death-stat-num">3</span>
            </MaskReveal>
            <MaskReveal show delay={1650} duration={500}>
              <span className="hh-death-stat-label">年在位</span>
            </MaskReveal>
          </div>
          <div className="hh-death-stat">
            <MaskReveal show delay={1800} duration={600}>
              <span className="hh-death-stat-num">15</span>
            </MaskReveal>
            <MaskReveal show delay={1950} duration={500}>
              <span className="hh-death-stat-label">秦朝年</span>
            </MaskReveal>
          </div>
        </div>

        <div className="hh-death-epitaph">
          <MaskReveal show delay={2200} duration={700}>
            <span className="serif-cn">以黔首身份草草埋葬。</span>
          </MaskReveal>
          <br />
          <MaskReveal show delay={2500} duration={700}>
            <span className="serif-it hh-grim">秦朝从称帝到灭亡，只有十五年。</span>
          </MaskReveal>
        </div>
      </div>
    </div>
  );
}
