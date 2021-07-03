// How do you count a number of vowels and consonants in a given string?

// var str = "BCDFGHMM";

// var countVowels = 0;
// var countConsonents = 0;

// for(var i=0; i<str.length; i++) {
//     if(str.charCodeAt(i).toLowerCase() === "a" || str.charAt(i).toLowerCase() === "e" || str.charAt(i).toLowerCase() === "i" || str.charAt(i).toLowerCase() === "o" || str.charAt(i).toLowerCase() === "u") {
//         countVowels++;
//     } else {
//         countConsonents++;
//     }
// }

// console.log("Consonant Count -> " + countConsonents)
// console.log("Vowel Count -> " + countVowels)



// How do you reverse words in a given sentence without using any in-built method?

// "Hello World"
// "World Hello"

// "JavaScript is Awesome"
// "Awesome is JavaScript"

// var str = "our solar system has nine planets";
// var splitStr = str.split(" "); //["our", "solar", "system", "has", "nine", "planets"]

// // for(var i=0; i<splitStr.length/2; i++) { //10 iterations to 20 words
// //     var temp = splitStr[i];
// //     splitStr[i] = splitStr[splitStr.length - i - 1];
// //     splitStr[splitStr.length - i - 1] = temp;
// // }

// var result = "";
// for(var i=splitStr.length-1; i>=0; i--) { //20 iterations for 20 words
//     result = result.concat(" ", splitStr[i]);
// }

// console.log(result);



// How do you find all pairs of an integer array whose sum is equal to a given number?

// var mArr = [1, 2, 3, 4, 5, 6, 7, 0, -2, -3, -8];
// var sumVal = 6;

// // (2, 3)
// // (3, 2)

// [1, 2, 3, 4, 5, 6, 7, 0, -2, -3, -8]
// [1, 2, 3, 4, 5, 6, 7, 0, -2, -3, -8]


// var result = [];
// for(var i=0; i<mArr.length; i++) {
//     for(var j=0; j<mArr.length; j++) {
//         if((mArr[i] + mArr[j]) === sumVal) {
//             result.push([mArr[i] , mArr[j] ]);
//         }
//     }
// }

// console.log(result);




// How do you find duplicate numbers in an array if it contains multiple duplicates?


var mArr = [10, 10, 20, 20, 20, 30, 30, 30, 30, 40, 50, 60, 70];

var result = {}
for(var i=0; i<mArr.length; i++) {
    if(result[mArr[i]] !== undefined) {
        result[mArr[i]] = result[mArr[i]] + 1;
    } else {
        if(mArr.indexOf(mArr[i], (i+1)) >= 0) {
            result[mArr[i]] = 1;
        }
    }
}

// var keyArr = Object.keys(result);
// for(var i=0; i<keyArr.length; i++) {
//     if(result[keyArr[i]] === 1) {
//         delete result[keyArr[i]];
//     }
// }

console.log(result);