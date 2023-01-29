// Return all the palindromes in an array

let arr=['madam', 'racecar', 'Happy','civic', 'creative','level', 'mom'];

var palindrome=arr.filter(function(a){
    let out=a.split('').reverse().join('');
    
    if(a==out){
        return a;
    } 
    
    
})

console.log(palindrome);

// output:
// [ 'madam', 'racecar', 'civic', 'level', 'mom' ]