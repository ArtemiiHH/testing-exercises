export function analyzeArray(arr) {
  // Variables to return
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const average = arr.reduce((a, b) => a + b) / arr.length;
  const length = arr.length;

  // Return values
  return { average, min, max, length };
}
