function newFunction(name1, age1, country1){

    let name = name1 || 'Daniel';
    let age = age1 || 20;
    let country = country1 || 'COL';

    console.log(name, age, country)

}

// es6
console.group("Clase 1");

function newFunction2(name = 'Daniel', age = '20', country = 'COL'){

    console.log(name, age, country)

}

newFunction2();
newFunction2('Juancho', 18, 'CO');

let hello = 'Hello';
let world = 'world';

let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

console.groupEnd();

console.group('Clase 2');

let lorem = "frase epica uno \n" 
+ "otra frase epica";
console.log(lorem);

console.log('');

// es6
let lorem2 = `Otra frase epica
que necesitamos`;

console.log(lorem2);

console.log('');
console.log('');

let person = {

    name: 'Daniel',
    age: 20,
    country: 'Colombia'

}

console.log(person.name, person.age, person.country);

console.log('');

//es6

let {name, age, country} = person;

console.log(name);

console.log('');

console.log('');

let team1 = ['Henry', 'Sergio', 'Sharon']
let team2 = ['Natalia', 'Isabella', 'Juancho']

let education = ['David', ...team1, ...team2]

console.log(education);

console.log('');

console.log('');

{

    var globalvar = 'Global Var';

}

{

    let globalLet = 'Global let';

}
console.log(globalvar);
/* console.log(globalLet); */

console.log('');

console.log('');

const A = 'b';

/* A = 'a'; */

console.log(A);

console.log('');

console.groupEnd();

console.group('Clase 3');

let name1 = 'Oscar';
let age1 = 20;

// es5
obj = {

    name: name1,
    age: age1

};

// es6

obj2 = {

    name1,
    age1

}

// Arrow functions

const names =[

    {name: 'Daniel', age: 20},
    {name: 'Saidy', age: 40}

]

//es5
let listOfNames = names.map(function (item){

    console.log(item.name);

});

//es6
let listOfNames2 = names.map(item => console.log(item.name));


//promise 

const helloPromise = () =>{

    return new Promise((resolve, reject) => {

        if (true){

            resolve('Hey!');

        } else {

            reject('Ups!!')

        }

    });

};

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));

console.groupEnd();

console.group('Clase 4')

class calculator {

    constructor(){

        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){

        this.valueA = valueA;
        this.valueB = valueB;

        return (this.valueA + this.valueB);
    }
}

const calc = new calculator();

console.log(calc.sum(20, 30));

/* import { hello } from './module.js';

hello(); */

function* helloWorld(){

    if (true){

        yield 'Hello, ';

    }
    
    if (true){

        yield 'World.';

    }

};

const generator = helloWorld();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value); 


console.groupEnd();

console.group('Clase 5')

// es7

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if (numbers.includes(7)){

    console.log('Si se encuentra el valor 7')

} else {

    console.log('No se encuentra el valor 7')

}

let base = 4;
let exponent = 4 ;
let result = base ** exponent; 

console.log(result);

console.groupEnd();

console.group('Clase 6');

// es8

const data = {

    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana'

}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values1 = Object.values(data);
console.log(values1);
console.log(values1.length);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' --------'));
console.log(string.padEnd((string.length + 5), ' ----'));

/* const holamundo = () => {

    return new Promise((resolve, reject) =>{

        (false)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('Test Error'))

    }); 

};

const helloAsync = async () => {

    const hello = await holamundo();

    console.log(hello);

};

helloAsync();

const anotherFunction = async () => {

    try {

        let hello2 = await holamundo();
        console.log(hello2)

    } catch {error} {

        console.log(error);

    }

}

anotherFunction(); */


console.groupEnd();

console.group('Clase 7');

// es9 

const obj50 = {

    name50: 'Daniel',
    age50: 32,
    country50: 'COL',

};

let {...all} = obj50;

console.log(all);

const obj51 = {

    ...obj50,
    lindo: false,

};

console.log(obj51);

const holamundo2 = () => {

    return new Promise((resolve, reject) => {

        (true)
            ? setTimeout(() => resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))

    });

};

holamundo2()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


const regexData = /([0 - 9]{4})-([0 - 9]{2})-([0 - 9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(day, month, year);



console.groupEnd();

console.group('Clase 8');

console.groupEnd();

console.group('Clase 9');

console.groupEnd();

console.group('Clase 10');

console.groupEnd();

console.group('Clase 11');

console.groupEnd();
