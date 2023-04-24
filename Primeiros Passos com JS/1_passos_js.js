/*
Primeiros Passos usando Java Script
Desafios Botcamp Microsoft Dynamics 365 - DIO
*/


/*
1° Desafio Calcular Quantidade de Combustivel que Irei gastar ate determinado Destido
1- Valor Combustivel
2- Consumo Veiculo
3- Distancia em Km vou percorrer
4- Qual valor gasto em Dinheiro com Combustivel na viagem
*/



const valor_combustivel = 5.60; // Valor Combustivel Gasolina como Exemplo
const consumo_veio_km = 15; //KM LITRO
const distancia_sao_paulo_x_sales_sp = 400; //km 

let quantidade_litros = distancia_sao_paulo_x_sales_sp / consumo_veio_km;
let valor_gasto_de_combustivel = valor_combustivel * quantidade_litros;
console.log('=======================================================');
console.log('=====================Desafio N° 1======================');
console.log('=======================================================');
console.log('\nQuantidade de Litros Gasto neste Percurso foi de '+quantidade_litros.toFixed(2)+'Litros\n'); 
console.log('Quantidade de valor Gasto nesta Viagem foi de '+valor_gasto_de_combustivel.toFixed(2)+'R$')
console.log('\n');



/*
2° Desafio Calcular Quantidade de Combustivel que Irei gastar ate determinado Destido Porem variando Combustivel usando IF , ELSE
1- Valor Combustivel
2- Consumo Veiculo
3- Distancia em Km vou percorrer
4- Qual valor gasto em Dinheiro com Combustivel na viagem
5- Variavel com Etanol e Gasolina Verifica qual combustivel foi usado para viagem
*/

const combustivel = '2' // Calcula se Tiver Etanol ou Gasolina ou 1 para Gasolina ou 2 para Etanol Exemplo: const combustivel = 'Etanol' 
const valor_etanol = 4.25;
const valor_gasolina = 5.60;
const consumo_veiculo_no_etanol = 8; //KM LITROS
const consumo_veiculo_na_gasolina = 12; // KM LITROS
const sales_x_sao_paulo = 450; //KM CIDADE X , CIDADE Y

//Etanol
let quantidade_etanol_usado_viagem = sales_x_sao_paulo / consumo_veiculo_no_etanol;
let valor_de_dinheiro_gasto_etanol = quantidade_etanol_usado_viagem * valor_etanol;


//Gasolina

let quantidade_gasolina_usado_viagem = sales_x_sao_paulo / consumo_veiculo_na_gasolina;
let valor_de_dinheiro_gasto_gasolina = quantidade_gasolina_usado_viagem * valor_gasolina;


if(combustivel == 'Gasolina' || combustivel == '1'){
        //Gasolina
    console.log('=======================================================');
    console.log('=====================Desafio N° 2 IF ELSE======================');
    console.log('=======================================================');
    console.log('\nQuantidade de Litros Gasolina Gasto neste Percurso foi de '+quantidade_gasolina_usado_viagem.toFixed(2)+'Litros\n'); 
    console.log('Quantidade de valor Gasto de Gasolina nesta Viagem foi de '+valor_de_dinheiro_gasto_gasolina.toFixed(2)+'R$')
    console.log('=======================================================\n');

}else if(combustivel == 'Etanol' || combustivel == '2'){
        //Etanol
    console.log('=======================================================');
    console.log('=====================Desafio N° 2 IF ELSE======================');
    console.log('=======================================================');
    console.log('\nQuantidade de Litros Etanol Gasto neste Percurso foi de '+quantidade_etanol_usado_viagem.toFixed(2)+'Litros\n'); 
    console.log('Quantidade de valor Gasto de Etanol nesta Viagem foi de '+valor_de_dinheiro_gasto_etanol.toFixed(2)+'R$')
    console.log('=======================================================\n');
}else{
    if(combustivel != 'Gasolina' || combustivel != 'Etanol'){
        console.log('Opcoes Invalidas')
    }
}