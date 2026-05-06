const { bubbleSort, bubbleSortOptimized } = require("./src/bubbleSort");
const {
  binaryInsertionSort,
  binaryInsertionSortOptimized,
} = require("./src/binaryInsertionSort");

// ── Contoh data ──────────────────────────────────────────────
const data1 = [64, 34, 25, 12, 22, 11, 90];
const data2 = [37, 12, 46, 5, 18, 29, 55];

console.log("=== BUBBLE SORT ===");
console.log("Input :", [...data1]);
console.log("Output:", bubbleSort([...data1]));

console.log("\n=== BUBBLE SORT (Optimized) ===");
console.log("Input :", [...data1]);
console.log("Output:", bubbleSortOptimized([...data1]));

console.log("\n=== BINARY INSERTION SORT ===");
console.log("Input :", [...data2]);
console.log("Output:", binaryInsertionSort([...data2]));

console.log("\n=== BINARY INSERTION SORT (Optimized) ===");
console.log("Input :", [...data2]);
console.log("Output:", binaryInsertionSortOptimized([...data2]));
