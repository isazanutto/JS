function saldoVitorias(vitoria, derrota) {
   if (vitoria > derrota) {
   var saldo = vitoria - derrota}
   else if (derrota > vitoria){
     saldo = derrota - vitoria
   }
   return saldo;
}

function rank(saldo){
    if(saldo<= 10){
        var nivel = 'Ferro'
    }else if (saldo >= 11 && saldo<=20 ){
        nivel = 'Bronze'
    }else if (saldo>=21 && saldo<=50){
        nivel = 'Prata'
    }else if (saldo>=51 && saldo<=80){
        nivel = 'Ouro'
    }else if (saldo>=81 && saldo<=90){
        nivel = 'Diamante'
    }else if (saldo>=91 && saldo<=100){
        nivel = 'Lendário'
    }else{
        nivel = 'Imortal'
    }   
        return nivel;
  }
let resultado = saldoVitorias(10,1);
let rankPartida = rank(resultado);
console.log("O Héroi tem o saldo de "+ resultado+ 
" vitórias e está no nível "+ rankPartida+".")

resultado = saldoVitorias(1,10);
rankPartida = rank(resultado);
console.log("O Héroi tem o saldo de "+ resultado+ 
" vitórias e está no nível "+ rankPartida+".")

resultado = saldoVitorias(20,9);
rankPartida = rank(resultado);
console.log("O Héroi tem o saldo de "+ resultado+ 
" vitórias e está no nível "+ rankPartida+".")

resultado = saldoVitorias(50,5);
rankPartida = rank(resultado);
console.log("O Héroi tem o saldo de "+ resultado+ 
" vitórias e está no nível "+ rankPartida+".")

resultado = saldoVitorias(1000,10);
rankPartida = rank(resultado);
console.log("O Héroi tem o saldo de "+ resultado+ 
" vitórias e está no nível "+ rankPartida+".")

resultado = saldoVitorias(100,30);
rankPartida = rank(resultado);
console.log("O Héroi tem o saldo de "+ resultado+ 
" vitórias e está no nível "+ rankPartida+".")

    