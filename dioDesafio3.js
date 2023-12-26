let herois =[
    {nome: "Hb 2", idade: 15,tipo: "Guerreiro"},
    {nome: "Zezinho",idade: 13,tipo: "Mago"},
    {nome: "Jota Jota",idade: 18,tipo: "Monge"},
    {nome: "Jz",idade: 10,tipo: "Ninja"}
]
let tipo = herois[0].tipo
let tipo1 = herois[1].tipo
let tipo2 = herois[2].tipo
let tipo3 = herois[3].tipo

function requisito(tipo){
    if(tipo == "Mago"){
        var ataque = "magia"
    }else if(tipo == "Guerreiro"){
            ataque = "espada"
    }else if (tipo == "Monge"){
            ataque = "artes maciais"
    }else {
            ataque = "shuriken"
    }
            return ataque;
}

function requisito1(tipo1){
        if(tipo1 == "Mago"){
            var ataque1 = "magia"
        }else if(tipo1 == "Guerreiro"){
                ataque1 = "espada"
        }else if (tipo1 == "Monge"){
                ataque1 = "artes maciais"
        }else {
                ataque1 = "shuriken"
        }
                return ataque1;
    }
    function requisito2(tipo2){
        if(tipo2 == "Mago"){
            var ataque2 = "magia"
        }else if(tipo2 == "Guerreiro"){
                ataque2 = "espada"
        }else if (tipo2 == "Monge"){
                ataque2 = "artes maciais"
        }else {
                ataque2 = "shuriken"
        }
                return ataque2;
    }
    function requisito3(tipo3){
        if(tipo3 == "Mago"){
            var ataque3 = "magia"
        }else if(tipo3 == "Guerreiro"){
                ataque3 = "espada"
        }else if (tipo3 == "Monge"){
                ataque3 = "artes maciais"
        }else {
                ataque3 = "shuriken"
        }
                return ataque3;
    }



let resultado = requisito (tipo)
console.log(" O "+tipo+" atacou usando "+resultado)

let resultado1 = requisito1 (tipo1)
console.log(" O "+tipo1+" atacou usando "+resultado1)

let resultado2 = requisito1 (tipo2)
console.log(" O "+tipo2+" atacou usando "+resultado2)

let resultado3 = requisito3 (tipo3)
console.log(" O "+tipo3+" atacou usando "+resultado3)