//How to compare two JSON have the same properties without order?
//var obj1 = {name:"person1",age:5};
//var obj2 = {age:5,name:"person1"}; 

var obj1 = {name:"person1",age:5};
var obj2 = {age:5,name:"person1"};
var b = JSON.stringify(obj1) === JSON.stringify(obj2)
console.log(b)

// This JSON stringify will make the object into JSON string. 
// So, by using this method and === of both the obj 1, obj2 . I can check the value in the object.
// I also tried _.isEqual()but this method is used in nodejs. So, i can't use it in here.


//OUTPUT
//false