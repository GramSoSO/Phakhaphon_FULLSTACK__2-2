function criticalCode () {
    throw"GG";
}

function logError(theException) {
    console.log(theException);
}

console.log("\n************TRY**********CATCH!!>>\n")

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error!!!")
    logError(ex);
}

console.log("\n*****************Throwing on try ctach%%%%%%^\n")

try {
    throw"GGs"
} catch (ex) {
    console.log("Got an errors");
    logError(ex);
}

console.log("\n&&&&&&&&&&&&&&& TRY .... CATCH Finally*********")

try {
    criticalCode();
} catch (ex) {
    console.log("Got an errorr")
    logError(ex);
} finally {
    console.log("Alway RUN!!");

}

