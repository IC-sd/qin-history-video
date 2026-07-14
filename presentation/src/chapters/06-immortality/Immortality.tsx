import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Immortality.css";

/**
 * Chapter 06 — 妄求长生 身死异乡
 * kraft-paper theme: warm kraft beige, deep brown ink, copper-rust accent.
 * The emperor's desperate quest for immortality — and his inglorious end.
 */
export default function ImmortalityChapter({ step }: ChapterStepProps) {
  /* Step 0 — 怕死寻仙：享尽荣华后最怕死，四次大规模巡游寻仙 */
  if (step === 0) {
    return (
      <div className="im-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 06</span>
        </header>

        <div className="im-fear">
          <div className="kicker">Step 06 · 妄求长生</div>
          <h1 className="im-fear-h">
            <MaskReveal show duration={1100}>
              <span className="serif-it im-em">长生不老</span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={500} duration={1100}>
              <span className="serif-cn">——皇帝最怕的一件事</span>
            </MaskReveal>
          </h1>
          <p className="im-text" style={{ marginTop: "var(--space-5)", textAlign: "center" }}>
            <MaskReveal show delay={1100} duration={900}>
              <span>享尽人间荣华之后，秦始皇最怕的就是死。</span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={1400} duration={900}>
              <span>他疯狂寻求长生不老之方，四次大规模巡游东海。</span>
            </MaskReveal>
          </p>

          {/* Four巡游 route dots mini-map */}
          <div className="im-route-line">
            <MaskReveal show delay={1800} duration={600}>
              <span className="im-route-dot im-route-dot-first" data-label="①东巡" data-year="前219" />
            </MaskReveal>
            <MaskReveal show delay={1950} duration={500}>
              <span className="im-route-segment" />
            </MaskReveal>
            <MaskReveal show delay={2100} duration={600}>
              <span className="im-route-dot" data-label="②东巡" />
            </MaskReveal>
            <MaskReveal show delay={2250} duration={500}>
              <span className="im-route-segment" />
            </MaskReveal>
            <MaskReveal show delay={2400} duration={600}>
              <span className="im-route-dot" data-label="③东巡" />
            </MaskReveal>
            <MaskReveal show delay={2550} duration={500}>
              <span className="im-route-segment" />
            </MaskReveal>
            <MaskReveal show delay={2700} duration={600}>
              <span className="im-route-dot im-route-dot-last" data-label="④东巡" />
            </MaskReveal>
          </div>

          <div className="im-fear-foot label-mono">
            <MaskReveal show delay={3000} duration={600}>
              <span><span className="dot-accent" /> &nbsp;前219-前215年·四次东巡</span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 1 — 徐福骗局：方士徐福两次行骗，拿了钱和船跑了 */
  if (step === 1) {
    return (
      <div className="im-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 06</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="im-scam">
          <div className="im-scam-hero">
            <MaskReveal show duration={900}>
              <span className="serif-cn">方士 </span>
            </MaskReveal>
            <MaskReveal show delay={200} duration={900}>
              <span className="serif-it im-hero-num im-em">徐福</span>
            </MaskReveal>
          </div>

          <div className="im-scam-paths">
            <div className="im-scam-item">
              <MaskReveal show delay={600} duration={600}>
                <span className="im-scam-tag mono">第一次</span>
              </MaskReveal>
              <MaskReveal show delay={700} duration={700}>
                <span className="serif-cn im-scam-label">上书声称东海有蓬莱仙山、长生之药</span>
              </MaskReveal>
            </div>
            <div className="im-scam-item">
              <MaskReveal show delay={1100} duration={600}>
                <span className="im-scam-dot" />
              </MaskReveal>
              <MaskReveal show delay={1200} duration={700}>
                <span className="serif-cn im-scam-label">秦始皇深信不疑，赐巨资派其出海</span>
              </MaskReveal>
            </div>
            <div className="im-scam-item">
              <MaskReveal show delay={1600} duration={600}>
                <span className="im-scam-tag mono">第二次</span>
              </MaskReveal>
              <MaskReveal show delay={1700} duration={700}>
                <span className="serif-cn im-scam-label">三年未归，谎称巨鱼挡路，要船要弓箭</span>
              </MaskReveal>
            </div>
            <div className="im-scam-item">
              <MaskReveal show delay={2100} duration={600}>
                <span className="im-scam-dot im-scam-dot-last" />
              </MaskReveal>
              <MaskReveal show delay={2200} duration={700}>
                <span className="serif-cn im-em im-scam-label">拿了钱和船，带着几千童男童女跑了</span>
              </MaskReveal>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 2 — 第五次巡游：前210年七月出游，走到沙丘病倒 */
  if (step === 2) {
    return (
      <div className="im-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 06</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="im-journey">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>
            公元前210年 · 第五次巡游
          </div>

          <div className="im-journey-path">
            <div className="im-journey-item">
              <MaskReveal show duration={600}>
                <span className="im-journey-dot" />
              </MaskReveal>
              <MaskReveal show delay={150} duration={600}>
                <span className="serif-cn im-journey-desc">从咸阳出发，南巡云梦</span>
              </MaskReveal>
            </div>
            <div className="im-journey-item">
              <MaskReveal show delay={600} duration={600}>
                <span className="im-journey-dot" />
              </MaskReveal>
              <MaskReveal show delay={750} duration={600}>
                <span className="serif-cn im-journey-desc">浮江而下，东至会稽祭大禹</span>
              </MaskReveal>
            </div>
            <div className="im-journey-item">
              <MaskReveal show delay={1200} duration={600}>
                <span className="im-journey-dot" />
              </MaskReveal>
              <MaskReveal show delay={1350} duration={600}>
                <span className="serif-cn im-journey-desc">北上琅琊，再求长生之药</span>
              </MaskReveal>
            </div>
            <div className="im-journey-item">
              <MaskReveal show delay={1800} duration={600}>
                <span className="im-journey-dot im-journey-dot-last" />
              </MaskReveal>
              <MaskReveal show delay={1950} duration={600}>
                <span className="serif-cn im-journey-desc">行至沙丘（河北广宗）——</span>
              </MaskReveal>
              <MaskReveal show delay={2200} duration={700}>
                <span className="serif-it im-em im-journey-desc">突然病倒</span>
              </MaskReveal>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 3 — 沙丘之死：遗诏传位扶苏→赵高扣住不发 */
  if (step === 3) {
    return (
      <div className="im-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 06</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="im-death">
          <div className="im-death-hero">
            <MaskReveal show duration={1100}>
              <span className="serif-it im-em">沙丘之变</span>
            </MaskReveal>
          </div>

          {/* The will / 遗诏 */}
          <div className="im-death-will">
            <MaskReveal show delay={500} duration={600}>
              <span className="im-death-will-label">临终遗诏</span>
            </MaskReveal>
            <MaskReveal show delay={700} duration={900}>
              <span className="serif-cn im-death-will-text">
                \"令长子扶苏回咸阳继位\"
              </span>
            </MaskReveal>
          </div>

          {/* Intercepted by 赵高 */}
          <div className="im-death-intercept">
            <MaskReveal show delay={1300} duration={800}>
              <span className="serif-cn">但遗诏落到了</span>
            </MaskReveal>
            <MaskReveal show delay={1600} duration={800}>
              <span className="serif-it im-hero-num im-em">赵高</span>
            </MaskReveal>
            <MaskReveal show delay={1900} duration={700}>
              <span className="serif-cn">手中</span>
            </MaskReveal>
          </div>

          <MaskReveal show delay={2200} duration={800}>
            <p className="im-text" style={{ marginTop: "var(--space-7)", textAlign: "center" }}>
              <span>赵高素与扶苏不合，深知扶苏继位自己必死。</span>
              <br />
              <span className="im-em">于是他将遗诏扣住，秘不发丧。</span>
            </p>
          </MaskReveal>
        </div>
      </div>
    );
  }

  /* Step 4 — 鲍鱼车：尸体发臭→装鲍鱼掩盖→臭烘烘回咸阳
   * 视觉冲击力设计：左右对照 — 一代帝王 vs 一车鲍鱼 */
  if (step === 4) {
    return (
      <div className="im-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 06</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="im-fish">
          <div className="kicker" style={{ textAlign: "center" }}>
            <MaskReveal show delay={0} duration={600}>
              <span>盛夏 · 尸体很快腐臭</span>
            </MaskReveal>
          </div>

          <div className="im-fish-split">
            {/* Left: 一代帝王 */}
            <div className="im-fish-side">
              <MaskReveal show delay={400} duration={1000}>
                <span className="serif-it im-hero-num">秦始皇</span>
              </MaskReveal>
              <MaskReveal show delay={700} duration={700}>
                <span className="serif-cn">一代帝王</span>
              </MaskReveal>
              <MaskReveal show delay={1000} duration={600}>
                <span className="im-fish-label">千古一帝</span>
              </MaskReveal>
            </div>

            {/* Divider with crossover arrow */}
            <div className="im-fish-divider" />

            {/* Right: 一车鲍鱼 */}
            <div className="im-fish-side">
              <MaskReveal show delay={600} duration={1000}>
                <span className="serif-it im-hero-num im-fish-stench">鲍鱼</span>
              </MaskReveal>
              <MaskReveal show delay={900} duration={700}>
                <span className="serif-cn">一车咸鱼</span>
              </MaskReveal>
              <MaskReveal show delay={1200} duration={600}>
                <span className="im-fish-label">掩盖尸臭</span>
              </MaskReveal>
            </div>
          </div>

          <div className="im-fish-coda">
            <MaskReveal show delay={1600} duration={1000}>
              <span className="serif-cn">与咸鱼一起</span>
            </MaskReveal>
            <MaskReveal show delay={1900} duration={1000}>
              <span className="serif-it im-fish-stench">臭烘烘</span>
            </MaskReveal>
            <MaskReveal show delay={2200} duration={800}>
              <span className="serif-cn">回到咸阳</span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 5 — 篡位：赵高李斯篡改遗诏→逼死扶苏→立胡亥→终年50岁 */
  return (
    <div className="im-scene scene-pad">
      <header className="masthead">
        <span className="brand">Qin · 秦</span>
        <span className="issue">Chapter 06</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

      <div className="im-coup">
        <div className="im-coup-timeline">
          <div className="im-coup-item">
            <MaskReveal show duration={600}>
              <span className="im-coup-dot" />
            </MaskReveal>
            <MaskReveal show delay={100} duration={700}>
              <span className="serif-cn im-coup-label">
                <span className="im-em">赵高</span> + <span className="im-em">李斯</span> 合谋篡改遗诏
              </span>
            </MaskReveal>
          </div>
          <div className="im-coup-item">
            <MaskReveal show delay={600} duration={600}>
              <span className="im-coup-dot" />
            </MaskReveal>
            <MaskReveal show delay={700} duration={700}>
              <span className="serif-cn im-coup-label">伪造诏书，赐死长子扶苏</span>
            </MaskReveal>
          </div>
          <div className="im-coup-item">
            <MaskReveal show delay={1200} duration={600}>
              <span className="im-coup-dot" />
            </MaskReveal>
            <MaskReveal show delay={1300} duration={700}>
              <span className="serif-cn im-coup-label">扶苏接诏，含泪自刎</span>
            </MaskReveal>
          </div>
          <div className="im-coup-item">
            <MaskReveal show delay={1800} duration={600}>
              <span className="im-coup-dot im-coup-dot-last" />
            </MaskReveal>
            <MaskReveal show delay={1900} duration={700}>
              <span className="serif-cn im-em im-coup-label">立胡亥为二世皇帝</span>
            </MaskReveal>
          </div>
        </div>

        {/* Epitaph */}
        <div className="im-coup-epitaph">
          <MaskReveal show delay={2500} duration={900}>
            <span className="serif-it">秦始皇·终</span>
          </MaskReveal>
          <MaskReveal show delay={2900} duration={800}>
            <span className="serif-cn">在位 36 年 · 终年 50 岁</span>
          </MaskReveal>
          <MaskReveal show delay={3200} duration={800}>
            <span className="label-mono" style={{ marginTop: "var(--space-3)" }}>
              <span className="dot-accent" /> &nbsp;前221 — 前210
            </span>
          </MaskReveal>
        </div>
      </div>
    </div>
  );
}
