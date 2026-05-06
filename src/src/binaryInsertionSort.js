//  BINARY INSERTION SORT - Implementasi tanpa library
//  Penjelasan:
//  Peningkatan dari Insertion Sort biasa. Posisi insert dicari
//  menggunakan Binary Search sehingga komparasi berkurang dari
//  O(n) menjadi O(log n) per elemen.

// Helper: Binary Search → cari posisi insert di arr[low..high]
function binarySearch(arr, key, low, high) {
  while (low <= high) {
    let mid = (low + high) >>> 1; // sama dengan Math.floor((low+high)/2)
    if (arr[mid] <= key) low = mid + 1;
    else high = mid - 1;
  }
  return low; // posisi insert
}

// --- Versi dasar ---
function binaryInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let pos = binarySearch(arr, key, 0, i - 1);

    // Geser elemen untuk memberi ruang
    let j = i;
    while (j > pos) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[pos] = key;
  }
  return arr;
}

// --- Versi teroptimasi ---
// Optimasi: gunakan arr.copyWithin() untuk shift massal (lebih cepat dari loop)
function binaryInsertionSortOptimized(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let lo = 0,
      hi = i - 1,
      pos = i;

    while (lo <= hi) {
      let mid = (lo + hi) >>> 1;
      if (arr[mid] <= key) lo = mid + 1;
      else {
        pos = mid;
        hi = mid - 1;
      }
    }

    // copyWithin lebih efisien daripada loop geser satu per satu
    arr.copyWithin(pos + 1, pos, i);
    arr[pos] = key;
  }
  return arr;
}

module.exports = { binaryInsertionSort, binaryInsertionSortOptimized };
