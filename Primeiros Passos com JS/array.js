const valor = [8.8, 5.7, 9.0, 4.2]
//acessando indice do array
console.log(valor[0], valor[3])

//Verificar tamanho de um array usando lenght
console.log(valor.length)

//Adicionando elemento ao Array com PUSH
valor.push({id:17},1.1, false, null, 'nome')
console.log(valor)

//QUEIMA ULTIMO ELEMENTO DO ARRAY
console.log(valor.pop())


//DELETA ELEMENTO ESCOLHIDO DO ARRAY
delete valor[2]//DELETE FUNCIONA PARA TIRAR ATRIBUTO DE OBJETO
console.log('\n'+valor+'\n')

//ADICIONAR ELEMENTO AO ARRAY COM SPLICE
valor.splice(2,2, 'Lucas', 4.2, 22.5)//Escolha Indice que da onde ira comecar a adionar os elementos do array


console.log(valor)
//VERIFICA TIPO DO ARRAY
console.log(typeof valor)
