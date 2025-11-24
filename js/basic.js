console.log('Olá, Javascript!')

var username = "Denia Mirna!"

document.getElementById('user-name').innerHTML = username

//Váriaveis//

// var nome = "Mestre Yoda"
// var idade = 100
// var jedi = true

// console.log(nome)
// console.log(idade)
// console.log(jedi)

//Operadores matemáticos//

// var n1 = 5
// var n2 = 5

// var total = n1 + n2
// console.log(total)

// var n1 = 5
// var n2 = '5'

// var total = n1 + (n2)
// console.log(total)

// var n1 = 5
// var n2 = '5'

// var total = n1 + parseInt(n2)
// console.log(total)

// var n1 = 5
// var n2 = 3

// var total = n1 - (n2)
// console.log(total)

// var n1 = 5
// var n2 = 3

// var total = n1 * (n2)
// console.log(total)

// var n1 = 15
// var n2 = 5

// var total = n1 / (n2)
// console.log(total)

// var n1 = 5
// var n2 = 2.5

// typeof traz qual o tipo de variável - string (texto) - numérico e boolean (true ou false)//

// console.log(typeof n1)
// console.log(typeof n2)

// var total = n1 / (n2)
// console.log(total)


//Operadores de comparação //

// var v1 = 6
// var v2 = 6

// // === significa que a comparação será exata, se é numero com numero, letra com letra, "typagem iguais" //

// var resultado = v1 === v2
// console.log(resultado)


// var v1 = 6
// var v2 = '6' 

// // '' - valor da váriavel entre aspas se torna string(texto), mesmo sendo numérico, sua leitura será em texto//

// console.log(typeof v1)
// console.log(typeof v2)

// var resultado = v1 === v2
// console.log(resultado)


// var v1 = 6
// var v2 = '6'

// // == significa que a comparação vai ignorar a typagem//

// var resultado = v1 == v2
// console.log(resultado)

// var v1 = 6
// var v2 = 5

// // != a comparação feita analisando a diferença
// var resultado = v1 != v2
// console.log(resultado)


// Função //

//function soma (n1, n2) {
  //  console.log (n1 + n2)
//}
//soma(5, 100)

//function BoasVindas () {
 //   alert('Sejam Bem Vindos!')

//}
//BoasVindas()

//function BoasVindas (nome) {
  //  alert(nome  + ', seja Bem Vindo(a)!')

//}
//BoasVindas('Mirna')

//function soma (c1, c2){
//    return c1 - c2
//}
//var resultado = soma(30,15)
//console.log(resultado)

//PARA COMENTAR UM FLUXO NO WINDOWS É SELECIONA O FLUXO E CTRL + : //

// CONTROLE DE FLUXOS//

// Simulação de história de user //
// Sendo um cliente correntista do banco // ator //
// Posso sacar dinheiro em caixas eletronicos // aquilo que deve ser desenvolvido //
// Para comprar em lugares que não aceitam CC ou CD // valor agregado na funcionalidade //

// Criterios de aceite //
// Cenario 1: Saque com sucesso //
// Dado que saldo é de 1000 reais //
// Quando realizar saque de 500 reais //
// Então o valor de saque deverá ser deduzido do saldo //

// Cenario 2: Saque com valor superior ao saldo //
// Dado que saldo é de 1000 reais //
// Quando realizar saque de 1001 reais //
// Então não devera deduzir do saldo //
// E deverá vir mensagem informando valor é superior a saldo em conta//

// Cenario 3: Saque com valor máximo //
// Dado que saldo é de 1000 reais //
// E o valor máximo por saque é de 700 reais //
// Quando realizar saque de 701 reais //
// Então não devera deduzir do saldo //
// E deverá vir mensagem informando valor é superior ao limite de saque//

// Montagem do cenario 1 //
// var saldo = 1000 - pré condição // Dado //
// function saque (valor) - função que receberá um valor como argumento // quando //
// saque (500) - valor de argumento // quando //
// dentro da function - saldo = saldo - valor // Então //

// var saldo = 1000

// function saque (valor) {
//     saldo = saldo - valor
// }
// saque(500)
// console.log(saldo)

// Montagem do cenario 2 // Vamos incluir o controle de fluxos - if //

// var saldo = 1000

// function saque (valor) {

//     if(valor > saldo) {
//         console.log('Valor de saque superior ao saldo em conta')
//     }else{
//         saldo = saldo - valor
//     }
    
// }
// saque(1001)
// console.log(saldo)

// Montagem do cenario 3 // Vamos incluir o controle de fluxos - if //

// var saldo = 1000

// function saque (valor) {

//     if(valor > saldo) {
//         console.log('Valor de saque superior ao saldo em conta')
//     }else if (valor > 700) {
//         console.log( 'Valor superior ao limite de saque de R$ 700,00')
//     }else {
//         saldo = saldo - valor
//     }
        
//     }
    
// saque(701)
// console.log(saldo)

//Arrays//

// var gaveteiro = ['Calcinhas', 'Sutiãs', 'Meias','Tops']

// console.log(gaveteiro[3])

// Em arrays não colocamos os nomes, cada nome terá uma numeração, iniciando pelo 0 //
// Ficando - 0 = Calcinhas, 1 = Sutiãs, 2 = Meias e 3 = Tops //

// var timesDeVolei = ['Barueri', 'Flamengo', 'Sorocaba','Minas']

// timesDeVolei.push('Osasco')

// console.log(timesDeVolei)

// a opção push é para incluir mais uma opção, sem mexer na váriavel inicial //
// variavel com mais de uma palavra, a primeira é escrita com a inicial minuscula e as demais com a inicial maiuscula //
// essa identificação chamada camelcase //

// var timesDeVolei = ['Barueri', 'Flamengo', 'Sorocaba','Minas']

// timesDeVolei.push('Osasco')
// console.log(timesDeVolei)

// timesDeVolei.pop()
// console.log(timesDeVolei)


// a opção pop ele retira uma opção da váriavel //
// com o valor vazio = pop() = entende que a opção é a ultima relacionada//
// se valor preenchido = pop('Minas'), ela segue retirando o ultimo //

// var timesDeVolei = ['Barueri', 'Flamengo', 'Sorocaba','Minas']

// timesDeVolei.push('Osasco')

// timesDeVolei = timesDeVolei.filter(function(t){
//     return t !== 'Sorocaba'
// })

// console.log(timesDeVolei)

// Para a retirada especifica de um time, terei que usar um filtro - filter com a função - function em t //
// T dentro da função ela representa a unidade do time - t = Barueri - t = Flamengo // pode ser qualquer letra //
// Esse filtro lê os times e entender que precisa aparecer os nomes com a exceção (retur t !==) do nome escrito //

// var timesDeVolei = ['Barueri', 'Flamengo', 'Sorocaba', 'Minas']

// timesDeVolei.push('Osasco')
// console.log(timesDeVolei)

// timesDeVolei = timesDeVolei.filter(function(t){
//     return t !== 'Sorocaba'
// })

// timesDeVolei = timesDeVolei.filter(function(t){
//     return t === "Barueri"
// })

// console.log(timesDeVolei)

// Controle de repetição (loops) //

// //var timesDeVolei = ['Barueri', 'Flamengo', 'Sorocaba', 'Minas']

// console.log(timesDeVolei[0])
// console.log(timesDeVolei[1])
// console.log(timesDeVolei[2])
// console.log(timesDeVolei[3])

// Quando tivermos mais de uma escolha para ser apresentada, pode ser igual acima, porém tem a opção de repetir, otimizae //
// Controle de repetição chamado 'foreach'

// var timesDeVolei = ['Barueri', 'Flamengo', 'Sorocaba', 'Minas']

// timesDeVolei.forEach(function(t){
//   console.log(t)
  
// });

// Se amanhã eu add um outro time, ele vai listar corretamente //

// var timesDeVolei = ['Barueri', 'Flamengo', 'Sorocaba', 'Minas', 'Braits']

// timesDeVolei.forEach(function(t){
//   console.log(t)
  
// });

// Além do utilizado acima, temos o forin, ele traz o indicador, a posição (0,1,2,3,4...), das opções, puxando daqui//
// console.log(timesDeVolei[0])
// console.log(timesDeVolei[1])
// console.log(timesDeVolei[2])
// console.log(timesDeVolei[3])

// var timesDeVolei = ['Barueri', 'Flamengo', 'Sorocaba', 'Minas', 'Braits']

// for (var i in timesDeVolei) {
//   console.log(i)
// }

// var timesDeVolei = ['Barueri', 'Flamengo', 'Sorocaba', 'Minas', 'Braits']

// for (var i = 0; i <= 10; i++){
//   console.log(i)
// }


// o for é um looping, i é uma váriável, esse cara vai rodando até que o comparativo (condição <=) seja falso//
// ele vai ler até o 10, passando disse ele vai parar //

//Objetos // São como superváriaves, é uma forma muito prática para poder armazenar info de forma fexível e agrupada, onde//
// Conseguimos ter uma coleção de valores por nome //

// var minas = {}

// minas.nome = 'Minas Tenis Clube'
// minas.idade = 6
// minas.time = true
// minas.outra_info = 'campeão mundial'
// console.log(minas)

// Podemos também definir os valores dentro das chaves//

// var minas = {
//   nome: 'Minas Tenis Clube',
//   idade: 6,
//   time: true

// }
//   console.log(minas)

//Podemos também incluir dentro da váriavel uma função//
//Podemos incluir frases, dentro dessa função, porém temos que trazer o valor da váriavel, é usado `(apostroge) para burlar//
// a string e ${} para trazer a varivel// o This é como se fosse uma ligação//

// var minas = {
//   nome: 'Minas Tenis Clube',
//   idade: 6,
//   time: true,
//   mostrarIdade: function() {
//     console.log(`O ${this.nome} é ${this.idade} vezes campeão da Superliga.`)
//   }
// }
//   console.log(minas)
//   minas.mostrarIdade()

//Constantes// usado const - para identificar uma valor que não muda, será sempre aquele valor.

// const nome = 'Denia'
// console.log(nome)

// var nome = 'Mirna'
// console.log(nome)

//



