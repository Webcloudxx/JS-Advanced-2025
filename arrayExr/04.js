function solve(arr, nRotations) {

    for (let i = 0; i < nRotations; i++) {
        let currentChar = arr.pop();
        arr.unshift(currentChar);
    }

    console.log(arr.join(" "));

}

solve(['Banana', 
    'Orange', 
    'Coconut', 
    'Apple'], 
    15
    
)