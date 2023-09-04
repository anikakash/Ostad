const loadSCript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve(1)
        }
        script.onerror = () => { reject(0) }
    })
}

let p1 = loadSCript("http://localhost:3000/index.js")

p1.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log("Sorry Facing proble to laod the script")
})