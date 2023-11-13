function main (s) {
    const freq={};
    let start=0, mx=0;
    for(let idx=0; idx<s.length; idx++) {
        const currentChar = s[idx];
        if(freq[currentChar]!==undefined && freq[currentChar]>=start){
            start = freq[currentChar]+1;
        }
        freq[currentChar] = idx;
        mx = Math.max(mx, (idx-start)+1);
    }
    console.log(mx);
}


let val = "abcabcbb";
main(val);