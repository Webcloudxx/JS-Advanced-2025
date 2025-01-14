function solve(commands) {
    let result = [];

    for (let i = 0; i < commands.length ; i++){
        let currentCmd = commands [i];

        if (currentCmd === "add"){
            result.push(i + 1);
        } else if (currentCmd === "remove"){
            result.pop();
        }
    }

    if (result.length <= 0) {
        console.log("Empty");
    } else {
        console.log(result.join("\n"));
        
    }
}

solve(['remove', 
    'remove', 
    'remove']
    
    
    )