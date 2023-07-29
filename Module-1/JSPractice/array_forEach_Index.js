let numArray=[30,32,40,55,60,80,90];

let idx = numArray.findIndex(function(items){
    return items > 50;
})
console.log(idx);