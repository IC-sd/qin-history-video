import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./ClearCourtUnify.css";

/**
 * Chapter 03 — 清君侧 灭六国
 * kraft-paper theme: warm kraft beige, deep brown ink, copper-rust accent.
 *
 * Steps:
 *   0 — 权力处境 (Lü Buwei + Lao Ai cliques)
 *   1 — 隐忍9年
 *   2 — 嫪毐叛乱
 *   3 — 逼死吕不韦
 *   4 — 灭六国 (map with sequential extinction)
 *   5 — 十年统一 (conquest timeline)
 *   6 — 大一统
 */
export default function ClearCourtUnifyChapter({ step }: ChapterStepProps) {
  /* ================================================================
   * Step 0 — 权力处境: Two power blocs
   * ================================================================ */
  if (step === 0) {
    return (
      <div className="ccu-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 03</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ccu-power-grid">
          <div className="ccu-power-grid-inner">
          {/* Left — 吕不韦 */}
          <div className="ccu-power-card is-lv">
            <div className="kicker" style={{ marginBottom: "var(--space-2)" }}>
              仲父集团
            </div>
            <MaskReveal show duration={800}>
              <h2 className="ccu-power-name">
                <span className="serif-it ccu-em">吕不韦</span>
              </h2>
            </MaskReveal>
            <MaskReveal show delay={300} duration={700}>
              <p className="ccu-power-role">
                相国 · 文信侯 · 仲父
              </p>
            </MaskReveal>
            <MaskReveal show delay={500} duration={700}>
              <div className="ccu-power-group">
                <span className="ccu-power-group-item">食邑十万户 · 洛阳</span>
                <span className="ccu-power-group-item">主编《吕氏春秋》· 一字千金</span>
                <span className="ccu-power-group-item">门客三千 · 朝中遍布党羽</span>
              </div>
            </MaskReveal>
          </div>

          {/* Divider */}
          <div className="ccu-power-divider" />

          {/* Right — 嫪毐 */}
          <div className="ccu-power-card is-lao">
            <div className="kicker" style={{ marginBottom: "var(--space-2)" }}>
              太后集团
            </div>
            <MaskReveal show delay={900} duration={800}>
              <h2 className="ccu-power-name">
                <span className="serif-it" style={{ color: "var(--text-mute)" }}>嫪毐</span>
              </h2>
            </MaskReveal>
            <MaskReveal show delay={1200} duration={700}>
              <p className="ccu-power-role">
                长信侯 · 太后情夫
              </p>
            </MaskReveal>
            <MaskReveal show delay={1400} duration={700}>
              <div className="ccu-power-group">
                <span className="ccu-power-group-item">封地太原郡 · 雍城</span>
                <span className="ccu-power-group-item">太后赵姬专宠 · 势倾朝野</span>
                <span className="ccu-power-group-item">宫中门客千人 · 密谋夺权</span>
              </div>
            </MaskReveal>
          </div>
          </div>
        </div>

        <div className="ccu-footnote label-mono" style={{ marginTop: "auto" }}>
          <MaskReveal show delay={1800} duration={600}>
            <span>
              <span className="dot-accent" /> &nbsp;嬴政虽为王，朝政却不由他
            </span>
          </MaskReveal>
        </div>
      </div>
    );
  }

  /* ================================================================
   * Step 1 — 隐忍9年: visual bars of endurance
   * ================================================================ */
  if (step === 1) {
    return (
      <div className="ccu-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 03</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ccu-endurance">
          <div className="kicker">隐忍 · 蓄势</div>

          <MaskReveal show duration={900}>
            <h2 className="ccu-title" style={{ textAlign: "center" }}>
              <span className="serif-cn">九年蛰伏</span>
              <br />
              <MaskReveal show delay={300} duration={800}>
                <span className="serif-it ccu-em">九年的尊严被践踏</span>
              </MaskReveal>
            </h2>
          </MaskReveal>

          {/* Visual: 9 rising bars */}
          <div className="ccu-endurance-years">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
                <div className="ccu-endurance-bar" />
                <span className="ccu-endurance-bar-label">{i + 1}</span>
              </div>
            ))}
          </div>

          <div className="ccu-footnote label-mono">
            <MaskReveal show delay={2100} duration={600}>
              <span>
                <span className="dot-accent" /> &nbsp;「私生子」的屈辱，化作了权力的饥饿
              </span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* ================================================================
   * Step 2 — 嫪毐叛乱: timeline of the coup
   * ================================================================ */
  if (step === 2) {
    return (
      <div className="ccu-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 03</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ccu-rebel">
          <div className="kicker" style={{ marginBottom: "var(--space-2)" }}>
            前238年 · 加冠之变
          </div>

          <MaskReveal show duration={800}>
            <h2 className="ccu-title">
              <span className="serif-cn">嫪毐叛乱</span>
            </h2>
          </MaskReveal>

          <div className="ccu-rebel-timeline" style={{ marginTop: "var(--space-5)" }}>
            {/* Item 1 */}
            <div className="ccu-rebel-item">
              <span className="ccu-rebel-dot" />
              <MaskReveal show delay={400} duration={600}>
                <span className="ccu-rebel-year">前238年</span>
              </MaskReveal>
              <MaskReveal show delay={500} duration={700}>
                <span className="serif-cn ccu-rebel-label">嬴政往雍州行加冠礼</span>
              </MaskReveal>
            </div>

            {/* Item 2 */}
            <div className="ccu-rebel-item">
              <span className="ccu-rebel-dot" />
              <MaskReveal show delay={900} duration={600}>
                <span className="ccu-rebel-year">&nbsp;</span>
              </MaskReveal>
              <MaskReveal show delay={1000} duration={700}>
                <span className="serif-cn ccu-rebel-label">
                  嫪毐 <span className="ccu-em">盗玺</span> 发动叛乱
                </span>
              </MaskReveal>
            </div>

            {/* Item 3 */}
            <div className="ccu-rebel-item">
              <span className="ccu-rebel-dot is-climax" />
              <MaskReveal show delay={1500} duration={600}>
                <span className="ccu-rebel-year">&nbsp;</span>
              </MaskReveal>
              <MaskReveal show delay={1600} duration={700}>
                <span className="serif-cn ccu-rebel-label">
                  嬴政早有防备 <span className="ccu-em">果断反击</span>
                </span>
              </MaskReveal>
            </div>

            {/* Item 4 */}
            <div className="ccu-rebel-item">
              <span className="ccu-rebel-dot" />
              <MaskReveal show delay={2100} duration={600}>
                <span className="ccu-rebel-year">&nbsp;</span>
              </MaskReveal>
              <MaskReveal show delay={2200} duration={700}>
                <span className="serif-cn ccu-rebel-label">
                  车裂嫪毐 <span className="ccu-em">诛其三族</span>
                </span>
              </MaskReveal>
            </div>
          </div>

          <div className="ccu-footnote label-mono" style={{ marginTop: "var(--space-5)" }}>
            <MaskReveal show delay={2700} duration={600}>
              <span>
                <span className="dot-accent" /> &nbsp;等待九年的第一击
              </span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* ================================================================
   * Step 3 — 逼死吕不韦: sequential fall
   * ================================================================ */
  if (step === 3) {
    return (
      <div className="ccu-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 03</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ccu-fall">
          <div className="kicker" style={{ marginBottom: "var(--space-2)" }}>
            清算 · 夺权
          </div>

          <MaskReveal show duration={800}>
            <h2 className="ccu-title">
              <span className="serif-cn">逼死吕不韦</span>
            </h2>
          </MaskReveal>

          <div className="ccu-fall-stack" style={{ marginTop: "var(--space-5)" }}>
            {/* Step 1 */}
            <div className="ccu-fall-item">
              <MaskReveal show delay={400} duration={500}>
                <span className="ccu-fall-num">1</span>
              </MaskReveal>
              <MaskReveal show delay={500} duration={700}>
                <span className="serif-cn ccu-fall-label">免去吕不韦相位</span>
              </MaskReveal>
            </div>

            {/* Step 2 */}
            <div className="ccu-fall-item">
              <MaskReveal show delay={800} duration={500}>
                <span className="ccu-fall-num">2</span>
              </MaskReveal>
              <MaskReveal show delay={900} duration={700}>
                <span className="serif-cn ccu-fall-label">
                  送去一封 <span className="ccu-em">质问信</span>
                </span>
              </MaskReveal>
            </div>

            {/* Step 3 */}
            <div className="ccu-fall-item">
              <MaskReveal show delay={1200} duration={500}>
                <span className="ccu-fall-num" style={{ borderColor: "var(--text-mute)", color: "var(--text-mute)" }}>3</span>
              </MaskReveal>
              <MaskReveal show delay={1300} duration={700}>
                <span className="serif-cn ccu-fall-label">吕不韦 <span className="ccu-em">服毒自尽</span></span>
              </MaskReveal>
            </div>
          </div>

          <div className="ccu-fall-victory">
            <MaskReveal show delay={1800} duration={1000}>
              <p className="ccu-text" style={{ margin: 0 }}>
                <span className="serif-it ccu-em" style={{ fontSize: "var(--t-h2)" }}>
                  24岁的嬴政，全面掌权
                </span>
              </p>
            </MaskReveal>
          </div>

          <div className="ccu-footnote label-mono">
            <MaskReveal show delay={2300} duration={600}>
              <span>
                <span className="dot-accent" /> &nbsp;铁血手腕，清除一切障碍
              </span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* ================================================================
   * Step 4 — 灭六国 MAP (sequential extinction animation)
   * ================================================================ */
  if (step === 4) {
    return (
      <div className="ccu-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 03</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ccu-map">
          <div className="kicker" style={{ marginBottom: "var(--space-2)" }}>
            扫灭六国
          </div>

          <MaskReveal show duration={800}>
            <h2 className="ccu-title" style={{ marginBottom: "var(--space-5)" }}>
              <span className="serif-cn">灭</span>
              <span className="serif-it ccu-em" style={{ marginLeft: "0.15em" }}>六国</span>
            </h2>
          </MaskReveal>

          {/* SVG-like map grid: six states extinguishing sequentially */}
          <div className="ccu-map-grid">
            {/* 韩 — conquered 230 BC */}
            <div className="ccu-map-state is-han">
              <MaskReveal show delay={100} duration={500}>
                <span className="ccu-map-char">韩</span>
              </MaskReveal>
              <span className="ccu-map-name">Han</span>
              <span className="ccu-map-year">前230</span>
            </div>

            {/* 赵 — conquered 228 BC */}
            <div className="ccu-map-state is-zhao">
              <MaskReveal show delay={250} duration={500}>
                <span className="ccu-map-char">赵</span>
              </MaskReveal>
              <span className="ccu-map-name">Zhao</span>
              <span className="ccu-map-year">前228</span>
            </div>

            {/* 魏 — conquered 225 BC */}
            <div className="ccu-map-state is-wei">
              <MaskReveal show delay={400} duration={500}>
                <span className="ccu-map-char">魏</span>
              </MaskReveal>
              <span className="ccu-map-name">Wei</span>
              <span className="ccu-map-year">前225</span>
            </div>

            {/* 燕 — conquered 222 BC */}
            <div className="ccu-map-state is-yan">
              <MaskReveal show delay={550} duration={500}>
                <span className="ccu-map-char">燕</span>
              </MaskReveal>
              <span className="ccu-map-name">Yan</span>
              <span className="ccu-map-year">前222</span>
            </div>

            {/* 楚 — conquered 223 BC */}
            <div className="ccu-map-state is-chu">
              <MaskReveal show delay={700} duration={500}>
                <span className="ccu-map-char">楚</span>
              </MaskReveal>
              <span className="ccu-map-name">Chu</span>
              <span className="ccu-map-year">前223</span>
            </div>

            {/* 齐 — conquered 221 BC */}
            <div className="ccu-map-state is-qi">
              <MaskReveal show delay={850} duration={500}>
                <span className="ccu-map-char">齐</span>
              </MaskReveal>
              <span className="ccu-map-name">Qi</span>
              <span className="ccu-map-year">前221</span>
            </div>
          </div>

          <div className="ccu-footnote label-mono" style={{ marginTop: "var(--space-5)" }}>
            <MaskReveal show delay={1100} duration={600}>
              <span>
                <span className="dot-accent" /> &nbsp;重用王翦 · 蒙恬 · 李斯
              </span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* ================================================================
   * Step 5 — 十年统一: timeline 前230 → 前221
   * ================================================================ */
  if (step === 5) {
    return (
      <div className="ccu-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 03</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

        <div className="ccu-timeline">
          <div className="kicker" style={{ marginBottom: "var(--space-2)" }}>
            十年 · 横扫
          </div>

          <MaskReveal show duration={800}>
            <h2 className="ccu-title">
              <span className="serif-cn">公元前</span>
              <span className="serif-it ccu-em"> 230 — 221</span>
            </h2>
          </MaskReveal>

          <div className="ccu-tl-track" style={{ marginTop: "var(--space-5)" }}>
            {/* 230 BC — 灭韩 */}
            <div className="ccu-tl-item">
              <MaskReveal show delay={200} duration={500}>
                <span className="ccu-tl-year">前230年</span>
              </MaskReveal>
              <MaskReveal show delay={300} duration={500}>
                <span className="ccu-tl-tag is-done">韩</span>
              </MaskReveal>
              <MaskReveal show delay={400} duration={600}>
                <span className="ccu-tl-label">灭韩，首战告捷</span>
              </MaskReveal>
            </div>

            {/* 228 BC — 灭赵 */}
            <div className="ccu-tl-item">
              <MaskReveal show delay={500} duration={500}>
                <span className="ccu-tl-year">前228年</span>
              </MaskReveal>
              <MaskReveal show delay={600} duration={500}>
                <span className="ccu-tl-tag is-done">赵</span>
              </MaskReveal>
              <MaskReveal show delay={700} duration={600}>
                <span className="ccu-tl-label">王翦攻破邯郸</span>
              </MaskReveal>
            </div>

            {/* 225 BC — 灭魏 */}
            <div className="ccu-tl-item">
              <MaskReveal show delay={800} duration={500}>
                <span className="ccu-tl-year">前225年</span>
              </MaskReveal>
              <MaskReveal show delay={900} duration={500}>
                <span className="ccu-tl-tag is-done">魏</span>
              </MaskReveal>
              <MaskReveal show delay={1000} duration={600}>
                <span className="ccu-tl-label">水灌大梁，魏亡</span>
              </MaskReveal>
            </div>

            {/* 223 BC — 灭楚 */}
            <div className="ccu-tl-item">
              <MaskReveal show delay={1100} duration={500}>
                <span className="ccu-tl-year">前223年</span>
              </MaskReveal>
              <MaskReveal show delay={1200} duration={500}>
                <span className="ccu-tl-tag is-done">楚</span>
              </MaskReveal>
              <MaskReveal show delay={1300} duration={600}>
                <span className="ccu-tl-label">王翦六十万大军灭楚</span>
              </MaskReveal>
            </div>

            {/* 222 BC — 灭燕 */}
            <div className="ccu-tl-item">
              <MaskReveal show delay={1400} duration={500}>
                <span className="ccu-tl-year">前222年</span>
              </MaskReveal>
              <MaskReveal show delay={1500} duration={500}>
                <span className="ccu-tl-tag is-done">燕</span>
              </MaskReveal>
              <MaskReveal show delay={1600} duration={600}>
                <span className="ccu-tl-label">破燕都蓟城</span>
              </MaskReveal>
            </div>

            {/* 221 BC — 灭齐 */}
            <div className="ccu-tl-item">
              <MaskReveal show delay={1700} duration={500}>
                <span className="ccu-tl-year">前221年</span>
              </MaskReveal>
              <MaskReveal show delay={1800} duration={500}>
                <span className="ccu-tl-tag is-done">齐</span>
              </MaskReveal>
              <MaskReveal show delay={1900} duration={600}>
                <span className="ccu-tl-label">齐国不战而降，天下一统</span>
              </MaskReveal>
            </div>
          </div>

          <div className="ccu-footnote label-mono" style={{ marginTop: "var(--space-5)" }}>
            <MaskReveal show delay={2200} duration={600}>
              <span>
                <span className="dot-accent" /> &nbsp;十年扫平六国，势如破竹
              </span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* ================================================================
   * Step 6 — 大一统: Unification finale
   * ================================================================ */
  return (
    <div className="ccu-scene scene-pad">
      <header className="masthead">
        <span className="brand">Qin · 秦</span>
        <span className="issue">Chapter 03</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />

      <div className="ccu-unity">
        <div className="kicker">天下归一</div>

        <div className="ccu-unity-hero">
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="ccu-glow-ring" />
            <MaskReveal show duration={1100}>
              <div className="ccu-unity-num">大一统</div>
            </MaskReveal>
          </div>
          <MaskReveal show delay={600} duration={900}>
            <p className="ccu-text ccu-center" style={{ fontSize: "var(--t-h1)", lineHeight: 1.2, margin: 0 }}>
              <span className="serif-cn">中国历史上</span>
              <br />
              <span className="serif-it ccu-em">第一次真正的大统一</span>
            </p>
          </MaskReveal>
        </div>

        <div className="ccu-unity-foot">
          <MaskReveal show delay={1400} duration={700}>
            <span className="label-mono" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <span className="dot-accent" /> &nbsp;不到四十岁的男人，改变了中国
            </span>
          </MaskReveal>
        </div>
      </div>
    </div>
  );
}
