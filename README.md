# 💱 Currency Converter

A simple, fast converter between **US Dollar (USD)** and **Iranian Rial (IRR)**, with a clean glass-style interface in English and Persian.

## ✨ Features

- **Two-way conversion**: type in either field and the other updates instantly
- **Custom Exchange Rate**: Set your own exchange rate for personalized calculations.
- **Swap button**: flip the direction between USD → IRR and IRR → USD
- **Live rate**: uses the current free-market USD rate, with a built-in fallback if it can't be loaded
- **English / Persian**: switch languages from the top corner, with full right-to-left support
- **Easy number input**: thousands separators are added automatically as you type
- **Responsive**: works on phones, tablets and desktops

## 🚀 How to Use

1. Enter an amount in either field.
2. See the converted value appear right away.
3. Tap the yellow button to swap currencies.
4. Use the **EN / FA** menu to change the language.

## 🛠️ Run Locally

```bash
git clone https://github.com/CoraxMuninn/currency-converter.git
cd currency-converter
npm install
npm run dev
```

Then open the address shown in your terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## 🧰 Built With

React 19 · TypeScript · Vite · Tailwind CSS
