//Objetos de forma geral sao Chaves e valores

//Criando Objeto vazio e atribuindo ele os atrributos
const produto_inicial = {}
produto_inicial.modelos_celulares = 'Categroria Celulares'
produto_inicial.modelo = {
    modelo_1: 'Iphone 10',
    modelo_2: 'Iphone 12',
    preco_modelo_1: 4900.00,
    preco_modelo_2: 3250.99
}

console.log(produto_inicial)

//Criando Direto Objeto sem atribuilo depois

const produto_inicial_2 = {
    categorias_1: 'Roupas',
    categorias_2: 'Casa',
    categorias_3: 'Celulares',
    roupas:{
        tamanhos_camisetas_1: 'G',
        tamanhos_camisetas_2: 'GG',
        tamanhos_camisetas_3: 'XG',
    
    casa:{
        tamanhos_camisetas_1: 'Lencol',
        tamanhos_camisetas_2: 'Cama',
        tamanhos_camisetas_3: 'Guarda',    
        
    celular:{
        modelo_1: 'Iphone 10 256GB',
        modelo_2: 'Galaxy Sansung 10',
        modelo_3: 'Xiaomi Redmi Note 10',
        preco_modelo_1: 4700.99,
        preco_modelo_2: 3900.99,
        preco_modelo_3: 1700.90,

        }//Celular
    } //Casa
}//Roupa
}
produto_inicial_2.promocao = 'Celulares a 20% Desconto'
console.log(produto_inicial_2)


//Modelo de Json
let modelo_jason = '{"nome": "LUCAS", "sobre_nome": "MATHEUS", "idade": 25}'
console.log(typeof modelo_jason)

//Depois de Formatado ficaria assim JSON
/*
{
	"nome": "LUCAS",
	"sobre_nome": "MATHEUS",
	"idade": 25
}
*/