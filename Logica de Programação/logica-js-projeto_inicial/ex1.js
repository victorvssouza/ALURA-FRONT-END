/* Corrigir codigo abaixo
function habilitacao() {
    var nome = prompt('Digite seu nome: ');
    var idade = prompt('Digite sua idade: ');
    var anos = 18 - idade;
    alert('Seu nome é ' + nome);
    
    if (idade < 17) {
        alert('Voce não pode tirar a habilitação ainda.')
        alert('Aguarde mais ' + anos + ' anos.')
    } else if (idade == 17) {
        console.log('Voce não pode tirar a habilitação ainda.')
        console.log('Aguarde mais ' + anos + ' ano.')
    } else {
        alert('Voce pode tirar a habilitação!!!! ')
    }
}
    habilitacao();

    function soma(x, y) {
        console.log(x + y)
    }
    soma(4, 6)
    soma(3, 5) */
/*FIM*/

/* Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!". */
// var dia = prompt('Que dia é hoje? ');

// if (dia == 'sábado' || dia == 'domingo'){
//     alert('Bom fim de semana')
// }else{
//     alert('Boa semana')
// }

