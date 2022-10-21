// constructor function
function studentClass(n, a) {
    this.name = n;
    this.age = a;
    // i need to add a new property here
    // this.year = '1st year'
}
//studentClass.year = '1st year'; // it gives undefined
// or 
// constructor with class
// class studentClass {
//     constructor(n, a) {
//         this.name = n;
//         this.age = a;
//     }
// }
// if we miss any properties in declaration, we can use a prototype object we can declare
const s1 = new studentClass('santhoshkumar', 24);
const s2 = new studentClass('sandy', 27);
// for prototype purpose
// default every function has prototype object so that we give new properties and method
// we can give us a value or a function 
// studentClass.prototype.year = '1st year';
studentClass.prototype.year = function() { // its a anonoyms function
    return '1st year'
};

// console.log(s1.year);
console.log(s1.year());
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#:~:text=Every%20object%20in%20JavaScript%20has,null%20for%20its%20own%20prototype.