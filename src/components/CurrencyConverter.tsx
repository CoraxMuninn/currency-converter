import { useState, type ChangeEvent } from "react";
import ChangeButton from "./UI/ChangeButton";
import InputCurrency from "./UI/InputCurrency";
import { formatter } from "../utils/formatter";
import {
  IRR_Currency,
  USD_Currency,
  USD_Currency_fa,
  IRR_Currency_fa,
} from "../utils/constant";
import ChangeLanguage from "./UI/ChangeLanguage";
import { getExchangeRate } from "../utils/exchangeRate";
import CustomRate from "./UI/CustomRate";

// Fetch the exchange rate
const Exchange = await getExchangeRate();

export default function CurrencyConverter() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [customRate, setCustomRate] = useState("");
  const [changeCurrency, setChangeCurrency] = useState(false);
  const [language, setLanguage] = useState("en-US");

  const Exchange_Rate = +customRate || Exchange;

  const IrrCurrency = language === "en-US" ? IRR_Currency : IRR_Currency_fa;
  const UsdCurrency = language === "en-US" ? USD_Currency : USD_Currency_fa;

  function handleChange1(e: ChangeEvent<HTMLInputElement>) {
    // Remove separators before calculations.
    const value = e.target.value.replace(/,/g, "");

    // Clear inputs when the user clears current input.
    if (value === "") {
      setValue1("");
      setValue2("");
      return;
    }

    if (changeCurrency) {
      const result = +value * Exchange_Rate;
      setValue1(formatter(result));
      setValue2(formatter(+value));
    } else {
      const result = +value / Exchange_Rate;
      setValue2(formatter(result));
      setValue1(formatter(+value));
    }
  }

  function handleChange2(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/,/g, "");

    if (value === "") {
      setValue1("");
      setValue2("");
      return;
    }

    if (changeCurrency) {
      const result = +value / Exchange_Rate;
      setValue2(formatter(result));
      setValue1(formatter(+value));
    } else {
      const result = +value * Exchange_Rate;
      setValue1(formatter(result));
      setValue2(formatter(+value));
    }
  }

  function handleCustomRate(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value === "") {
      setCustomRate("");
      setValue1("");
      setValue2("");
      return;
    }
    setCustomRate(value);

    if (changeCurrency) {
      const amount2 = Number(value2.replace(/,/g, ""));
      const result = amount2 * +value;
      setValue1(value2 ? formatter(result) : "");
    } else {
      const amount1 = Number(value1.replace(/,/g, ""));
      const result = amount1 / +value;
      setValue2(value1 ? formatter(result) : "");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4 sm:p-6">
      <div className="relative flex w-full max-w-200 flex-col items-center justify-center gap-5 rounded-xl border border-white/30 shadow-2xl backdrop-blur-4xl px-4 py-16 sm:px-6 md:px-8 lg:h-110">
        <ChangeLanguage onChange={setLanguage} />
        <h1 className="pb-6 text-center text-xl font-bold text-white sm:pb-10 sm:text-3xl md:text-4xl">
          {language === "en-US" ? "Currency Converter" : "تبدیل ارز"}
        </h1>

        <div
          className="flex w-full flex-col justify-between gap-5 sm:max-w-125"
          dir={language === "fa-IR" ? "rtl" : ""}
        >
          <InputCurrency
            currency={changeCurrency ? UsdCurrency : IrrCurrency}
            value={changeCurrency ? value2 : value1}
            onChange={(e) => handleChange1(e)}
            lang={language}
          />

          <ChangeButton onChange={() => setChangeCurrency((prev) => !prev)} />

          <InputCurrency
            currency={changeCurrency ? IrrCurrency : UsdCurrency}
            value={changeCurrency ? value1 : value2}
            onChange={(e) => handleChange2(e)}
            lang={language}
          />

          <CustomRate
            value={customRate}
            onChange={(e) => handleCustomRate(e)}
            lang={language}
            exchangeRate={String(formatter(Exchange))}
          />
        </div>
      </div>
    </div>
  );
}
