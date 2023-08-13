function main (input) {
    let arr = input.split(' ').map(Number);
    console.log(Math.max(...arr));
    
}   

process.stdin.on('data', data => {
    main(data.toString().trim());
})