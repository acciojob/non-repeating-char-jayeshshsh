//your JS code here. If required.
function firstNonRepeatingCharacter(str){
    // create an object to store the count of each charcter.
    const charCount ={};
    for(let i=0;i<str.length;i++){
        const char = str[i];
        charCount[char] = charCount [char] ? charCount[char]+1:1;
    }

    //loop through the string again and retur nthe first non-repeated character.
    for(let i=0;i<str.length;i++){
        const char = str[i];
        if(charCount[char]=== 1){
            return char;
			
        }
    }
    // if there is non-repeated character, return null.
    return null;
}
const input = prompt("Enter a string:");
const result = firstNonRepeatingCharacter(input);
alert(result ? result : null);
