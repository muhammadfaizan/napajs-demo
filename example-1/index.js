
const napa = require('napajs');

/* Here we are defining workers to be "4"
    { workers: 4 }
    I am in learning process, so when I executed this code.
    Output can be seen in README and its pretty confusing.    
*/
const zone1 = napa.zone.create('zone1', { workers: 4 });

// Broadcast code to all 4 workers in 'zone1'.
zone1.broadcast('console.log("hello world");');
/* 
    With context to above code, I dont understand why a peice of code was passed as argument?
    I am pretty sure there will be better ways to do things in Napa.js, but for now lets just follow along.
*/

// Execute an anonymous function in any worker thread in 'zone1'.
zone1.execute(
    (text) => text, 
    ['hello napa'])
    .then((result) => {
        console.log(result.value);
    });