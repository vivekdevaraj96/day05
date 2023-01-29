// Return median of two sorted arrays of the same size.

arr1=[1,5,6,9,11];

arr2=[65,43,20,17,9];

let median=function(a1,a2){
    let arr3=a1.concat(a2).sort(function(a,b){return a-b});

let center=arr3.length/2;

return (arr3[center-1]+arr3[center])/2;
}

console.log(median(arr1,arr2));

