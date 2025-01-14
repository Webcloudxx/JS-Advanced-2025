function solve(arr) {
    let result = [];

    arr.sort((a, b) => a - b);

    while (arr.length > 0) {
        let smallNum = arr.shift()
        let bigNum = arr.pop();
        
        result.push(smallNum);
        result.push(bigNum);
        
    }

    return result
}

solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])