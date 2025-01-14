function solve(numStr, arg1, arg2, arg3, arg4, arg5) {
    let num = Number(numStr);
    let args = [];
    args.push(arg1);
    args.push(arg2);
    args.push(arg3);
    args.push(arg4);
    args.push(arg5);
    
    for (const element of args) {
        if (element === "chop") {
            num /= 2;
            console.log(num);   
        } else if (element === "dice") {
            num = Math.sqrt(num);
            console.log(num);  
        } else if (element === "spice") {
            num += 1;
            console.log(num);
        } else if (element === "bake") {
            num *= 3;
            console.log(num);
        } else if (element === "fillet") {
            num = num - num * 0.2
            console.log(num);
        }
    }
    
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')