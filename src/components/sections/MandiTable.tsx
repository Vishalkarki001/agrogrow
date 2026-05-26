import { FaArrowUp, FaArrowDown, FaArrowsRotate } from "react-icons/fa6";
import { mandiData } from "@/lib/data";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function MandiTable() {
  return (
    <AnimateOnScroll animation="fade-up" delay={200}>
      <div className="bg-glass backdrop-blur-xl border border-glass-border rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[650px]">
            <thead className="bg-[rgba(45,106,79,0.4)]">
              <tr>
                {["Crop", "Mandi", "Min (₹/Quintal)", "Max (₹/Quintal)", "Trend"].map(
                  (h) => (
                    <th
                      key={h}
                      className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-widest text-mint-2"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {mandiData.map((row) => {
                const Icon = row.icon;
                const TrendIcon = row.trend === "up" ? FaArrowUp : FaArrowDown;
                const trendClass =
                  row.trend === "up"
                    ? "text-[var(--color-green)]"
                    : "text-[var(--color-red)]";
                return (
                  <tr
                    key={row.crop}
                    className="border-b border-glass-border last:border-b-0 hover:bg-[rgba(45,106,79,0.15)] transition-colors"
                  >
                    <td className="py-4 px-5 text-sm text-text">
                      <span className="inline-flex items-center gap-2">
                        <Icon style={{ color: row.iconColor }} />
                        {row.crop}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-sm text-text-muted">
                      {row.mandi}
                    </td>
                    <td className="py-4 px-5 text-sm text-text-muted">
                      {row.min}
                    </td>
                    <td className="py-4 px-5 text-sm text-text-muted">
                      {row.max}
                    </td>
                    <td
                      className={`py-4 px-5 text-sm font-semibold ${trendClass}`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <TrendIcon /> {row.change}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="py-3.5 px-5 text-xs text-text-dim text-right border-t border-glass-border">
          <FaArrowsRotate className="inline mr-1.5 text-accent" /> Updated: Today
          8:00 AM (Demo Data)
        </div>
      </div>
    </AnimateOnScroll>
  );
}
