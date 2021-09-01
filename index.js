let prmtNome = prompt("Seu nome");
let prmtIdade = Number(prompt("Sua idade"));

var idPessoa = {
    nome: prmtNome,
    idade: prmtIdade
};

var {nome} = idPessoa;
var {idade} = idPessoa;

const dataHora = new Date();
const hora = dataHora.getHours();
const dia = dataHora.getDay();
const minuto = dataHora.getMinutes();

switch (dia) {
    case 0:
    document.getElementById('dia').innerHTML = `Agora são ${hora} horas e ${minuto} minutos, hoje é Domingo`
        break
    case 1:
        document.getElementById('dia').innerHTML = `Agora são ${hora} horas e ${minuto} minutos, hoje é Segunda - Feira`
        break
    case 2:
        document.getElementById('dia').innerHTML = `Agora são ${hora} horas e ${minuto} minutos, hoje é Terça - Feira`
        break
    case 3:
        document.getElementById('dia').innerHTML = `Agora são ${hora} horas e ${minuto} minutos, hoje é Quarta - Feira`
        break
    case 4:
        document.getElementById('dia').innerHTML = `Agora são ${hora} horas e ${minuto} minutos, hoje é Quinta - Feira`
        break
    case 5:
        document.getElementById('dia').innerHTML = `Agora são ${hora} horas e ${minuto} minutos, hoje é Sexta - Feira`
        break  
    case 6:
        document.getElementById('dia').innerHTML = `[ERROR] Dia inválido!`
    };

if(hora < 12) {
    document.getElementById('informacao').innerHTML = `Bom dia, ${nome}, foi confirmado no sistema a sua idade de: ${idade} anos`
} else if (hora <= 18) {
    document.getElementById('informacao').innerHTML = `Boa tarde, ${nome}, foi confirmado no sistema a sua idade de: ${idade} anos`
} else {
    document.getElementById('informacao').innerHTML = `Boa noite, ${nome}, foi confirmado no sistema a sua idade de: ${idade} anos`
};

let permitido = document.getElementById('acesso');

function tipoAcesso() {
    if(idade >= 18 && idade < 60) {
        alert('Acesso permitido!')
        permitido.innerText = `Usuário aprovado!`
        permitido.innerHTML += `<p>Seja bem vindo(a)!!!</p>`
    } else if (idade == 60 || idade > 60) {
        document.getElementById('acesso').innerHTML = `Usuário aprovado, seja bem vindo sr(a) <p>${nome}!</p>`
    } else if (idade < 18 || idade == 0) {
        alert('Acesso negado!!!')
        var negado = document.getElementById('acesso')
        negado.innerHTML = `Acesso negado! A sua idade não corresponde aos pré requisitos. <p>Você não tem permissão para acessar o sistema</p>`
    }
};

let confirmBotao = document.getElementById('botao');
confirmBotao.style.display = 'flex';
confirmBotao.style.flexWrap = 'wrap';
confirmBotao.style.margin = 'auto';
confirmBotao.style.background = 'black';
confirmBotao.style.color = 'white';
confirmBotao.style.textAlign = 'center';
confirmBotao.style.fontSize = '18px';
confirmBotao.style.width = '10%';
confirmBotao.style.height = '15%';
confirmBotao.style.padding = '10px';
confirmBotao.style.borderRadius = '7px';

let promocao = document.getElementById('promocao');

function permitirPromocao() {
    if(idade >= 18 && idade < 60) {
        promocao.style.backgroundColor = "gray"
        promocao.innerText = `${nome}, foi liberado um desconto de 15% de desconto em nossa página, aproveite!`
    } else if (idade == 60 || idade > 60) {
        promocao.style.backgroundColor = "gray"
        promocao.innerText = `${nome}, foi liberado um desconto de 30% de desconto em nossa página, aproveite !`
    }else {
        
    }
};

function esconder() {
    promocao.style.backgroundColor = "black"
    promocao.style.overflow = "auto"
};

    if(idade < 18 || idade == 0) {
        alert("Idade INVALIDA para cadastrar email!")
       var esconderEmail = document.getElementsByClassName('hideEmail');
        esconderEmail.style.background = 'black'
    } else {
        alert("Cadastrado com Sucesso!")
    }