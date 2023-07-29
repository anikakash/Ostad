let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// numArray.splice(index,removecount,items);

let result = arr.splice(1,2);
console.log(arr);

arr.splice(1,0,'x','y');
console.log(arr);

result = arr.splice(1,3,);
console.log(arr);