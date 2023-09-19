alert('Link Start!');
//Comece e chute um número
let chute = prompt('Digite um número: ');
console.log('Valor do chute: ', chute);
//Definição do numero secreto e comparação
let numeroSecreto = 29;
console.log('Resultado de comparação: ', chute == numeroSecreto);

// Se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Acertou!!! Esse é o número secreto ${numeroSecreto}`);
} else {
    alert(`Você errou!!! Esse é o número secreto ${numeroSecreto}`);
}


