alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = parseInt(Math.random() * 10+1);;
let numeroEscolhido = null;
let tentativas = 1;



// enquanto numero secreto for diferente do numero escolhido
while (numeroSecreto != numeroEscolhido) {
    numeroEscolhido = Number(prompt('Escolha um número entre 1 e 10'));
    if (numeroSecreto == numeroEscolhido) {
        break;
    } else {  
        if (numeroSecreto > numeroEscolhido) {
            alert(`O número secreto é maior que ${numeroEscolhido}`);
        } else {
            alert(`O número secreto é menor que ${numeroEscolhido}`);
        }
        tentativas++;
    }
}

//operador ternario
let = palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com uma ${tentativas} ${palavraTentativa}`);


