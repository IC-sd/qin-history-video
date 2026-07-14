import type { ChapterDef } from "./types";
import HookChapter from "../chapters/01-hook/Hook";
import { narrations as hookNarrations } from "../chapters/01-hook/narrations";
import LegendaryChapter from "../chapters/02-legendary/Legendary";
import { narrations as legendaryNarrations } from "../chapters/02-legendary/narrations";
import ClearCourtUnifyChapter from "../chapters/03-clear-court-unify/ClearCourtUnify";
import { narrations as clearCourtNarrations } from "../chapters/03-clear-court-unify/narrations";
import ReformEmpireChapter from "../chapters/04-reform-empire/ReformEmpire";
import { narrations as reformNarrations } from "../chapters/04-reform-empire/narrations";
import TyrannyChapter from "../chapters/05-tyranny/Tyranny";
import { narrations as tyrannyNarrations } from "../chapters/05-tyranny/narrations";
import ImmortalityChapter from "../chapters/06-immortality/Immortality";
import { narrations as immortalityNarrations } from "../chapters/06-immortality/narrations";
import HuHaiChapter from "../chapters/07-hu-hai/HuHai";
import { narrations as huHaiNarrations } from "../chapters/07-hu-hai/narrations";
import EpilogueChapter from "../chapters/08-epilogue/Epilogue";
import { narrations as epilogueNarrations } from "../chapters/08-epilogue/narrations";

export const CHAPTERS: ChapterDef[] = [
  {
    id: "hook",
    title: "千古一帝，还是千古暴君？",
    narrations: hookNarrations,
    Component: HookChapter,
  },
  {
    id: "legendary",
    title: "传奇人生的开始",
    narrations: legendaryNarrations,
    Component: LegendaryChapter,
  },
  {
    id: "clear-court-unify",
    title: "清君侧 灭六国",
    narrations: clearCourtNarrations,
    Component: ClearCourtUnifyChapter,
  },
  {
    id: "reform-empire",
    title: "全面革新 创立帝国",
    narrations: reformNarrations,
    Component: ReformEmpireChapter,
  },
  {
    id: "tyranny",
    title: "荒淫暴君 焚书坑儒",
    narrations: tyrannyNarrations,
    Component: TyrannyChapter,
  },
  {
    id: "immortality",
    title: "妄求长生 身死异乡",
    narrations: immortalityNarrations,
    Component: ImmortalityChapter,
  },
  {
    id: "hu-hai",
    title: "二世嬴胡亥",
    narrations: huHaiNarrations,
    Component: HuHaiChapter,
  },
  {
    id: "epilogue",
    title: "历史评说",
    narrations: epilogueNarrations,
    Component: EpilogueChapter,
  },
];
