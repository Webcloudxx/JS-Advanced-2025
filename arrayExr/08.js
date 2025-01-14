function solve(arr) {

    const list = arr;

    list.sort((a, b) => {
        
        if (a.length !== b.length){
            return a.length - b.length;
        }

        return a.localeCompare(b)
    })

    console.log(list.join("\n"));
    
}

solve(['test', 
    'Deny', 
    'omen', 
    'Default']
    
    
    )