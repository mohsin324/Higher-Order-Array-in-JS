// swap the first index of input string
// let inputStr = prompt("Enter String.....");
// // console.log(inputStr+' input string ');
// let splitString = inputStr.replace(/\s{2,}/g, ' ').split(" ");
// let swapString = []
// let newString = splitString.forEach(string => {
//     if(string[0] !== string[0].toUpperCase()){
//         swapString.push(string[0].toUpperCase() + string.slice(1))
//     }
//     if(string[0] !== string[0].toLowerCase()){
//         swapString.push(string[0].toLowerCase() + string.slice(1))
//     }
// })
// console.log(swapString.toString())

// how to remove extra sapces
// let string = "This  is Mohsin";
// let reducedString = string.replace(/\s{2,}/g, ' ');

// console.log(reducedString);

//****************  print square of array
// let arr = [2,4,6, 12, 16, 125];
// for(num in arr ){
//     // power
//     // let print = Math.pow(arr[num], 2);
//     // square root
//     // let print = Math.sqrt(arr[num]);
//     // cube root 
//     let print = Math.floor(Math.sqrt(arr[num]))
//     console.log(print);
// }

// remove duplicate index from array
let arr = [1, 2, 3, 5, 2, 5, 9, 0, 3,5];
// console.log([... new Set(arr)])
let duplicate = {};
for(num of arr) {
    if(duplicate[num] > 1){
        delete duplicate[num] 

    }else{
        duplicate[num] = 1

    }
}
let ke = Object.keys(duplicate)
console.log(ke.length+' length of ke ')
console.log('duplicate keys  '+JSON.stringify(duplicate))
// // for count 
// let key = []
// for(let ke in duplicate ){
//     console.log('inside loop '+ duplicate[ke])
//     if(duplicate[ke] > 1){
//         key.push(ke)
//     }
// }

// console.log('Most frequest '+ key)






