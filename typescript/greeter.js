/**
 * Created by liqiang on 2016/9/9.
 */
function greeter(person) {
    return "Hello, " + person;
}
var user = 'li';
greeter(user);
function greet(person) {
    console.log(person.firstName, person.lastName);
}
var pUser = {
    firstName: 'li',
    lastName: 'qiang',
    age: 18
};
greet(pUser);
var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + middleName + lastName;
    }
    return Student;
}());
var cUser = new Student('li', 's', 'qiang');
console.log(cUser);
