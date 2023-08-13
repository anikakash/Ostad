function main (input) {
    console.log(`The temperature in Fahrenheit is: ${(input*(9/5)+32).toFixed(2)}`);
}   

process.stdin.on('data', data => {
    main(data.toString().trim());
})