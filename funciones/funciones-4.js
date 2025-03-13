/**
 *  Ejemplo dar la vuelta a un string y un palindromo
 */

function reverseString(word) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];

    }
    return reversedWord;

}


console.log(reverseString("Robert"));
console.log(reverseString("Denisse"));
console.log(reverseString("Katya"));




