function who(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("🐱‍👤");
        }, 200);
    });
}

function what() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("lurks");
        },300);
    })
}

function where() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("in The shadows");
        },500);
    })
}

async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
    
}

console.log("WE ARE looking for:")
msg();
console.log("Hello")
