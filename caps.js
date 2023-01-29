// Convert all the strings to title caps in a string array

let input=['joe', 'waited', 'for', 'the', 'train.', 'the', 'train', 'was', 'late.'];

var casing=function(value){
    return value[0].toUpperCase()+value.slice(1);
}

var result=input.map(casing);

console.log(result);