// function printObjectProperties(object){
//     for(let items in object){
//
//     }
// }
// // objects;
// const car = {
//     type:"Fiat",
//     model:500,
//     color: "white",
//     carDetails: function(){
//         return this.type+" "+this.model+" "+this.color;
//     }
// };


/// This can use in a function also:
function sayHello() {
    console.log("Hello, " + this.name + "!");
}

const person = {
    name: "Alice",
    age: 25
};

sayHello.call(person);



// -------------- End this use in function ------------

