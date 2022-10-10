console.log('today we are going to learn about arrays');
let marks=[12,34,56,67,89,99];
const fruits=['apple','banana','mango','pinepal'];
const mixed=['str',89,[3,5]];
const arr= new Array(23,123,44,21,'banana');
console.log(arr);
console.log(mixed);
console.log(fruits[0]);
console.log(arr.length)
console.log(Array.isArray('dddd'));
arr[0]='banana';
let arrelement=arr[0];
console.log('element:',arrelement);
console.log(arr)
console.log(marks);
let value= marks.indexOf(89);
console.log(value);
// mutating or modifing arrays
marks.push(90);
marks.unshift(89);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(2,3);
console.log(marks);
marks.reverse();
console.log(marks);
marks2=[1,2,3,4]
marks=marks.concat(marks2);
console.log(marks);

// objects
let myObj={
    name:'harry',
    dream:'Software Developer',
    marks:[1,2,34,4],
    isActive:true

}
console.log(myObj);
console.log(myObj.marks);
console.log(myObj.isActive);
console.log(myObj['dream']);



