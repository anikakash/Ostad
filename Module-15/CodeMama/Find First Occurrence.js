function firstOccurrenceBinarySearch(n, arr, target) {
    let low = 0;
    let high = n - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            result = mid;
            high = mid - 1; // Move to the left to find the first occurrence
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}

function main(s) {
    s = s.split("\n");
    const n = Number(s[0]);
    const target = Number(s[2]);
    const arr = s[1].split(" ").map(Number);

    let idx = firstOccurrenceBinarySearch(n, arr, target);

    if (idx !== -1) {
        console.log(idx);
    } else {
        console.log("Element not found");
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});