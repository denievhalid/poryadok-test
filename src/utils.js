export function reverse(str) {
  return [...str].reverse().join("").toLowerCase();
}

export function isPalindrome(str) {
  return str.toLowerCase() === reverse(str);
}
