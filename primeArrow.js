// Return all the prime numbers in an array(Arrow function)

let arr=[1,5,9,6,7,6,12,13];

let prime=arr.filter((a)=>{
    var isprime=0;
    for(i=2;i<a;i++){
        if(a%i==0){
            isprime+=1;
        }
    }

    if(isprime==0){
        return a;
    }
})

console.log(prime);