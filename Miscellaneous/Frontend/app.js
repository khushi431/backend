// const stu1 = {
//     name: "khushi",
//     age: 20,
//     marks: 95,
//     getMarks: function() {
//         return this.marks;
//     }
// };
// const stu2 = {
//     name: "tej",
//     age: 20,
//     marks: 98,
//     getMarks: function() {
//         return this.marks;
//     }
// };
// const stu3 = {
//     name: "karish",
//     age: 30,
//     marks: 97,
//     getMarks: function() {
//         return this.marks;
//     }
// };
// const stu4 = {
//     name: "aman",
//     age: 21,
//     marks: 99,
//     getMarks: function() {
//         return this.marks;
//     } 
// };

//Factory Functions -->
// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`hi! my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// let stu1 = PersonMaker("khushi", 20);
// let stu2 = PersonMaker("tej", 20); 

//New operator(constructors)- dosen't return anything & start with capital -->
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function () {
//     console.log(`hi , my name is ${this.name}`);
// };
// let p1 = new Person("khushi", 20);
// let p2 = new Person("tej", 20);



//using classes
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }
// let p1 = new Person("khushi", 20);  //objects
// let p2 = new Person("tej", 20);


//using inhritance
class Person {
    constructor(name, age) {
        console.log("person class const")
        this.name = name;
        this.age = age;

    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, age, marks) {
        console.log("student class const")
        super(name, age);  // super keyword is used to call pareent class constructor 
        this.marks = marks;
    }
}
let s1 = new Person("khushi", 20, 98);  //objects

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);  // super keyword is used to call pareent class constructor 
        this.subject = subject;
    }
}


