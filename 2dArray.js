// // // // // // console.log(`--------------2D Array------------------`);
// // let arr = [
// //     ['b','b','b','b'],
// //     ['b','w','w','c'],
// //     ['b','w','w','b'],
// //     ['b','b','b','b','c', 'l'],
// // ]
// let arr = [
//     ['b','b','b','b'],
//     ['b','w','w','b'],
//     ['b','w','w','b'],
//     ['b','b','b','b'],
// ];
// // console.log(arr[1][3]+' [1][3]')
// for(i=0; arr[i] !== undefined; i++){
//     console.log(arr[i][arr[i].length - 2]  +' arr[i] is i  ')

// }

// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString())

// // // // // let arr = [
// // // // //     ['b','b','b','b','b','b'],
// // // // //     ['b','w','w','b','b','b'],
// // // // //     ['b','w','w','b','b','b'],
// // // // //     ['b','b','b','b','b','b'],
// // // // //     ['b','b','b','b','b','b'],
// // // // //     ['b','b','b','b','b','b']

// // // // // ]
// // // // // // for(i=0; i< arr.length; i++){
// // // // // //     console.log(arr[i] +' i ')
// // // // // //     for(j=0; j< arr[i][j].length; j++){
// // // // // //         console.log(arr[j]+' array of arr[i][j]')
// // // // // //     }
// // // // // // }


// // // // // for(i=0; arr[i] !== undefined; i++){
// // // // //     for(j=0;  arr[i][j] !== undefined; j++){
// // // // //         console.log(arr[j]+' array of arr[i][j]')
// // // // //     }
// // // // // }


// // // let arr = [
// // //     ['b','b','b','b','b','b',],
// // //     ['b','b','b','b','b','5'],
// // //     ['b','w','w','b','b','b'],
// // //     ['b','b','b','b','b','b'],
// // //     ['b','b','b','b','b','b'],
// // //     ['b','b','b','b','-2','5']

// // // ]
// // // console.log(arr)
// // // arr.push(['c','c'])
// // // console.log(arr)

// // // // console.log(arr[5][6] +' -2 index ')
// // // // let rows = 0, columns = 0;
// // // // for(r = 0; arr[r] !== undefined; r++){
// // // //     rows ++;
// // // // }
// // // // // columns = arr[0]
// // // // for(c = 0; arr[0][c] !== undefined; c ++){
// // // //     columns ++;
// // // // }
// // // // console.log(`Rows: ${rows}`);
// // // // console.log(`columns: ${columns}`);

// // // // for(i=0; arr[i] !== undefined; i++){
// // // //     // console.log(`I: ${i} and arr[i] ${arr[i]}`)
// // // //     // debugger
// // // //     for(j=0; arr[i][j] !== undefined; j++){
// // // //         // console.log('arr[i][j]: '+arr[i][j])
// // // //         console.log(`(${i} ${j}) Element: ${arr[i][j]}`);
// // // //     }
// // // // }

// // // // // let geek = [];
// // // // // let rows = 5;
// // // // // let columns = 1;
// // // // // for(var i = 0; i < rows; i++){
// // // // //     geek[i] = []
// // // // // }
// // // // // for(i=0; i < rows ; i ++){
// // // // //     for(j=0; j < columns; j++){
// // // // //         geek[i][j]
// // // // // document.write(geek+' \n Array \n ')

// // // // //     }
// // // // // }
// // // // // // console.log(geek);
// // // // let arr = [
// // // //     ['b', 'b'],
// // // //     ['b', 'w'],
// // // // ];

// // // // for (let row = 0; row < arr.length; row++) {
// // // //   for (let col = 0; col < arr[row].length; col++) {
// // // //     const element = arr[row][col];
// // // //     console.log(`Element at position (${row}, ${col}): ${element}`);
    
// // // //     // You can add your operations for each element here
// // // //   }
// // // // }

// // // let arr = [1,2,3,4,5,6]
// // // console.log(arr[6-1]+ ' index - 1')

// // let arr = [
// //     ['b','b','b','b','c',8],
// //     ['b','w','w','b'],
// //     ['b','w','w','b'],
// //     ['b','b','b','b'],
// // ];

// // function getSecondToLastElements(matrix) {
// //     let secondToLastElements = [];

// //     for (let i = 0; i < matrix.length; i++) {
// //         const row = matrix[i];
// //         if (row.length >= 2) {
// //             secondToLastElements.push(row[row.length - 2]);
// //         } else {
// //             secondToLastElements.push(null); // Push null for rows with less than 2 elements
// //         }
// //     }

// //     return secondToLastElements;
// // }

// // const secondToLastElements = getSecondToLastElements(arr);
// // console.log(secondToLastElements); // Output: [ 'b', 'w', 'w', 'b' ]


// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// console.log(arr1);
// let rep = []
// for(i=0; i< arr1.length; i++){
//     if(arr1[i] === arr1[i+1]){
//         rep.push(arr1[i])
//     }
// }
// console.log(rep)
// debugger
let arr = [1, 2, 3, 5, 2, 5, 9, 0, 3];
let repetativeNumbers = {}
for(num of arr ){
    if(repetativeNumbers[num]){
        repetativeNumbers[num] ++;
    }else{
        repetativeNumbers[num] = 1
    }
}
console.log(`Repetative Numbers: ${JSON.stringify(repetativeNumbers)}`);
let rp = []
for(let numbers in repetativeNumbers){
    // console.log(numbers+' numbers in obj ')
    if(repetativeNumbers[numbers] > 1){
        console.log(`break`)
        console.log(repetativeNumbers[numbers] +' rep ');
        // rp.push(parseInt(numbers))
        rp.push(numbers )
    }
}
console.log(rp+' rp ')
// let frequency = {};

// for (let num of arr) {
//     if (frequency[num]) {
//         frequency[num]++;
//     } else {
//         frequency[num] = 1;
//     }
// }
// console.log(frequency)
// let repetitiveNumbers = [];

// for (let num in frequency) {
//     if (frequency[num] > 1) {
//         repetitiveNumbers.push(parseInt(num));    
//     }
// }

// console.log(repetitiveNumbers); // Output: [ 2, 3, 5 ]

// let obj = {}
// obj["name"] = " Mohsin ";
// console.log(JSON.stringify(obj)+' object ')

// const obj = {
//     firstName: "Mohsin",
//     lastName: "Munir",
//     age: 25
// }
// let keys = Object.keys(obj);
// console.log(keys)
// console.log(`Keys: ${keys} and Type Of Keys: ${typeof(keys)}`);
// for(i=0; keys[i] !== undefined; i++){
//     console.log(obj[keys[i]]+ ' keys at i ')
// }
















