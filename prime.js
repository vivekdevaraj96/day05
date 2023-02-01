// Return all the prime numbers in an array
let arr=[1,5,9,6,7,6,12,13];

var primecheck=arr.filter(function(a){
    var out=0;
    for(var i=2;i<a;i++){
        
        if(a%i==0){
            out=out+1;
        }
    }
    if(out==0 && a!=1){
        return a;
    }
})

console.log(primecheck);
