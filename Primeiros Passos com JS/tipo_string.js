const nome = "Lucas Maheus Gorni da Silva";


 // Acessar Indice da String
console.log(nome.charAt(4))


// Pegar valor do indice na Tabela Asci ou Unicode
console.log(nome.charCodeAt(3))


//Tenho Indice mais nao sei qual e mais quero saber qual seria numero dele
//Usa Esta funcao para String
console.log(nome.indexOf('M'))//Resultado Retornado Sera Indice !

//Fatiamento de String escolhendo indice que comeca eoq termina para visualizar
console.log(nome.substring(0, 5))//Mostra Indice 0 ao 5


//Funcao Concat Alem de Usar + Entre String em JS tem Funcao Concat
console.log('Meu Nome e '.concat(nome).concat(' !'))
//Ou
console.log('Meu Nome e '+nome+' !')


//Funcao Replace para trocar Caracter da String por Outro
console.log(nome.replace(/\w/g,'*'))//Com Regex Trocaria todos os valores
//Sem uso de Regex (Esprecoes Regulares)
console.log(nome.replace('a', 3)) // Troca A por 3

let nome_array = nome.split(' ')//Funcao Split para fazer Array
console.log(nome_array)