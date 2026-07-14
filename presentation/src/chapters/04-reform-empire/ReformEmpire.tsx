import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./ReformEmpire.css";

/**
 * Chapter 04 — 全面革新 创立帝国
 * kraft-paper theme: warm kraft beige, deep brown ink, copper-rust accent.
 */
export default function ReformEmpireChapter({ step }: ChapterStepProps) {
  /* Step 0 — 泰山封禅：祭告天地，定都咸阳 */
  if (step === 0) {
    return (
      <div className="ref-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 04</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="ref-body ref-center">
          <div className="kicker" style={{ marginBottom: "var(--space-4)" }}>
            泰山封禅 · 公元前221年
          </div>
          <h2 className="ref-title">
            <MaskReveal show duration={900}>
              <span className="serif-cn">祭告天地，</span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={300} duration={900}>
              <span className="serif-it ref-em">定都咸阳</span>
            </MaskReveal>
          </h2>
          <p className="ref-text" style={{ marginTop: "var(--space-5)" }}>
            <MaskReveal show delay={700} duration={800}>
              <span>
                嬴政登上泰山之巅，举行封禅大典，向天地宣告天下的统一。
              </span>
            </MaskReveal>
          </p>
          <p className="ref-text" style={{ marginTop: "var(--space-4)" }}>
            <MaskReveal show delay={1050} duration={800}>
              <span className="ref-em">咸阳，从此成为帝国的心脏。</span>
            </MaskReveal>
          </p>
          <div className="ref-footnote label-mono">
            <MaskReveal show delay={1400} duration={600}>
              <span className="dot-accent" /> &nbsp;泰山封禅始于秦始皇
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 1 — '皇帝'称号 */
  if (step === 1) {
    return (
      <div className="ref-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 04</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="ref-quote-hero">
          <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
            始皇帝
          </div>
          <div className="ref-big-quote">
            <MaskReveal show duration={1100}>
              <span className="serif-cn">
                朕为<em className="ref-em">始皇帝</em>，
              </span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={400} duration={1100}>
              <span className="serif-cn">
                后世以计数，
              </span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={800} duration={1100}>
              <span className="serif-it ref-em">
                二世三世至于万世，
              </span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={1200} duration={900}>
              <span className="serif-cn">
                传之无穷
              </span>
            </MaskReveal>
          </div>
          <div className="ref-quote-attribution label-mono">
            <MaskReveal show delay={1600} duration={600}>
              <span className="dot-accent" />
              <span> &nbsp;—— 秦始皇</span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 2 — 郡县制：废除分封制→全国36郡→三公九卿层级图 */
  if (step === 2) {
    return (
      <div className="ref-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 04</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="ref-hierarchy">
          <div className="kicker" style={{ textAlign: "center" }}>
            郡县制 · 三公九卿
          </div>
          <div className="ref-hierarchy-grid">
            {/* Column 1: 三公 */}
            <div className="ref-hier-col">
              <div className="ref-hier-title">中央 · 三公</div>
              <MaskReveal show delay={200} duration={600}>
                <div className="ref-hier-card">
                  <span className="ref-hier-card-title">丞相</span>
                  <span className="ref-hier-card-sub">行政首脑</span>
                </div>
              </MaskReveal>
              <MaskReveal show delay={400} duration={600}>
                <div className="ref-hier-card">
                  <span className="ref-hier-card-title">太尉</span>
                  <span className="ref-hier-card-sub">军事长官</span>
                </div>
              </MaskReveal>
              <MaskReveal show delay={600} duration={600}>
                <div className="ref-hier-card">
                  <span className="ref-hier-card-title">御史大夫</span>
                  <span className="ref-hier-card-sub">监察百官</span>
                </div>
              </MaskReveal>
            </div>

            {/* Column 2: 九卿 + 郡 */}
            <div className="ref-hier-col">
              <div className="ref-hier-title">九卿 · 郡守</div>
              <MaskReveal show delay={800} duration={600}>
                <div className="ref-hier-card">
                  <span className="ref-hier-card-title">九卿</span>
                  <span className="ref-hier-card-sub">分管国家事务</span>
                </div>
              </MaskReveal>
              <div className="ref-hier-connector" style={{ margin: "var(--space-2) 0" }}>
                ↓
              </div>
              <MaskReveal show delay={1100} duration={600}>
                <div className="ref-hier-card">
                  <span className="ref-hier-card-title">36郡</span>
                  <span className="ref-hier-card-sub">郡守治理</span>
                </div>
              </MaskReveal>
            </div>

            {/* Column 3: 县 */}
            <div className="ref-hier-col">
              <div className="ref-hier-title">地方 · 县</div>
              <div className="ref-hier-connector">↓</div>
              <MaskReveal show delay={1400} duration={600}>
                <div className="ref-hier-card">
                  <span className="ref-hier-card-title">县</span>
                  <span className="ref-hier-card-sub">县令治理</span>
                </div>
              </MaskReveal>
              <div className="ref-hier-connector">↓</div>
              <MaskReveal show delay={1600} duration={600}>
                <div className="ref-hier-card">
                  <span className="ref-hier-card-title">乡 · 亭 · 里</span>
                  <span className="ref-hier-card-sub">基层治理</span>
                </div>
              </MaskReveal>
            </div>
          </div>
          <div className="ref-hier-foot">
            <MaskReveal show delay={1900} duration={700}>
              <span className="ref-em">废除分封</span>
              <span>，实行郡县。中央集权的统治网，</span>
              <span className="ref-em">层层控制</span>
              <span>。</span>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 3 — 书同文车同轨：统一前vs统一后对比 */
  if (step === 3) {
    return (
      <div className="ref-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 04</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="kicker" style={{ textAlign: "center", marginTop: "var(--space-5)" }}>
          书同文 · 车同轨
        </div>
        <div className="ref-compare">
          {/* Before: 统一前 */}
          <div className="ref-compare-side">
            <div className="ref-compare-label ref-compare-label-before">统一前</div>
            <MaskReveal show duration={700}>
              <div className="ref-compare-item">
                <span className="ref-compare-item-title" style={{ color: "var(--text-mute)" }}>
                  六国文字各异
                </span>
                <span className="ref-compare-item-sub">各国书写不同</span>
              </div>
            </MaskReveal>
            <MaskReveal show delay={300} duration={700}>
              <div className="ref-compare-item">
                <span className="ref-compare-item-title" style={{ color: "var(--text-mute)" }}>
                  车轨宽窄不一
                </span>
                <span className="ref-compare-item-sub">道路无法通用</span>
              </div>
            </MaskReveal>
            <MaskReveal show delay={600} duration={700}>
              <div className="ref-compare-item">
                <span className="ref-compare-item-title" style={{ color: "var(--text-mute)" }}>
                  货币度量混乱
                </span>
                <span className="ref-compare-item-sub">交易极为不便</span>
              </div>
            </MaskReveal>
          </div>

          <div className="ref-compare-divider" />

          {/* After: 统一后 */}
          <div className="ref-compare-side">
            <div className="ref-compare-label ref-compare-label-after">统一后</div>
            <MaskReveal show delay={900} duration={700}>
              <div className="ref-compare-item" style={{ borderColor: "var(--accent)" }}>
                <span className="ref-compare-item-title ref-em">小篆统一</span>
                <span className="ref-compare-item-sub">全国书写一致</span>
              </div>
            </MaskReveal>
            <MaskReveal show delay={1200} duration={700}>
              <div className="ref-compare-item" style={{ borderColor: "var(--accent)" }}>
                <span className="ref-compare-item-title ref-em">车同轨</span>
                <span className="ref-compare-item-sub">修驰道通天下</span>
              </div>
            </MaskReveal>
            <MaskReveal show delay={1500} duration={700}>
              <div className="ref-compare-item" style={{ borderColor: "var(--accent)" }}>
                <span className="ref-compare-item-title ref-em">统一度量衡</span>
                <span className="ref-compare-item-sub">经济大一统</span>
              </div>
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 4 — 长城：蒙恬率几十万人修筑万里长城 */
  if (step === 4) {
    return (
      <div className="ref-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 04</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="ref-wall">
          <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
            北筑长城
          </div>
          <div className="ref-wall-hero">
            <MaskReveal show duration={1000}>
              <span>万里长城</span>
            </MaskReveal>
          </div>
          <div className="ref-wall-text">
            <MaskReveal show delay={500} duration={800}>
              <span className="serif-cn">
                蒙恬率<span className="ref-em">三十万</span>大军
              </span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={800} duration={800}>
              <span className="serif-cn">
                北驱匈奴，修筑长城
              </span>
            </MaskReveal>
          </div>
          <p className="ref-text" style={{ maxWidth: "50ch" }}>
            <MaskReveal show delay={1200} duration={800}>
              <span>
                秦长城西起临洮，东至辽东，绵延万余里。
                它不仅是军事防线，更是<span className="ref-em">世界建筑的奇迹</span>。
              </span>
            </MaskReveal>
          </p>
        </div>
      </div>
    );
  }

  /* Step 5 — 疆域：秦朝最大疆域地图 */
  if (step === 5) {
    return (
      <div className="ref-scene scene-pad">
        <header className="masthead">
          <span className="brand">Qin · 秦</span>
          <span className="issue">Chapter 04</span>
        </header>
        <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
        <div className="ref-territory">
          <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
            帝国版图
          </div>
          <div className="ref-territory-title">
            <MaskReveal show duration={1000}>
              <span>空前辽阔</span>
            </MaskReveal>
          </div>
          <div className="ref-territory-desc">
            <MaskReveal show delay={500} duration={800}>
              <span className="serif-cn">
                东临大海，西至陇西，
              </span>
            </MaskReveal>
            <br />
            <MaskReveal show delay={800} duration={800}>
              <span className="serif-cn">
                南达岭南，北抵阴山
              </span>
            </MaskReveal>
          </div>
          <div className="ref-territory-regions">
            <MaskReveal show delay={1100} duration={600}>
              <span className="ref-territory-tag">陇西</span>
            </MaskReveal>
            <MaskReveal show delay={1200} duration={600}>
              <span className="ref-territory-tag">辽东</span>
            </MaskReveal>
            <MaskReveal show delay={1300} duration={600}>
              <span className="ref-territory-tag">岭南</span>
            </MaskReveal>
            <MaskReveal show delay={1400} duration={600}>
              <span className="ref-territory-tag">阴山</span>
            </MaskReveal>
            <MaskReveal show delay={1500} duration={600}>
              <span className="ref-territory-tag">东海</span>
            </MaskReveal>
          </div>
          <div className="ref-footnote label-mono" style={{ marginTop: "var(--space-5)" }}>
            <MaskReveal show delay={1700} duration={600}>
              <span className="dot-accent" /> &nbsp;征服百越，置桂林、南海、象郡
            </MaskReveal>
          </div>
        </div>
      </div>
    );
  }

  /* Step 6 — 影响延续两千年 */
  return (
    <div className="ref-scene scene-pad">
      <header className="masthead">
        <span className="brand">Qin · 秦</span>
        <span className="issue">Chapter 04</span>
      </header>
      <hr className="rule" style={{ marginTop: "var(--space-5)" }} />
      <div className="ref-legacy">
        <div className="kicker" style={{ marginBottom: "var(--space-3)" }}>
          影响两千年
        </div>
        <div className="ref-legacy-hero">
          <MaskReveal show duration={1000}>
            <span>延续至今</span>
          </MaskReveal>
        </div>
        <div className="ref-legacy-grid">
          <MaskReveal show delay={500} duration={700}>
            <div className="ref-legacy-card">
              <span className="ref-legacy-card-num">郡县制</span>
              <span className="ref-legacy-card-label">中央集权制度</span>
            </div>
          </MaskReveal>
          <MaskReveal show delay={800} duration={700}>
            <div className="ref-legacy-card">
              <span className="ref-legacy-card-num">书同文</span>
              <span className="ref-legacy-card-label">统一文字</span>
            </div>
          </MaskReveal>
          <MaskReveal show delay={1100} duration={700}>
            <div className="ref-legacy-card">
              <span className="ref-legacy-card-num">度量衡</span>
              <span className="ref-legacy-card-label">统一标准</span>
            </div>
          </MaskReveal>
        </div>
        <div className="ref-legacy-foot label-mono">
          <MaskReveal show delay={1500} duration={700}>
            <span className="dot-accent" /> &nbsp;秦始皇打下的底子，我们至今在用
          </MaskReveal>
        </div>
      </div>
    </div>
  );
}
