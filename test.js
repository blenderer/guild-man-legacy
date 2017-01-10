
let RandomCharacter = require('./utilityclasses/RandomCharacter');


let adventurers = [];
for (var i = 0; i < 5; i++) {
  adventurers.push(new RandomCharacter());
}

console.log(adventurers);
