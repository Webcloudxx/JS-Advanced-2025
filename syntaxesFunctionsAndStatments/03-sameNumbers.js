function solve(num) {
    let numStr = num + ""
    let isSame = "true";
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        let currentNum1 = numStr[0];
        let currentNum2 = numStr[i];

        if (currentNum1 !== currentNum2){
            isSame = "false"
        }

        sum += Number(currentNum2);
    }

    console.log(isSame);
    console.log(sum);
    
    
}

solve(1234)