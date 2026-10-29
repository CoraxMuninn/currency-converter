import { FALLBACK_EXCHANGE_RATE } from "./constant";

// Free API to get the live USD to IRR exchange rate
export async function getExchangeRate() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/iran-market/iran-market.github.io/main/data/popular.json",
    );

    if (!res.ok) {
      throw new Error("Failed to fetch exchange rate");
    }

    const { data } = await res.json();

    const usd = data.find((item: any) => item.symbol === "USD_IRR_FREE");

    // Convert the rate to IRR and use the fallback if the price is missing or invalid.
    const exchangeRate = usd?.price * 10 || FALLBACK_EXCHANGE_RATE;

    return exchangeRate;
  } catch {
    // Use the fallback rate if fetching or processing the API response fails.
    return FALLBACK_EXCHANGE_RATE;
  }
}
