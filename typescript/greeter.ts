/**
 * Created by liqiang on 2016/9/9.
 */
function greeter(person:string) {
    return "Hello, " + person;
}

var user = 'li';

greeter(user);


interface Person{
    firstName:string,
    lastName:string
}

function greet(person:Person){
    console.log(person.firstName,person.lastName)
}

var pUser={
    firstName:'li',
    lastName:'qiang',
    age:18
}
greet(pUser)


class Student{
    fullName:string;
    constructor(public firstName,public middleName,public lastName){
        this.fullName=firstName+middleName+lastName;
    }
}

var cUser=new Student('li','s','qiang');
console.log(cUser)