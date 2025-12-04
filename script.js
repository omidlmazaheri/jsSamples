function multiple(a, b = 3, c = 2) {
    return a * b * c;
}

console.log(multiple(10, 5));
console.log(multiple(10));
console.log(multiple(2, 3, 4));

// classic function
// function sum(a, b) {
//     return a + b;
// }



// arrow
const sum = (a, b) => a + b;
console.log(sum(10, 2));



const numbers = [1, 2, 3, 4];
const squares = numbers.map(n => n * n);
console.log(squares);


 const names = ["omid", "ahmad"];
  names.forEach(name =>console.log(name));


  const person = [{
  name: "Omid",
  age: 30,
  job: "Programmer",
  MaritalStatus: true
},
{
    name:"ahmad",
    age:20,
    job: "Graphic Desiner",
      MaritalStatus: false

}
];
 

for (let key in person) {
  console.log(key + ":", person[key]);
}



function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4)); // 10