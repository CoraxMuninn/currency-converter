import type { InputCurrencyProps } from "../../types/currency";

export default function InputCurrency({
  currency,
  value,
  onChange,
  lang,
}: InputCurrencyProps) {
  return (
    <div className="flex w-full min-w-0 rounded-md border border-white/60 bg-sky-900 p-2">
      <div
        className={`flex w-19 shrink-0 items-center gap-1 ${lang === "en-US" ? "border-r" : "border-l"} border-white/70`}
      >
        <img
          src={currency.flag}
          className="h-8 w-8 shrink-0"
          alt={`${currency.label} flag`}
        />

        <span className="text-white">{currency.label}</span>
      </div>

      <input
        type="text"
        inputMode="decimal"
        className="h-10 min-w-0 flex-1 rounded-lg p-3 text-white focus-visible:outline-none"
        value={value}
        onChange={(e) => {
          const inputValue = e.target.value;

          // Allow digits, commas, and decimal points while typing.
          if (/^[\d,.]*$/.test(inputValue)) {
            onChange(e);
          }
        }}
        placeholder={
          lang === "en-US" ? "Enter amount..." : "مقدار را وارد کنید..."
        }
      />
    </div>
  );
}
