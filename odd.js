// Print odd numbers in an array

var arr=[1,2,5,7,4,7];

var checkodd=arr.filter(function(value){
    return value%2==1;
})



console.log(checkodd);

 

// output
// [ 1, 5, 7, 7 ]