/*
type conversion and coercion: converting one data type into another data type.
Type conversion in js can be done by:
1. Converting Strings to Numbers: using global method Number()
2. Converting Numbers to Strings:using global method String()
3. Converting Dates to Numbers:using global method Number()
4. Converting Numbers to Dates:using global method Dates()
5. Converting Booleans to Numbers:using global method Number()
6. Converting Numbers to Booleans:using global method Boolean()
Number:
    parseFloat():	Parses a string and returns a floating point number
    parseInt():Parses a string and returns an integer
*/
// Integer to String
console.log("welcome to Javascript");
let myVar;
myVar=String(34);
console.log(myVar,(typeof myVar))

//boolean to string
let booleanVar=String(true);
console.log(booleanVar,(typeof booleanVar))

//date to string
let date=String(new Date());
console.log(date,(typeof date))
//array to string 
 let arra1=String([12,13,14,16])
 console.log(arra1.length,(typeof arra1))

//tostring()
let i=78
console.log(i.toString())

let stri=Number("34636")
stri=Number("346f36")
stri=Number(false)
console.log(stri,(typeof stri))

//Type coercision
let myStr=Number("345")
let myNum=34
console.log(myStr + myNum   )

