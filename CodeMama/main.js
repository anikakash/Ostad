function main (input) {
    let num = parseInt(input);
    if((num%4==0 && num%100!=0) || (num%400==0)) console.log(`${num} is a leap year.`);
    else console.log(`${num} is not a leap year.`);
}

process.stdin.on('data', data => {
    main(data.toString().trim());
})