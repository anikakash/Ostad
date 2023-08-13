function main (input) {
    let arr = input.split(' ').map(Number);
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let ans = sum/arr.length;;
    console.log(`Average: ${ans.toFixed(2)}`);
}   

process.stdin.on('data', data => {
    main(data.toString().trim());
})