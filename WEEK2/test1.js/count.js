const startTime = Data.now();

function someheavyTask() {
    for (let i = 0 ; i < 10e7; i++){
        Math.sqrt(i);
    }
}


someheavyTask();
const endTime = Date.now()
const elapsedtime = endTime - startTime;

console.log(`Elapsed time: ${elapsedtime} ms `)