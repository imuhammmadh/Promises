//Chaining with Promises
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("p1 resolved after 2seconds");
    }, 2000)
    resolve(56)
})
p1.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("p2 resolved after 3seconds"), 3000)
    })
}).then((value) => {
    console.log(value);
    return 2
}).then((value) => {
    console.log(value);
})

let loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = (() => {
            resolve(true)
        })
        script.onerror = () => reject(false)
    })
}
let p2 = loadScript("https:cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
p2.then((value) => {
    console.log("Script Loaded!");
}).then((value) => {
    console.log("Second Script Ready!");
}).catch((eror) => {
    console.log("We are having problems in loading the script");
})

// Multiple Handlers to a Promise

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Resolved")
    }, 2000)
})
p3.then((value) => {
    console.log("Yeahhhhh!");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 6000)
    })
}).then(value => console.log(value))
p3.then((value) => {
    console.log(value);
})

