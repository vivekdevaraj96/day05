let arr=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let output=function(input,shifts){
    var temp=0;
    for(i=0;i<shifts;i++){
        temp=input.shift();
        input.push(temp);
    }
    return input;
}

console.log(output(arr,2));

// output:
// [
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday',
//   'Monday'
// ]