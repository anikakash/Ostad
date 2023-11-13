function main (s) {
    s = s.split("\n");
    const n = Number(s[0]);
    const target = Number(s[2]);
    const arr = s[1].split(" ").map(Number);
    let idx =  BinarySearch(n, arr, target);
    if(idx!==-1)
        console.log(idx);
    else console.log("Element not found");
}

function BinarySearch(n, arr, target){
    let start=0, end = n-1;

    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(target===arr[mid]){
            return mid;
        }
        else if(arr[mid]>target){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return -1;
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});