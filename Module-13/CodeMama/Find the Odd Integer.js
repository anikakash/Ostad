function main (input) {
    const arr = input.split(' ').map(Number);
     const arrCpy = {}; // Use an object to store the frequency of elements
 
     for (const element of arr) {
         if (arrCpy[element]) {
             arrCpy[element]++;
         } else {
             arrCpy[element] = 1;
         }
     }
 
     // Iterate over the keys (element values) in the object
     // for (const key in arrCpy) {
     //     console.log(`${arrCpy[key]}`);
     // }
 
     // Check for elements with odd frequency
     for (const key in arrCpy) {
         if (arrCpy[key] % 2 !== 0) {
             console.log(`${key}`);
             break; // Exit the loop after finding the first element with odd frequency
         }
     }
 }
 
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });