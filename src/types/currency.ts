import type { ChangeEvent } from "react";

export interface Currency {
  label: string;
  flag: string;
}

export interface InputCurrencyProps {
  currency: Currency;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  lang: string;
  exchangeRate?: number;
}

export interface CustomCurrencyProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  lang: string;
  exchangeRate: string;
}
