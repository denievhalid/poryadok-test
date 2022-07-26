export function reverse(str) {
  return [...str].reverse().join("").toLowerCase();
}

export function isPalindrome(str) {
  console.log(reverse(str));
  return str.toLowerCase() === reverse(str);
}
