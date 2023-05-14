// PI = 3.141592...
// PI * raio * raio;
//toFixed(2) Atribui 2 numeros apos .

let raio = 20;
const pi = 3.141592653589793; // Ou usar Math.PI
let resultado = pi * raio * raio;
console.log("Area...: "+resultado.toFixed(2) + " m2")

console.log("Area...: Math.PI = " + Math.PI * raio * raio + " m2");