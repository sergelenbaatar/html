//ex1
const a = [1,2,3,4]
const result = a.map(num => num*2)
console.log(result);

//ex2
const birthYear = [1994, 1997, 2003, 1993, 2001] 
const age = birthYear.map((Years)=> 2025-Years);
console.log(age);


//ex3
const people = [
    {id: 1, name: "DORJ", age: 19},
    {id: 2, name: "BOLD", age: 13},
    {id: 3, name: "BAT", age: 15},
    {id: 4, name: "TURUU", age: 20},
    {id: 15, name: "SUMBEE", age: 23}
    ];

const adults = people.filter(person => person.age >=18);
console.log(adults);

const adultNames = people
    .filter(person => person.age >= 18)
    .map(person => person.name[0]+ person.name.slice(1).toLowerCase());

console.log(adultNames);

//ex4

const users = [
    { id: 11, name: "bat", age: 23, group: "editor" },
    { id: 47, name: "sukhee", age: 28, group: "admin" },
    { id: 75, name: "bymbaa", age: 34, group: "editor" },
    { id: 33, name: "bandia", age: 19, group: "admin" },
    { id: 45, name: "tumee", age: 27, group: "editor" },
  ];

  const upperLetter = users.map((user) =>
  {
    return user.name[0].toUpperCase() + user.name.slice(1);
  });
  console.log(upperLetter);

  //ex5
  const employees = [
    { id: 11, name: 'Bat', age: 23, group: 'editor' },
    { id: 47, name: 'Bold', age: 28, group: 'admin' },
    { id: 85, name: 'Tulga', age: 34, group: 'editor' },
    { id: 97, name: 'Suren', age: 28, group: 'admin' }
    ];

const admin = employees
.filter(employ => employ.group === "admin")
.map(employ => employ.name);

console.log(admin);

//ex6

const students = [
    { name: "Anu", grade: 85 },
    { name: "Bold", grade: 92 },
    { name: "Tuvshin", grade: 78 },
    { name: "Naraa", grade: 88 },
    { name: "Solongo", grade: 95 }
  ];

const topStudents = [];
students.forEach(student=>{
    if(student.grade>90){
        topStudents.push(student)
    }
});

const increase = students.sort((a,b) => b.grade-a.grade);
console.log(increase);

const maxGrade = Math.max(...students.map(student => student.grade));
const highestStudent = students.find(student=> student.grade === maxGrade);
console.log(highestStudent);

document.getElementById

const human = {
    name: "Bold",
    age: 40,
    major : "teacher",


}

console.log(human);

const book = new Object();
book.author = "Duncan";
book.title = "1984";
book.year = 1949;


console.log(book);

const person1 =  {
 name: "Boldoo",
 age: 33,
 isStudent: true,
}

person1.salary = 100000;
person1["occupation"]= "developer";
console.log(person1);
console.log(person1["name"]);

const worker = {
    city:{
        district: "bayanzurh",
        apartment:99,
        orts:{
        davhar: 7,
        haalga: "hamaagui"
        },
    },
    age: 33,
    name: "Bataa",
    salary: 100000,
}
const tomHaalga = worker.city.orts.haalga[2].toUpperCase();

console.log(tomHaalga);

const calc = {
    ad : function (a,b){
    return a+b;
    },
    substract: function (a,b){
        return  a-b;
    },

};

console.log(calc.ad(5,4));

const target = { a:1, b:2, c:3};
const source = { a:1, b:3, c:4, d:5};
const mix = Object.assign(source,target);

console.log(target);
console.log(mix);


const frozenObject = {name:"Bat", age:30,};
Object.freeze(frozenObject.name);
frozenObject.name ="Dorj";
frozenObject.age = 40;
console.log(frozenObject);

const car = {
    brand: "honda",
    model: "civic",
    year: 1990,
}
console.log(car);

const person = {
    firstName: "Dorj",
    lastname: "Bat",
    age: 55,
}

delete person.age
console.log(person);
person.city = "UB";
person.position = "Nalaih";
person.isMarried = true;

console.log(person);

function getFullName(){
    return person.firstName +" "+person.lastname;
}

console.log(getFullName());

const movie ={
    title: "Avatar",
    director: "John",
    year: 2010,
    genre: "drama",
}

function getKeysAndvalues(){
    return Object.entries(movie);
}
console.log(getKeysAndvalues());

const address = {
    street:13,
    city:"ulaanbaatar",
    zipCode: 1600,
};
const student = {
    name: "Boldoo",
    age: 18,
    getFullAddress(){
        return address;
    }
};
student.address=address;

console.log(student.getFullAddress());

const user = {
    name: "Uyanga",
    age: 30,
    greet(){
        return `Sainuu ${this.name}`
    },
    updateName(newName) {
        this.name = newName;
    }
}
user.updateName("Tuvshuu");
console.log(user.greet());

const book1 = {
    title: "uchirtai gurvan tolgoi",
    author: "lodoidamba",
    year: 1930,
}

const book2 = {
    author: "natsagdorj",
    description: "mongoliin tuuh",
    category: "history",
    year: 2000,
}

const mergeBooks = Object.assign(book1, book2);

console.log(mergeBooks);

const studentz = {
    1: {name: "Bolor", grade:95 },
    2: {name:"Anu", grade: 87},
    3: {name:"Temuujin", grade: 78},
    4: {name:"Delger", grade: 83},
    5: {name:"Zolzaya", grade: 92},
};

calculateAverage() {
    
}