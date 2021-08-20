// this algorithm exemplifies the principle of Big O. How many operations does it take to complete a function.
// The fewer the number of operations that a function needs to complete, the more efficient, and quickly the funciton is

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array){
    for (let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('found nemo');
        }
    }
    let t1 = performance.now();
}
findNemo(large); // O(n) --> Linear time to find nemo. The number of operations increases linearly with the number of operations. Big O notation
