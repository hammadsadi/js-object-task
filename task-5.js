// Loop through an object and print the key-value pairs with their
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let item in myObject) {
  console.log(
    "Key:" +
      " " +
      item +
      " " +
      "|" +
      " " +
      "type:" +
      " " +
      typeof myObject[item]
  );
}
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean
