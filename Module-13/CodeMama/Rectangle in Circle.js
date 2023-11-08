function main (input) {
    const arr = input.split(' ').map(Number);
    let diagonal = (Math.sqrt((arr[0]*arr[0]) + (arr[1]*arr[1])));
    // console.log(diagonal, 2*arr[2]);
    if((2*arr[2])>=diagonal)console.log('true');
    else console.log('false');
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});