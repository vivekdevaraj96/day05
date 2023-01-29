// Remove duplicates from an array

let arr=['madam', 'racecar', 'Happy', 'mom','civic', 'creative','level', 'Happy', 'mom'];




let unique= arr.filter(function(a,index){
    if(arr.indexOf(a)==index){
        return a;
    }
    
})

console.log(unique);

// output:
// [
//   'madam', 'racecar',
//   'Happy', 'mom',
//   'civic', 'creative',
//   'level'
// ]
