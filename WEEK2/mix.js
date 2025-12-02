function createLogEntry(message){
    const now =  new Date();
    const timestamp = now.toLocaleDateString('th-TH');

    const eventid = Math.random().toString(16).substring(2,10).toUpperCase()

    const logmessage = message.toUpperCase();
    
    return `[${timestamp}] [${eventid}] - ${logmessage})`;
}

const log = createLogEntry("User login successful");
console.log(log)
