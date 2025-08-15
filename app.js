alert('Boas vindas ao jogo do número secreto');

let = dificuldade = Number(prompt('Escolha um o número máximo: '));
let numeroSecreto = parseInt(Math.random() * dificuldade+1);;
let numeroEscolhido = null;
let tentativas = 1;



// enquanto numero secreto for diferente do numero escolhido
while (numeroSecreto != numeroEscolhido) {
    numeroEscolhido = Number(prompt(`Escolha um número entre 1 e ${dificuldade}`));
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


