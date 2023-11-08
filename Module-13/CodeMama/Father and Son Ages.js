function main (input) {
    const arr = input.split(' ').map(Number);
    arr[1]*=2;
    console.log(Math.abs(arr[0]-arr[1]));
 
     
 }
 
 let input = "";
 process.stdin.on('data', (chunk) => {
     input += chunk;
 });
 
 process.stdin.on('end', () => {
     main(input.trim());
 });