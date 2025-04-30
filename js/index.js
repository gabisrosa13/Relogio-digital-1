function VerificarPalavra(){
    var Nome = document.getElementById("Nome").value; 
    var Data_nascimento = document.getElementById("Data_nascimento").value;
    var Numero  = document.getElementById("Numero").value;


Numero_quadrado = Numero * Numero //número ao quadrado
const Nome_maiusculo = Nome.toUpperCase(); //nome em maiusculo
const aleatorio = Math.floor(Math.random() * 100) + 1; //numero aleatorio

const hoje = new Date();
const horaFormatada = hoje.toLocaleTimeString(); //horário atual


var dataNascimento = new Date(Data_nascimento);
var anoNascimento = dataNascimento.getFullYear(); //só o ano de nascimento
var anoAtual = new Date().getFullYear(); //só o ano atual
var idade = anoAtual - anoNascimento; //calcula idade


document.getElementById("resultado").innerHTML = 
    `Seja bem-vindo ${Nome_maiusculo}, você tem ${idade} anos.<br>` +
    `O número que você digitou ao quadrado é ${Numero_quadrado} e um número aleatório é ${aleatorio}.<br><br>` +
    `O horário atual é ${horaFormatada}`;

}