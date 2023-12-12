const imput = require('prompt-sync')({singint: true}); 
 
function saldoRank(numVitorias, numDerrotas, saldo){
    console.log("o número de vitórias obtidas:  ")
    console.log("o número de derrotas obitidas:  ") 
    saldo = numVitorias - numDerrotas 
    console.log("O saldo é de: " + saldo) 
    return saldo
 } 

 let saldoUm = saldoRank(30, 23) 

if (saldoUm < 10){
    let rankClass = "Ferro"
    console.log(`O herói está ${rankClass} com saldo de ${saldoUm} `)
} else if (saldoUm > 11 && saldoUm <= 20) {
    let rankClass = "Bronze"
    console.log(`O herói está ${rankClass} com saldo de ${saldoUm} `)
} else if (saldoUm > 21 && saldoUm <= 50) {
    let rankClass = "Prata"
    console.log(`O herói está ${rankClass} com saldo de ${saldoUm} `)
} else if (saldoUm > 51 && saldoUm <= 80) { 
    let rankClass = "Ouro"
    console.log(`O herói está ${rankClass} com saldo de ${saldoUm} `)
} else if (saldoUm > 81 && saldoUm <= 90) {
    let rankClass = "Diamante"
    console.log(`O herói está ${rankClass} com saldo de ${saldoUm} `)
} else if (saldoUm > 91 && saldoUm <= 100) {
    let rankClass = "Lendário"
    console.log(`O herói está ${rankClass} com saldo de ${saldoUm} `)
} else if (saldoUm > 101) {
    let rankClass = "Imortal"
    console.log(`O herói está ${rankClass} com saldo de ${saldoUm} `)
}