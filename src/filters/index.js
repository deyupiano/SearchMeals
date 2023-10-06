export function truncateWords(str, count) {
  debugger
  if (!str) return str;
  return str.split(" ").slice(0, count).join(" ")
}