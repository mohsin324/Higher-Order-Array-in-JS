console.log(`---------Starts Learning Function's and Methods in JS---------`);
// crate function
// function fullName(){
//     return "Mohsin Munir"
// }
// console.log(fullName());

// function expression
// const x = function (a,b) { return a * b};
// console.log(x(2,3));


// // arrow function
// const arrow = (a,b) => { return a - b };
// console.log(arrow(2,3));


// Hoisting in js, JS only hoists declaration, not initialization

// x = 7;
// console.log(`X: ${x}`);
// var x
// let and const can't are hoisting too but not initialized
// variable can't be used until it declared 

// console.log('X: ', x); = = = = = >   this will return undefined because Hoisting only allow declaration not initialization's 
// var x = 7; = = == ==== = = = = =>


// function Hoisting
// console.log(myFunction(9))
// myFunction(5);
// function myFunction(a){
//     return a
// }
// console.log(typeof(myFunction)+' type of function ')

//  ===   = = = = == = = = = = = == = = = == Function Parameters
// function functionName(parameter1, parameter2, parameter3){
//     code to be execute
// }


// function myFunction(){
//     return this;  // it will return window object
// }
// console.log(myFunction())



// it will return firstName, lastName and getName as function
// const myObj = {
//     firstName: "Mohsin",
//     lastName: "Munir",
//     getName: function (){
//         return this
//     }
// }
// console.log(myObj.getName())


// = = == = = == = ==  = = = = = Call 
// // call help us to write method into another object
// const myObj = {
//     firstName: "Mohsin",
//     lastName: "Munir",
//     getName: function (){
//         return this.name
//     }
// }
// let firstName ={
//     name: "mohsin"
// }
// let name = myObj.getName.call(firstName);
// console.log('Name: '+ name )


// both apply and call methods are the same, the only difference is 
// call takes argument separately while apply takes arguments in array 
// = = = == = = = = = = = = =  = = Apply



// = = = = == = = = == = = = = = =   Bind
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function (){
//         return this.firstName+' ' + this.lastName
//     }
// }
// const member = {
//     firstName: "Hege",
//     lastName: "Nilsen"
// }
// let fullName = person.fullName.bind(member);
// console.log(fullName(), ' full name ')

// function counter(){
//     let count = 0;
//     return count ++;
// }
// console.log(counter());
// console.log(counter()+' 1')
// console.log(counter()+' 2')
// console.log(counter()+' 3')


function hello1 (){
    // return "Mohsin Munir"
    // let another = () => {
    //     console.log('anohter functino ')
    // }
    return "another"
}
let c = hello1;
c()
console.log(c()+' : c ')






