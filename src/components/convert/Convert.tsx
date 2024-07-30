export const ConvertE2B = (num: any): string => {
  const bengaliNumerals: { [key: string]: string } = {
    "0": "০",
    "1": "১",
    "2": "২",
    "3": "৩",
    "4": "৪",
    "5": "৫",
    "6": "৬",
    "7": "৭",
    "8": "৮",
    "9": "৯",
  };

  if (num === null || num === undefined) {
    return "";
  }

  return num
    .toString()
    .split("")
    .map((digit: string) => bengaliNumerals[digit] || digit)
    .join("");
};
