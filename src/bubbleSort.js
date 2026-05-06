// ============================================================
//  BUBBLE SORT - Implementasi tanpa library
//  Penjelasan:
//  Membandingkan dua elemen berdekatan dan menukarnya jika
//  urutan salah. Proses diulang sampai array terurut.
//  Elemen besar "menggelembung" ke akhir di setiap pass.
// ============================================================

// --- Versi dasar ---
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Tukar elemen
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// --- Versi teroptimasi ---
// Optimasi 1: Early termination (jika tidak ada swap → sudah urut)
// Optimasi 2: Catat posisi swap terakhir → pass berikutnya lebih pendek
function bubbleSortOptimized(arr) {
  let lastSwap = arr.length - 1;
  while (lastSwap > 0) {
    let swapPos = 0;
    for (let j = 0; j < lastSwap; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapPos = j + 1;
      }
    }
    lastSwap = swapPos; // jika 0 → tidak ada swap → loop berhenti
  }
  return arr;
}

module.exports = { bubbleSort, bubbleSortOptimized };
