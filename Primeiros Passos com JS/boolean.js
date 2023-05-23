let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//Fizer Negacao duas vezes !! valor 1 Se torna True
//Se usar Apenas ! 1 negacao vai ser False
isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos....')
console.log(!!0)
console.log(!!'')//Usado para logica, se ten akgi True se nao False
console.log(!!null)//Nulo Vazio
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!(isAtivo = 0))


//Operador Logico || (ou) se tiver um Verdadeiro e True
console.log(!!('' || null || 0 || ' '))//Conversao para Boolean

//Operador Logico && (E) se tiver todos True resposta e True
console.log(!!(' ' && 1 && 1 && ' '))

console.log(!(' ' && 1 && 1 && ' '))//Inverte toda Operacao para FALSE usando NOT (!)

//teste Logico com operador

let nome_pessoa = 'Lucas';
console.log(nome_pessoa || 'Desconhecido')//nao tiver nome exibe Desconhecido