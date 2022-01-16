function newFunction(name1, age1, country1){

    let name = name1 || 'Daniel';
    let age = age1 || 20;
    let country = country1 || 'COL';

    console.log(name, age, country)

}

// es6

function newFunction2(name = 'Daniel', age = '20', country = 'COL'){

    console.log(name, age, country)

}

newFunction2();
newFunction2('Juancho', 18, 'CO');

let hello = 'Hello';
let world = 'world';

let epicPhrase = `${hello} ${world}`;

console.log(epicPhrase);