alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let numeroEscolhido = prompt('Escolha um número entre 1 e 10');

if(numeroSecreto == numeroEscolhido){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Não foi dessa vez o número secreto não é esse');
}