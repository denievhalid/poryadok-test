export function reverse(str) {
  return [...str].reverse().join("");
}

export function isPalindrome(str) {
  return str.toLowerCase() === reverse(str).toLowerCase();
}
