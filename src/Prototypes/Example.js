const obj1 = {
  firstName: "John"
};

// const obj2 = {
//   lastName: 'Doe'
// }
// console.log(obj2.lastName);
// console.log(obj2.__proto__);

// obj2.__proto__ = null;

// Same as above
const obj2 = Object.create(obj1, {
  lastName: { value: "Doe" }
});
// console.log(obj2.__proto__);

console.log(obj2.firstName);
