import type { CustomCurrencyProps } from "../../types/currency";

export default function CustomRate({
  value,
  onChange,
  lang,
  exchangeRate,
}: CustomCurrencyProps) {
  return (
    <div className="flex w-full min-w-0 rounded-md mt-5 border border-white/60 bg-teal-800 p-2">
      <div
        className={`flex  shrink-0 items-center gap-1 ${lang === "en-US" ? "border-r w-26" : "border-l w-21"} border-white/70`}
      >
        <span className="text-white text-xs font-bold">
          {lang === "en-US" ? "Custom USD rate" : "نرخ دلخواه دلار"}
        </span>
      </div>

      <input
        type="text"
        inputMode="decimal"
        className="h-8 min-w-0 flex rounded-lg p-3 text-white focus-visible:outline-none"
        value={value}
        onChange={(e) => {
          const inputValue = e.target.value;

          // Allow digits, and decimal points while typing.
          if (/^[\d.]*$/.test(inputValue)) {
            onChange(e);
          }
        }}
        placeholder={exchangeRate}
      />
    </div>
  );
}
