function main (input) {
    let salary = parseInt(input);
    let bonus = Math.floor(salary*(10/100));
    console.log(bonus);
}   

process.stdin.on('data', data => {
    main(data.toString().trim());
})