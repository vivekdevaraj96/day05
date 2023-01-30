// Convert all the strings to title caps in a string array

let input=['joe', 'waited', 'for', 'the', 'train.', 'the', 'train', 'was', 'late.'];

let caps=input.map((a)=>a[0].toUpperCase()+a.slice(1));

console.log(caps);


// output

// [
//     'Joe',    'Waited',
//     'For',    'The',
//     'Train.', 'The',
//     'Train',  'Was',
//     'Late.'
//   ]