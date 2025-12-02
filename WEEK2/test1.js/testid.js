function generateTemID(){
    const randomID = Math.random().toString(36).substring(2,8).toUpperCase();
    return randomID
}
const orderID =  generateTemID();
console.log(`ID Order: ${orderID}`);
