function solve(fruit, grams, pricePerKg) {
    let kgs = grams / 1000;
    let sumPrice = kgs * pricePerKg;
    
    console.log(`I need \$${sumPrice.toFixed(2)} to buy ${kgs.toFixed(2)} kilograms ${fruit}.`);
    
}

solve('apple', 1563, 2.35)