alert('Link Start!');

//Comece e chute um número
let chute;
let tentativas = 1;

//Definição do numero secreto e comparação
let numeroSecreto = parseInt(Math.random() * 100   + 1);

//enquanto chute for diferente de numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt('Digite um número: ');
        // Se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

//Simplificando a condicional com operador ternário 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou!!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Acertou!!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }else{
//     alert(`Acertou!!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }



