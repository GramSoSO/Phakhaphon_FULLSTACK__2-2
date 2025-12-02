const istatus = 200;

if (istatus === 200) {
    console.log("OK i!")

} else if (istatus === 400) {
    console.log("Bad i!")

}else{
    console.log('Unknow i!');
}

switch (istatus) {
    case 200:
        console.log("OK S!")
        //break;
    case 400:
        console.log("BAD S!")
        break;
    default:
        console.log("Unknow s!")
        
}

const statusMessage = (istatus === 200) ? "OK m!" :"BAD m!";
console.log(statusMessage)