function solve(arr, jump) {

    let result = [];

    for (let i = 0; i < arr.length; i += jump) {
        let currentChar = arr[i];
        result.push(currentChar);
    }

    return result

}

solve(['1', 
    '2',
    '3', 
    '4', 
    '5'], 
    6
    
    
)