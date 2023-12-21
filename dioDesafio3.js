let herois ={
    heroi1:{
    nome: "Hb 2", 
    idade: 15,
    tipo: "Guerreiro"
    },
    heroi2:{
    nome: "Zezinho",
    idade: 13,
    tipo: "Mago"
    },
    heroi3:{
    nome: "Jota Jota",
    idade: 18,
    tipo: "Monge"
    },
    heroi4:{
    nome: "Jz",
    idade: 10,
    tipo: "Ninja"
 }
}

function requisito(herois){
    if(herois.tipo = "Mago"){
            let ataque = "usou magia"
    }else if(herois.tipo = "Guerreiro"){
            ataque = "usou espada"
    }else if (herois.tipo = "Monge"){
            ataque = "usou artes maciais"
    }else {
            ataque = "usou shuriken"
    }
            return ataque;
}
let atq = requisito
console.log(" O "+herois.tipo+" atacou usando "+atq)