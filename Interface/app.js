function printName(obj) {
    console.log("This person is called\n    ".concat(obj.name, " and he is ").concat(obj.age, " years old"));
}
var person1 = { name: 'Pedro', age: 24 };
printName(person1);
