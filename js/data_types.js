/* data types in js
1.Primitive data type:
    a.string: "harry"
    b.numbers: 34
    c.Boolean: True/false
    d.Null:
    e.undefined:
    f.symbol:

2.Reference Data type:
    a.Array
    b.Object Literal
    c.Function
    d.Dates

*/
// primitive type
//string
var nam="harry"
console.log("my name is " + nam);
console.log("dara type is " + typeof(nam));
//number
const a='5'
console.log("data type is " + typeof(a));
//boolean
let isDriver=true;
console.log("data type is " + typeof(isDriver))
//null
let nullVar=null;
console.log("data type is " + typeof(nullVar))//object
//undefined
let undef=undefined;
console.log("data type is " + typeof(undef))

//reference data type
//array
const arra1=[12,13,44,55,66,false,'sashi']
console.log("Arra1: ",arra1,typeof(arra1))
//javascript is a dynamically type language we don't need to tell which type of data is.
//object literals
let marks={
    harry:34,
    shubaham:55,
    sashi:98
}
console.log(marks,typeof(marks))
//function
function findname() {
    
}
console.log(typeof(findname))
//date
let date= new Date();
console.log(typeof(date))
