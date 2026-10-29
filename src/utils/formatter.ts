export function formatter(value: number) {
  const formattedValue = value.toLocaleString("en-US", {
    maximumFractionDigits: 4,
  });

  return formattedValue;
}
