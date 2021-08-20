// 4 Rules of BIG O

// 1. Worst case scenario
// Big O doesn't care whether the item you're looking for is at the begining of the array or the end. We're going to calculate it as if it was at the end. 
//example below 
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array){
    for (let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('found nemo');
            break;
        }
    }
    let t1 = performance.now();
}
findNemo(large); // O(n) --> Linear time to find nemo. The number of operations increases linearly with the number of operations. Big O notation



//2. Remove Constants
// 

// example

function printFirstItemthanFirstHalfThanSayHi100times(items){
    console.log(items[0]); //BIG O(1)

    var middleIndex = Math.floor(items.length/2); // BIG O(1)
    var index = 0;

    while (index < middleIndex){
        console.log(items[index]); // BIG O(n/2)
        index++; // BIG O(n/2)
    }
    for (var i = 0; i<100; i++){ // BIG O(100)
        console.log('hi');
    }
}

// BIG O(2 + (n/2) +100) ==> this evaluate to BIG O(n) because the the constants are irrelavant to the scalability. If items is an array with a million items, the constants are inconsequential.


// constant time... no matter how many boxes we have in the array, it will always just take the first item

function compressFirstBox(boxes){
    console.log(boxes[0]);
}

// 

const boxes = [0,1,2,3,4,5]

funtion logfirstTwoBoxes(boxes){
    console.log(boxes[0]); // 0(1)
    console.log(boxes[1]); // 0(1)
}

logfirstTwoBoxes(boxes) // even though there are two operations that the function performs, Each one has a constant amount of time no matter how large the number of elements there are, the time will stay the same.

// Challenge funtion to calculate 

function funChallenge(input){
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++){ // O(n)
        anotherFunction(); // O(n)
        let stranger = true; //O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

funChallenge() // BIG O(3 + 4n) ==> BIG O(n)


// Challenge Number 2

function anotherFunChallenge(input){
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) { // O(n)
        let x = i + 1; // O(n)
        let y = i + 2; // O(n)
        let z = i + 3; // O(n)
    }
    for (let j = 0; j < input; j++){ // O(n)
        let p = j * 2; // O(n)
        let q = j * 2; // O(n)
    }
    let whoAmI = "I don't know"; Object(1)
}

// BIG O(4 + 7n) ==> BIG O(n)

