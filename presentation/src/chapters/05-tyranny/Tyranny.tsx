import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Tyranny.css";

/**
 * Chapter 05 — 荒淫暴君 焚书坑儒
 * kraft-paper theme: warm kraft beige, deep brown ink, copper-rust accent.
 * Dark descent: harsh punishments, vast palaces, burning books, buried scholars.
 */
export default function TyrannyChapter({ step }: ChapterStepProps) {
  /* Step 0 — 残暴治国：严刑峻法，动辄杀戮 */
  if (step === 0) {
    return (
      <div className="ty-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 05</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="ty-body">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>
            残暴治国
          </div>
          <h2 className="ty-title">
            <MaskReveal show duration={900}>
              <span className="serif-cn">严刑峻法，</span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={300} duration={900}>
              <span className="serif-it ty-em">动辄杀戮</span>
            </MaskReveal>
          </h2>
          <p className="ty-text" style={{ marginTop: "var(--space-5)" }}>
            <MaskReveal show delay={700} duration={800}>
              <span>
                秦法繁苛，百姓动辄触法。劓、刖、腰斩、车裂……一人犯法，连坐亲族。整个帝国笼罩在恐怖之中。
              </span>
            </MaskReveal>
          </p>
          <p className="ty-text" style={{ marginTop: "var(--space-4)" }}>
            <MaskReveal show delay={1100} duration={800}>
              <span className="ty-em">
                在秦始皇眼里，法治就是刑罚，统治就是恐惧。
              </span>
            </MaskReveal>
          </p>
          <div className="ty-footnote label-mono" style={{ marginTop: "var(--space-5)" }}>
            <MaskReveal show delay={1500} duration={600}>
              <span>
                <span className="dot-accent" /> &nbsp;黥、劓、刖、宫、大辟——秦法五刑，皆以残害肢体为手段
              </span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 1 — 阿房宫与骊山墓 */
  if (step === 1) {
    return (
      <div className="ty-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 05</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="ty-palace-grid">
          <div className="ty-palace-side">
            <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
              阿房宫
            </div>
            <MaskReveal show duration={900}>
              <h2 className="ty-palace-name">
                <span className="serif-cn">房屋万千</span>
              </h2>
            </MaskReveal>
            <p className="ty-palace-desc">
              <MaskReveal show delay={400} duration={800}>
                <span>宫室数以百计，珍宝堆积如山。美人充塞其中，</span>
              </MaskReveal>
              <MaskReveal show delay={700} duration={800}>
                <span className="ty-em">耗尽天下资财</span>
              </MaskReveal>
              <MaskReveal show delay={900} duration={600}>
                <span>。</span>
              </MaskReveal>
            </p>
            <div>
              <MaskReveal show delay={1100} duration={700}>
                <span className="ty-palace-num">270+</span>
              </MaskReveal>
              <MaskReveal show delay={1300} duration={600}>
                <span className="label-mono" style={{ marginLeft: "var(--space-3)" }}>
                  宫观
                </span>
              </MaskReveal>
            </div>
            <div style={{ marginTop: "var(--space-3)" }}>
              <MaskReveal show delay={1500} duration={600}>
                <span className="ty-palace-sub">服役者 70 万 · 咸阳城沿渭水扩建</span>
              </MaskReveal>
            </div>
          </div>

          <div className="ty-palace-side">
            <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
              骊山墓
            </div>
            <MaskReveal show delay={500} duration={900}>
              <h2 className="ty-palace-name">
                <span className="serif-cn">水银为江河</span>
              </h2>
            </MaskReveal>
            <p className="ty-palace-desc">
              <MaskReveal show delay={900} duration={800}>
                <span>以水银灌注模拟百川江河大海，</span>
              </MaskReveal>
              <MaskReveal show delay={1200} duration={800}>
                <span>上具天文，下具地理。</span>
              </MaskReveal>
            </p>
            <MaskReveal show delay={1500} duration={700}>
              <div className="ty-mercury-line">
                <span className="ty-mercury-label">水银储量</span>
                <span className="serif-it" style={{ fontSize: "var(--t-h2)", color: "var(--accent)" }}>
                  100+ 吨
                </span>
              </div>
            </MaskReveal>
            <div style={{ marginTop: "var(--space-3)" }}>
              <MaskReveal show delay={1700} duration={600}>
                <span className="ty-palace-sub">墓室穹顶绘天文 · 地底布山川</span>
              </MaskReveal>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 2 — 数据暴击 */
  if (step === 2) {
    return (
      <div className="ty-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 05</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="ty-data-flex">
          <div className="ty-data-row">
            <MaskReveal show duration={900}>
              <span className="ty-data-num">3000万</span>
            </MaskReveal>
            <MaskReveal show delay={300} duration={700}>
              <span className="ty-data-unit">总人口</span>
            </MaskReveal>
          </div>

          <div className="ty-data-row">
            <MaskReveal show delay={700} duration={900}>
              <span className="ty-data-num">140万</span>
            </MaskReveal>
            <MaskReveal show delay={1000} duration={700}>
              <span className="ty-data-unit">劳役</span>
            </MaskReveal>
            <MaskReveal show delay={1200} duration={600}>
              <span className="label-mono">阿房宫 + 骊山墓</span>
            </MaskReveal>
          </div>

          <div className="ty-data-bottom">
            <MaskReveal show delay={1600} duration={900}>
              <span className="ty-data-num">300万+</span>
            </MaskReveal>
            <MaskReveal show delay={1900} duration={700}>
              <span className="ty-data-label">常年总役 · 十之一人在役</span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 3 — 焚书坑儒 */
  if (step === 3) {
    return (
      <div className="ty-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 05</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="ty-fire-scene">
          <MaskReveal show duration={1100}>
            <h2 className="ty-fire-hero">焚书坑儒</h2>
          </MaskReveal>

          <div className="ty-fire-detail">
            <MaskReveal show delay={600} duration={800}>
              <div className="ty-fire-row">
                <span className="ty-fire-icon">册</span>
                <span className="ty-fire-text">
                  除秦史及医药、占卜、农书外，<span className="ty-em">尽数烧毁</span>
                </span>
              </div>
            </MaskReveal>

            <MaskReveal show delay={1100} duration={800}>
              <div className="ty-fire-row">
                <span className="ty-fire-icon">骨</span>
                <span className="ty-fire-text">
                  460 多名儒生方士，<span className="ty-em">坑杀于咸阳</span>
                </span>
              </div>
            </MaskReveal>
          </div>

          <MaskReveal show delay={1600} duration={700}>
            <p className="label-mono" style={{ marginTop: "var(--space-3)" }}>
              <span className="dot-accent" /> &nbsp;百家争鸣，就此终结
            </p>
          </MaskReveal>
        </div>
      </div>
    );
  }

  /* Step 4 — 民怨 */
  if (step === 4) {
    return (
      <div className="ty-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 05</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="ty-resentment">
          <div>
            <MaskReveal show duration={1100}>
              <div className="ty-proverb">楚虽三户，</div>
            </MaskReveal>
            <MaskReveal show delay={400} duration={1100}>
              <div className="ty-proverb">亡秦必楚</div>
            </MaskReveal>
            <MaskReveal show delay={900} duration={700}>
              <p className="ty-proverb-sub">
                —— 楚南公的诅咒，刻进了每一个楚人的骨血里
              </p>
            </MaskReveal>
          </div>

          <MaskReveal show delay={1400} duration={800}>
            <div className="ty-omen">
              <span className="ty-omen-label">陨石刻字</span>
              <span className="ty-omen-text ty-em">
                「始皇帝死而地分」
              </span>
              <span className="label-mono">东郡陨石 · 上天预警</span>
            </div>
          </MaskReveal>
        </div>
      </div>
    );
  }

  /* Step 5 — 反抗暗流 */
  return (
    <div className="ty-scene scene-pad">
      <header className="masthead">
        <span className="brand">Qin · 秦</span>
        <span className="issue">Chapter 05</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
      <div className="ty-rebellion">
        <MaskReveal show duration={1100}>
          <div className="ty-rebel-signal">暴政·反抗</div>
        </MaskReveal>

        <p className="ty-rebel-body">
          <MaskReveal show delay={500} duration={800}>
            <span>严刑峻法没有换来长治久安，</span>
          </MaskReveal>
          <br />
          <MaskReveal show delay={800} duration={800}>
            <span className="ty-em">反而埋下了反抗的火种。</span>
          </MaskReveal>
        </p>

        <p className="ty-rebel-body">
          <MaskReveal show delay={1200} duration={800}>
            <span>
              陈胜吴广在大泽乡揭竿而起。天下苦秦久矣——群雄并起，
            </span>
          </MaskReveal>
          <MaskReveal show delay={1500} duration={800}>
            <span className="ty-em">秦王朝的覆灭之路，由此开始。</span>
          </MaskReveal>
        </p>

        <MaskReveal show delay={1800} duration={700}>
          <div className="ty-rebel-foot label-mono">
            <span className="dot-accent" /> &nbsp;秦 · 公元前 209 年
          </div>
        </MaskReveal>
      </div>
    </div>
  );
}
