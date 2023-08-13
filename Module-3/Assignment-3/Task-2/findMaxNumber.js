function findMaxNumber (arr){

    let mx = -1;
    for(let i=1; i<arr.length; i++){
        if(arr[i]>mx)mx=arr[i];
    }
    if(mx==-1) return  null;
    else return mx;

}

const emptyArray = [10, 20, 5, 30, 25];
console.log(findMaxNumber(emptyArray));
