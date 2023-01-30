// Return all the palindromes in an array (Arrow function)

let arr=['madam', 'racecar', 'Happy','civic', 'creative','level', 'mom'];

let palindrome=arr.filter((a)=>{
    let rev=a.split('').reverse().join('');
    if(a==rev){
        return a;
    }
})

console.log(palindrome);