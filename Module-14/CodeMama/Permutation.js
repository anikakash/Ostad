let ans="";
function main (input) {
    let string = input;
    let l=0, n=input.length-1;
    // console.log(l, n);
    permute(string, l, n);
    ans=ans.slice(0,-1); // remove last space;
    ans = ans.split(" ").sort().join(" "); // first split and then sort then joint;
    console.log(ans);
}
function permute(string,l ,n ){
    if(l===n){
        ans+=string+" ";
    }else{
        for(let i=l; i<=n; i++){
            string =  swap(string,l, i);
            permute(string, l+1, n);
            string =  swap(string,l, i);
        }
    }
}
function swap(a, i, j) {
    let temp;
    let charArray = a.split("");
    temp = charArray[i] ;
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray).join("");
}


main("abc");