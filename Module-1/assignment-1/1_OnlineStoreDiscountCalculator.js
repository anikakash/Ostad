
function discountCalculator(purchase_amount){
    if (purchase_amount >= 200){
        return (purchase_amount) * (15.0/100.0);
    } else if (purchase_amount >= 100){
        return (purchase_amount) * (10.0/100.0);
    } else if (purchase_amount >= 50){
        return (purchase_amount) * (5.0/100.0);
    } else {
        return 0;
    }
}


let discount = discountCalculator(200);
console.log("Your discount ammount is: " + discount +"$");
console.log("Your total payment is: " + (purchase_amount - discount) + "$");