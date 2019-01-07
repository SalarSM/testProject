let person = {
    name : "Salar",
    family : "ESM",
    pro: () => {
        doing();
    },
    age: (n) => {
        let y = new Date().getFullYear();
        return ( y - n);  
    }
}
function doing() {
    console.log("I'm coding!");
}

// console.log(person.age());
// person.pro();
/////////proxy example:

let proxyPerson = new Proxy(person, {
    get(target, property) {
        if (property == "age")
            return `age: ${target[property]()}`;
        else
            return target[property];
    },
    set(target, property, value) {
        if (property == "family") {
            return (console.log("not allowed to set family"));
        } else {
            return target[property] = value;
        }
    }
});

// console.log(proxyPerson.age);
// proxyPerson.family = "Mehr";
// console.log(proxyPerson.family);
// proxyPerson.name = "Nima";
// console.log(proxyPerson.name);

// function createNewPerson(name) {
//     var obj = {};
//     obj.name =  name;
//     obj.greeting = function () {
//         alert('Hi! I\'m ' + obj.name + '.');
//     };
//     return obj;
// }
// console.log(createNewPerson("ali").name);
// var salar = createNewPerson("Salar");
// salar.greeting();

person.age = new Proxy(person.age, {
    apply(target, context, args) {
        if (context !== person) {
            return (console.log("nobody can use person!"));
        } else
            return target.apply(context, args);
    }    
});

let person2 = {
    name: "Hamid"
};
person2.age = person.age;
console.log(person.age(1990));;
person2.age(2000);
console.log(person2.age);