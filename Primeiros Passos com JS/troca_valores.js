let a = 10;
let b = 25;

console.log("valor que era letra A "+a)
console.log("valor que era letra B "+b)
console.log("\n")
let recebeValorAnteriorA = a;
a = b;
b = recebeValorAnteriorA ;
console.log("valor que ficou letra A "+a)
console.log("valor que ficou letra A "+b)

// Ou Efetuar Desafio desta maneira

let a1 = 15;
let b1 = 35;

[a1,b1] = [b1,a1]
console.log("\n")
console.log("Valor Atual A1 = " + a1 + " Este era valor de B1 Atualmente")
console.log("Valor Atual B1 = " + b1 + " Este era valor de A1 Atualmente")