function isEven(num){
    return num %2 === 0;
}

function isOdd(num){
    if (num %2 !== 0){
        console.log("number is odd");
    }
}

module.exports = {
    isEven, isOdd
}