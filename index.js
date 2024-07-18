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

//The Promise API

let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(4)
    }, 4000)
})
let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject(new Error("error"))
        resolve(5)
    }, 2000)
})
let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(6)
    }, 3000)
})

p4.then((value) => {
    console.log(value);
})
p5.then((value) => {
    console.log(value);
})
p6.then((value) => {
    console.log(value);
})

let all_settled_promise = Promise.allSettled([p4, p5, p6])
let all_promise = Promise.all([p4, p5, p6])
all_promise.then((value) => {
    console.log(value);
})
all_settled_promise.then((value) => {
    console.log(value);
})

let race_promise = Promise.race([p4, p5, p6])
race_promise.then((value) => {
    console.log(value);
})
let any_promise = Promise.any([p4, p5, p6])
any_promise.then((value) => {
    console.log(value);
})
let resolve_promise = Promise.resolve(6)
resolve_promise.then((value) => {
    console.log(value);
})
let reject_promise = Promise.reject(new Error("Error"))
reject_promise.then((value) => {
    console.log(value);
})

//Fetch API
let p7 = fetch("https://goweather.herokuapp.com/weather/mumbai")
p7.then((response) => {
    // // console.log(response.status);
    // //console.log(response.headers);
    return response.json()
}).then(response => console.log(response))