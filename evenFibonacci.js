let highestLimit = 4000000;


function sumOfEvenFibonacciTerms(limit) {
    let nMinusOne = 1;
    let n = 2;
    let sum = 0;
    // console.log(nMinusOne);
    while(n <= limit) {
        // console.log(n);
        if(n % 2 == 0) {
            sum += n;
        }
        let temp = n;
        n = n + nMinusOne
        nMinusOne = temp;
    }

    return sum;
}

console.log(sumOfEvenFibonacciTerms(highestLimit));