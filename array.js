console.log(`--------Learning Higher Order Array Methods---------`);
///////////////////////////////////////////////      array 
// const cars = ["Saab", "Volvo", "BMW"];
// console.log('before sorting');
// console.log(cars);
// console.log('after sorting');
// console.log(cars.sort())

// const alphabets = ['x', 'a', 'c', ' b', 'n']
// console.log('before sorting');
// console.log(alphabets.toString().trim());
// console.log('after sorting');
// console.log(alphabets.sort());

// const cars = new Array("Saab", "Volvo", "BMW");
// console.log(cars)
// cars[0] = "MG"
// console.log(cars.toString())

// const person = ["John", "Doe", 69];
// console.log(person.toString())


// const point = [40];
// console.log(point)

// ///////////////////////////////////////////  array method

const fruits = ["Banana", "Orange", "Apple", "Mango", "Watermelon", "Apricot"];
console.log(fruits);
console.log(`-----------------------Before any Method-----------------------`);
// ******************* length
// console.log(fruits.length);
// fruits[0] = "Kiwi";
// fruits[fruits.length] = "kiwi"
// console.log(fruits)

// ******************* string
// console.log(fruits.toString());
// let str = fruits.toString()
// console.log(str.slice(0, 5)+ ' str slice ')

// ********************  join
// ***** it return string but with join function *
// let join = fruits.join("*");
// console.log(join)

// ********************  popping and push
// **** pop remove the last element
// console.log(fruits.pop());       return the pop element 
// fruits.pop();
// console.log(fruits,  ' pop element')
// ***** push add element in the last of array
// fruits.push("Nuts");
// console.log(fruits+ ' push element ')


// ********************  shifting 
// **** shift will remove first element from array
// fruits.shift()
// console.log(fruits)

// ********************  unshift 
// **** it will add element at start of array and return new array length
// fruits.unshift("Lemon");
// console.log(fruits)

// ********************  delete
// delete fruits[0]; // it will index from array
// console.log(fruits, ' after delete')
 

// ********************  splice 
// fruits.splice(2, 0, "Array-Lemon", "Array-kiwi");
// console.log(fruits)

// ********************  slice
// const citrus = fruits.slice(1, 3) 
// console.log(citrus)


/**
 * slice splice
 * toString
 * delete           delete myArray[1]  and at delete index it marks undefined
 * shift unshift
 * push pop
 * join        myArray.join("*")
 * length
 * concat   will concat first array to another arry like myArray1.concat(myArray2) 
 * flat  [[1,2], [2,3]] return [1,2,2,3]    myArr.flat()
 */
