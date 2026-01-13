const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Your name: " , (name) => {
    rl.question("Enter Your Weight (in KG): ", (weight) =>{
        rl.question("Enter Your height (in m): ", (height) =>{

            let bmi = weight / (height*height);

            console.log(`${name}, Your BMI is ${bmi.toFixed(2)}`);
            
            rl.close();
        })
    })
})