/*
Trocar Valor de uma string para numeros ou fazer enchergar a string como um valor int JS
*/


let idade = Number('2.0'); //Variavel assim e tipo Number e Int se for valor quebrado ja nao seria Int mais continua sendo Number
let idade_num = 20;

console.log(Number.isInteger(idade_num)); //Checar se e numero INT
console.log(typeof idade_num); // Checar valor desta variavel

console.log(Number.isInteger(idade)); //Checar se e numero INT
console.log(typeof idade); // Checar valor desta variavel


const prova1Bim = 10;
const prova2Bim = 5;

//Operacao Aritimetica
const total = prova1Bim * idade + prova2Bim + idade_num;
const mediaFinal = total / (idade + idade_num);

console.log(mediaFinal.toFixed(2)); // 2 Casas Decimais
console.log(mediaFinal.toString()); // Retorna valor Normal, string //caso quiser ele em binario apenas passar parametro 2 dentro dos ()