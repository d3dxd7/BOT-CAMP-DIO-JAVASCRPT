//Funcao Retorno
function imprimirSoma(valor1, valor2){
    resultado = valor1 + valor2
    if(isNaN(valor1) || isNaN(valor2)){ //Se Valor for Not a Number(NaN) trata valor
        console.log('Digite valor valido')
    }else{
        console.log(resultado)
    }
}

imprimirSoma()

//Fuction com Retorno / com tratamento de NaN direto nos Argumentos
function soma(a=0, b =0){
    console.log(`Resultado da Soma Multiplicando A = ${a} e B = ${b} e = ${ a + b}`) 
    return a + b
}

soma(15,10)