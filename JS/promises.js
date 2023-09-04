//
// let promise = new Promise(function (resolve,reject){
//     resolve(56)
// })
//
// console.log(promise)

let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("I am a promise for Resolve");
        resolve(true);
    },1000)
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("I am a promise for Reject");
        reject(new Error("This is an error"));
    },1000)
});

console.log(p1, p2);
p2.catch(()=>{
    console.log("This is an error handeler")
})