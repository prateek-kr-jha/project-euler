function sum(num) {
    let maxLimitThree = num - (num % 3);
    let maxLimitFive = num - (num % 5);
    // console.log(maxLimitThree);
    // console.log(maxLimitFive);
    let sum = 0;
    for(let i = 1; i*3 <= maxLimitThree; i++) {
        // console.log(i * 3);
        
        sum += i * 3

    }
    console.log("---------------------")
    for(let i = 1; i*5 < maxLimitFive; i++) {
        // console.log(i);
        if(i % 3 != 0) {
            sum += i * 5
        }
    }
    return sum;
}

console.log(sum(1000));