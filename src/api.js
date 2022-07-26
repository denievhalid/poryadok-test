import { isPalindrome } from "./utils";

export function palindrome(req, res) {
  const {
    params: { value },
  } = req;

  return res.json({
    isPalindrome: isPalindrome(value),
  });
}

export function getOftenSymbol(req, res) {
  const {
    params: { value },
  } = req;

  const result = {};
  const symbols = [...value];

  for (const s of symbols) {
    if (!result.hasOwnProperty(s)) {
      result[s] = 1;
      continue;
    }

    result[s]++;
  }

  const arr = Object.keys(result).sort((a, b) => result[b] - result[a]);

  return res.json({
    symbol: arr.slice(0, 2).pop(),
  });
}
