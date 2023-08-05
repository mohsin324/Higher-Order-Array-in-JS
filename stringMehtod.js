console.log(`--------Learning String Methods---------`);
let text = "john Doe Doe Doe";
console.log(text)
console.log('----------------before any method----------------');
// ******************* length
// console.log(text.length)


// ******************* escape characters
// text = "We are so called \"Vikings\" from the  \
//  north";
// console.log(text);
// text = `
// hello template literals,
// with new strings
// `
// console.log(text);



// ******************* extracting string parts
// from starting to end but end not included
// it will slice rest of the string
// console.log(text.slice(6))
// console.log(text.slice(-4))

// *** substring
// the only difference between slice and sbustr if value is less than 0 it will treat as 0


// ******************* replace
// let newText = text.replace("Doe", "Johnnnnnnnnnn");
// console.log(newText+' new text ');

// ******************* replace
// let replaceAll = text.replaceAll('Doe', "Jonnnnnnn");
// console.log(replaceAll+' replace all text ');

// ******************** toUpperCase and toLowerCase
// let lower = text.toLocaleLowerCase();
// console.log(lower);
// let upper = text.toUpperCase();
// console.log(upper);


// // try first letter uppercase

// let text = "john Doe Doe Doe";
// let splitText = text.split('');
// let firstLetter = splitText[0].toUpperCase();
// let joinLetter = firstLetter + splitText.slice(1).join('');
// console.log(joinLetter+' first letter upper case ');

// let firstLetter = text.split('')[0].toUpperCase();

// console.log(firstLetter+' first letter of string ');

// best way
/** **********************   Capital first letter of string *********************
 */
// let firstLetter = text.charAt(0).toUpperCase() + text.slice(1);
// console.log(firstLetter)


// const word = "freecodecamp"

// const firstLetter = word.charAt(0)

// const firstLetterCap = firstLetter.toUpperCase()

// const remainingLetters = word.slice(1)

// const capitalizedWord = firstLetterCap + remainingLetters


// **************** trim
// let tString = '    trim this string           ';
// console.log(tString.trimStart()+'trim from starts ');
// console.log(tString.trimEnd()+ ' trim from end');
// console.log(tString.trim());

// // ******************* ChartAt()   and     charCodeAt()
// console.log(text.charAt(0)+ ' char at 0 ');
// console.log(text.charCodeAt(0)+ ' char code at 0 ');
// let arr = ['5', '10'];
// console.log(arr.sort()+ ' sort algorithm ')
// console.log(arr[1].charCodeAt(1)+ ' arr '+ arr[1])
// console.log(arr[0].charCodeAt(0)+ ' arr '+ arr[0])

// let st = text.split(' ');
// console.log(st)
// console.log(st.length);
// console.log('text length '+ text.length)


// *****************O indexOf()
// console.log(text.indexOf('Doe'))
console.log(text.lastIndexOf('Doe'))







