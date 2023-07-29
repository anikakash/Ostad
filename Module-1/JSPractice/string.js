// function search(arr, item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == item) return i;
//     }
//     return -1;
// }
// console.log(search([1, 5, 3], 3));

// var num = 10;
// console.log(num);

function main (input) {
    
    let arr = input.split(' ').map(Number);
    if(arr[0]==0)console.log("The number is zero.");
    else if(arr[0]>0)console.log(`${arr[0]} is a positive number.`);
    else console.log(`${arr[0]} is a negative number.`);
}
process.stdin.on('data', data => {
    main(data.toString().trim());
})