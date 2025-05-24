const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// this is the example of string interpolation

const gameName = new String('hitesh-hc-com')
// constructor method to create a string object


// Important String Method in JS
 const str =  "Krishna Singh"

console.log(str.length) 
// method to get string length

console.log(str[2]) 
// get chat at using index

console.log(str.charAt(2)) 
// method to get char at specific index
 
console.log(str.toLowerCase()) 
// method to convert string to lower case

console.log(str.toUpperCase()) 
// method to convert string to upper case

console.log(str.slice(0, 5)) 
//method to get string from a string

console.log(str.slice(0, -5)) 
// slice can also take negative index as argument

console.log(str.substring(0, 4))
// method to get substring from a string

console.log(str.substring(-3, 4))
// substring method does not take negative index as argument

console.log(str.substring(0, -4))
// negative value then converted to 0

let str2 = "Project Engineer 2"
console.log(str.concat(str2))
// method to concat strings

let str3 = "Mango-Banana-Apple"
console.log(str3.split("-"))
// method to split string into array using delimiter

console.log(str3.includes("Mango"))
// method to check if string contains a substring

console.log(str3.startsWith("Mango"))
// method to check if string starts with a substring

console.log(str3.endsWith("Apple"))
// method to check if string ends with a substring

console.log(str3.indexOf("Banana"))
// method to get index of a substring

console.log(str3.lastIndexOf("Banana"))
// method to get last index of a substring

console.log(str3.search("Banana"))
// method to search for a substring and return its index

console.log(str3.replace("Mango", "Orange"))
// method to replace a substring with another substring

let str4 = "Code smart, think smart, work smart."
console.log(str4.replaceAll("smart", "clever"))
// method to replace all substring with another substring

console.log("01-01-2025".replaceAll("-", "/"))
// replace all dashes with slashes in a date string

let str5 = "   Hello World!   "
console.log(str5.trim())
// method to remove whitespace from both ends of a string

console.log(str5.trimStart())
// method to remove whitespace from the start of a string

console.log(str5.trimEnd())
// method to remove whitespace from the end of a string    

let str6 = "Hello World!"
console.log(str6.padStart(20, "*"))
// method to pad the start of a string with a character until it reaches a certain length   

console.log(str6.padEnd(20, "*"))
// method to pad the end of a string with a character until it reaches a certain length

console.log(str6.startsWith("H"))  
// method to check if string starts with a specific character

console.log(str6.endsWith("!"))
// method to check if string ends with a specific character

console.log(str6.repeat(3))
// method to repeat a string a certain number of times


// Summary = "These below method are important method used to manipulate strings in JavaScript."
// 1. length
// 2. charAt
// 3. toLowerCase
// 4. toUpperCase
// 5. slice
// 6. substring
// 7. concat
// 8. split
// 9. includes
// 10. startsWith
// 11. endsWith
// 12. indexOf
// 13. lastIndexOf
// 14. search
// 15. replace
// 16. replaceAll
// 17. trim
// 18. trimStart
// 19. trimEnd
// 20. padStart
// 21. padEnd
// 22. startsWith
// 23. endsWith
// 24. repeat