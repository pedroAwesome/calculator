
function adicao (a, b){
    return a+b;
}

function subtracao (a,b){
    return a-b;
}

function divisao (a,b){
    if (b !== 0) {
        return a / b;
    } else {
        return 'vc tentou dividir por 0? vc é do fundamental?';
    }
}

function multiplicacao (a,b){
    return a * b;
}

function porcentagem (a,b){
    return (a/100) * b;
}

function fatorial (a){
   if (a == 0 || a == 1)
   return 1;
   for (let index = a - 1; index >= 1; index--) {
    a *= index;
    
   }
   return a;
}


function calculadora (operacao, a, b){
    switch (operacao) {
        case 'adicao':
            return adicao(a,b);
               case 'subtracao':
                return subtracao(a,b);
                  case 'divisao':
                    return divisao(a,b);
                     case 'multiplicacao':
                        return multiplicacao(a,b);
                          case 'porcentagem':
                             return porcentagem(a,b);
                              case 'fatorial':
                                return fatorial(a);
                default:
                    return ('operacao invalida')
    }
}

let resultado = calculadora('',a , b)
console.log (resultado)

//boas vindas à minha calculadora completamente ineficiente!

//coloque a operacao que voce deseja realizar dentro das aspas, seguidos dos dois (ou um, se for fatorial,) numeros
//para porcentagem, o primeiro número é o por-cento, e o segundo é o valor base

// EXEMPLOS : let resultado = calculadora ('adicao', 5 , 6)    output esperado = 11
// EXEMPLOS : let resultado = calculadora ('fatorial', 5) output esperado = 120