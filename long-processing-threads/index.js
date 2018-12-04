// The below variable has the number of threads
const napa = require('napajs')
const THREADS_COUNT = 4;
const zone = napa.zone.create('zone1', { workers: THREADS_COUNT });

// The below variable is array has 40 elements for example && each element includes too much data
let DATA = Array.from({length: 40}, (v, i) => i);

DATA = DATA.map((a) => Array.from({length: 100}, (v, i) => i))

function ITakeLongTime(data, threadNo) {
    let threadName = `thread # ${threadNo}`;
    console.log(`${threadName} started`)
    // console.time(threadNo)
    while( i < 100000) { data[i%40][i%100] = i++ };
    console.log(`${threadName} ended`)
    // console.endTime(threadNo);
    return threadName;
}
// The below function takes long time && I have to call it for every element in DATA array variable
// function ITakeLongTime(data) {}
function run(dataSet = [], batches = 10) {
    var start = Date.now();

    var promises = [];
    for (var i = 0; i < THREADS_COUNT; i++) {
        let st = batches * i;
        let end = st + batches;
        promises[i] = zone.execute(ITakeLongTime, [dataSet.slice(st, end), i]);
    }
    
    return Promise.all(promises).then(values => {
        values.forEach(console.log);
    })
    .catch(console.log);;
}

run(DATA, 10);