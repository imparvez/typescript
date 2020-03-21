var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
/*
Student {
  firstName: 'Jane',
  middleInitial: 'M.',
  lastName: 'User',
  fullName: 'Jane M. User'
}
*/
document.getElementById('main').innerHTML = greeter(user); // Hello, Jane User
