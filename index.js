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
const s1 = new studentClass('santhoshkumar', 24);
const s2 = new studentClass('sandy', 27);
// for prototype purpose
// default every function has prototype object so that we give new properties and method
// we can give us a value or a function 
// studentClass.prototype.year = '1st year';
studentClass.prototype.year = function() {
    return '1st year'
};

// console.log(s1.year);
console.log(s1.year());