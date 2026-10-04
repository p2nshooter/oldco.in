import { Copa2026Burst } from "./Copa2026Burst";

/* Spain, world champion 2026: a ribbon above the header on every page, styled
 * in copa2026.css, plus a short burst of confetti once per visit. */
const TEXT: Record<string, string> = { default: "स्पेन — फ़ीफ़ा विश्व कप 2026 विजेता" };

export function Copa2026({ lang }: { lang?: string }) {
  const text = TEXT[(lang || "").slice(0, 2)] ?? TEXT.default;
  return (
    <div className="taksal26" role="note" aria-label={text}>
      <span className="taksal26-flag" aria-hidden="true" />
      <span className="taksal26-trophy" aria-hidden="true">🏆</span>
      <span className="taksal26-text">{text}</span>
      <span className="taksal26-pitch" aria-hidden="true">
        <span className="taksal26-ballx">
          <span className="taksal26-ball">⚽</span>
        </span>
      </span>
      <span className="taksal26-chip" aria-hidden="true">2026</span>
      <Copa2026Burst />
    </div>
  );
}
