
function checkEmpty(obj){
    let val=0;
    for(const items in obj){
        val++;
        if(val>0) return true;
    }
    return  false;
}
function  printObjectProperties(obj){

    if(!checkEmpty(obj)) {
        console.log("Object is Empty!");
    }else{
        for(const items in obj){
            console.log(`${items} : ${obj[items]}`);
        }

    }
}

const person = {
    name : "Anik Dash Akash",
    age : 23,
    university: "Daffodil International University",
    department: "CSE"
};

printObjectProperties(person);