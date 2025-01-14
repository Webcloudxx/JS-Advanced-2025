function computeGCD(a, b) {
    let gcd = function(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    let result = gcd(a, b);
    console.log(result);
    
    
}

computeGCD(2154, 458)