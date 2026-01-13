function promiseTimeout(ms) {
    return new Promise((resolve , reject) => {
        setTimeout(resolve,ms);
    });
}


async function longrunnigop() {
    console.log("OP START!")
    return 43;
}

async function run() {

    console.log("Start!!");

    await promiseTimeout(2000);
    const respone = await longrunnigop();
    console.log(respone);
    
    console.log("STOP!")
}
console.log("BEFORE RUN!()");
run();
console.log("AFTER RUN!()");
