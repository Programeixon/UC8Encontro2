let readlineSync = require('readline-sync');
let nomePeca = [];
let pesoPeca = [];
let capacidade = 3;

for (let index = 0; index < capacidade; index++) {
    nomePeca[index] = readlineSync.question("Digite o nome da peça "+(index+1)+": ");
    pesoPeca[index] = readlineSync.question("Digite o peso da peça "+(index+1)+" (Gramas): ");
}

for(let index = 0; index < capacidade; index++) {
   console.log("A peça "+nomePeca[index]+" tem o peso de "+pesoPeca[index]+" gramas");
    
}
