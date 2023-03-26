let idadeDependente = 15

// usando if's aninhados

if(idadeDependente >= 13 && idadeDependente <= 17){
    console.log("Sua solicitação para ter um cartão de crédito dependente foi aprovada!")
}else{
    console.log("Para sua solicitação ser aprovada, você precisa ter entre 13 e 17 anos.")
}

// ternário

let chuva = true;

chuva ? console.log("leva guarda-chuva!") : console.log("não precisa levar guarda-chuva...");

let sol = "ta fazendo sol";

sol === "ta fazendo sol" ? console.log("leva óculos de sol!") : console.log("não precisa levar óculos de sol...");

// switch-case

let escolhaCartao = Number(prompt("Digite um número entre 1 e 4 para escolher o cartão."))
let cartao

switch(escolhaCartao){
    case 1:
        cartao = "Básico"
        break;

    case 2:
        cartao = "Gold"
        break;

    case 3:
        cartao = "Platinum"
        break;

    case 4:
        cartao = "Black"
        break;
    default:
        cartao = "Escolha uma das quatro opções disponíveis!"
            break;
}

console.log("Cartão", cartao);