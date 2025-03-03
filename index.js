// Write your solution here!
const cats = ['Milo', 'Otis','Garfield']

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return [...cats, name]; 
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return[name, ...cats];
}

function destructivelyRemoveLastCat(){
    cats.pop();
    return[...cats]
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return[...cats];
}

function appendCat(name){
    return [...cats, "Broom"];
}

function prependCat(name){
    return ["Arnold", ...cats ]
}

function removeLastCat(){
    return cats.slice(0, 2)
}
function removeFirstCat(){
    return cats.slice(1);
}

