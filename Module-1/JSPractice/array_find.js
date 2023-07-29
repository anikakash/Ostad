var num=[30,32, 40, 55, 60, 80, 90];

var result = num.find(function (num) {
    return num > 50;
});
console.log(result);

var result = num.findIndex(function (num) {
    return num > 50;
});
console.log(result);