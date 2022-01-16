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

A = 'a';

console.log(A);

console.log('');




console.groupEnd();

console.group('Clase 3');

console.groupEnd();