const promise = new Promise((resolve,reject) => {
    const res = true

    if (res) {
        resolve("RESOLVE!")

    } else {
        reject(Error("REJECT!"));
    }
});

promise.then (
    (res) => console.log(res),
    (err) => console.log(err)
);