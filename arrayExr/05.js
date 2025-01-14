function solve(arr) {
    let result = [];

    let biggestNum = Number.MIN_SAFE_INTEGER;

    for (const currentNum of arr) {
        
        if (currentNum >= biggestNum){
            result.push(currentNum);

            biggestNum = currentNum;
        }
    }

    return result 
    
}

solve([20, 
    20, 
    2, 
    15,
    6, 
    1]
    
    
    )