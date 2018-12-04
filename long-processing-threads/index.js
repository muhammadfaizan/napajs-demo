// The below variable has the number of threads
const napa = require('napajs')
const THREADS_COUNT = 4;
const zone = napa.zone.create('zone1', { workers: THREADS_COUNT });

// The below variable is array has 40 elements for example && each element includes too much data
let DATA = Array.from({length: 40}, v => 0);
// thats not too much of data but instead 100 elements per data element, so thats a fair amount of number for this sample
DATA = DATA.map((a) => Array.from({length: 100}, v => 0))


// The below function takes long time && I have to call it for every element in DATA array variable
// function ITakeLongTime(data) {}
function ITakeLongTime(data, threadNo) {
    let threadName = `thread # ${threadNo}`;
    console.log(`${threadName} started`)
    let i = 0;
    // iterating to cause delay and modify data. just to check if data is being changed
    while( i < 1000) { 
        // modifying data here, in thread, but this wont effect global "dataSet" 
        data[i % data.length][i%100] = i;
        i++;
        // uncomment below line to see what data is being changed, remember each data is slice of the original dataset.
        // console.log(`${threadName}: data[${i % data.length}][${i%100}] = ${i}`)
    }
    console.log(`${threadName} ended`)
    // console.endTime(threadNo);
    return data;
}
function run(dataSet = [], batches = 10) {
    var start = Date.now();

    var promises = [];
    for (var i = 0; i < THREADS_COUNT; i++) {
        let st = batches * i;
        let end = st + batches;
        promises[i] = zone.execute(ITakeLongTime, [dataSet.slice(st, end), i]);
    }
    
    return Promise.all(promises).then(values => {
        // returned value from function is in "value" attribute.
        // the result is not what I expected...
        // however you can manipulate or view your result here.
        // values.forEach(result => console.log(result.value));

        // console.log(values[0].value[0][21]);
    })
    .catch(err => {
        //do something with error
        console.log(err);
    });;
}
// running code to 
run(DATA, 10);

