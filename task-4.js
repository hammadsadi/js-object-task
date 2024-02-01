// Count the number of properties.
let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

let count = 0;
for (let item in student) {
  count += 1;
}
console.log(count);
