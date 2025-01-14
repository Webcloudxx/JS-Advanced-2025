function solve(sentence) {

    let pattern = /[\w]+/g;
    let test = sentence.matchAll(pattern);

    let uppedWords = [];

    for (const element of test) {
        let currentWord = element[0].toUpperCase();
        uppedWords.push(currentWord);
    }

    console.log(uppedWords.join(", "));
    
    
}

solve ('Hi, how are you?')