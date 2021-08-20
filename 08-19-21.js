// BIG O Rule 3 is Different Terms for Inputs

// trickiest parts of an interview

function compressBoxesTwice(boxes, boxes2){ // the inputs here get their own term, because their size is completely independant of each other. just because one input has a length of 10 doesn't mean the second couldn't very well be a million.
    boxes.forEach(function(boxes){ // This evaluates to BIG O(a)
        console.log(boxes);
    });
    boxes.forEach(function(boxes2){ // This evaluates to BIG O(b)
        console.log(boxes);
    });
}
// you have to use different terms for the different inputs
// Therefore the function as a whole evaluates to BIG O(a+b)

// A question that you may have is: log all pairs of an array.

const boxes = [1,2,3,4,5]

function logAllPairs(array){
    for (var i = 0; i < input.length; i++){ // BIG O(n)
        for (var j = 0; j < input.length; j++){ // BIG O(n)
            console.log(array[i], array[j]);
        }
    }
}

// When you have a nested for loop, you multiply the loops by each other to get the BIG notation.
// this means that the above loop evaluates to BIG O(n) * BIG O(n) which then evaluates to BIG O(n^2)

// Rule 4 for BIG O(n) Drop Non Dominants

function printAllNumbersThenAllPairSums(numbers){
    console.log('these are the nmbers');
    numbers.forEach(function(number){ // BIG O(n)
        console.log(number);
    });

    console.log('and hese are their sums');
    numbers.forEach(function(firstNumber){ // these are inline functions that have no name and take in as an argument the result of the for each function that is called on the numbers array. The BIG O notation would be O(n)
        numbers.forEach(function(secondNumber){ // BIG O(n)
            console.log(firstNumber + secondNumber); // because this is based on the two preceding loops, it's O notation is BIG O(n^2)
        });
    });
}

// The BIG O notation for the entire function is O(n + n^2). BIG O Rule 4 states that this should evaluate to the Dominant funciton. In this case the fact that the first part of the function is BIG O(n) is inconsequential. The second part of the formula is highly dominant. The BIG O notation evaluates to BIG O(n^2)