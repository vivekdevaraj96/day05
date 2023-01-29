let arr=[1,5,9,6,7,6];

var output= arr.reduce(function(a,i){
    let sum=a+i;
    return sum;
    
},0)



console.log(output);

// output
// 34


