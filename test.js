console.log("Hello World");
function addition(value) {
    console.log("Value is: " + value);
}
var firstVal = 42;
var secondVal = 1;
var sumOfVals = (firstVal + secondVal).toLocaleString();
addition(sumOfVals);
// five primtive types
var str = 'hello'; // string
var numb = 27; // number
var flag = true; // boolean
console.log("Value assfined  to flag is : " + flag);
console.log(str);
console.log("My favouritre number is " + numb);
// Array
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log("The value of my item " + (i + 1) + "is" + myArray[i]);
}
var myArray2 = [1, 2, 3];
myArray2.forEach(function (item) {
    console.log("the value is" + item);
});
// any
var unKnown = "Whatever we want";
console.log("the value is uknown" + unKnown);
// Function 
function myFun(x) {
    return 5;
}
// a.
function count_with_spaces(value) {
    return value.length;
}
var count = count_with_spaces("test1");
console.log(count);
//b.
function count_without_spaces(value) {
    return value.replace("", "").length;
    console.log(count_without_spaces(" test 1 "));
}
