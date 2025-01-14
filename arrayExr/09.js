
function solve(matrix) {

let magicNum = matrix[0].reduce((a, b) => a + b);

for (let row = 0; row < matrix.length; row++){
    let sumCol = 0;
    let sumRow = 0;

    for (let col = 0; col < matrix.length; col++){

        sumRow += matrix[col][row];
        sumCol += matrix[row][col];
    }
    
    if (magicNum !== sumRow || magicNum !== sumCol){
         
         return false
    }
}

return true

}


solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   
)