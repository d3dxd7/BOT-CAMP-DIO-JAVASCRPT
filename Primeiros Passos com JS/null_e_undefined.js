//Variavel nao Inicializada
let valor_reais //Undefined , sem ocupacao na memoria ou sem reserva na memoria
console.log(valor_reais)

//Setando Null, a variavel que esta undefined
valor_reais = null //Variavel Reservada, Iniciada porem com valor(VAZIO)
console.log(valor_reais)
//toda variavel com valor null nao tem como tar acessando os atributos, exemplo de um erro!!
//console.log(valor_reais.toString())//Erro Gerado Console -- TypeError: Cannot read properties of null (reading 'toString')


//Maneiras de eliminar o Undefined de forma correta

const produto = {}
console.log('produto nome = '+produto.nome) // Result Undefine (Nao Declarada)
produto.nome = 'Aparelho de Barbear'
console.log(produto.nome)

produto.nome = undefined //Nao Usar por boas praticas deixar que a linguagem usem Udefined ou nao!
delete produto.nome // Eliminando o Udefined da Variavel
console.log("DELETANDO VALOR "+produto.nome)

/*Melhor maneira como exemplo de usar Variavel, Exemplo de um site que queira deixar valor Vazio em Branco usar NULL
E-BOOK que queira deixar Gratuito ou algo assim Definir como -1 ou mais recomendado usar o NULL!
*/
produto.nome = null
console.log("ATRIBUINDO VALOR NULL (VAZIO) "+produto.nome)// Result Null (Declara porem Vazia)

//verificando valor bool desta variavel null

console.log(!!produto.nome) // Valores Null sempre dara False em bool
console.log(produto)
console.log(!produto.nome) // Valor Invertido, Operador NOT
