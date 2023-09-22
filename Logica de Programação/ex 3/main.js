/*Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário.

Use a fórmula: M = C * (1+i)**t
Onde:

    C = Capital inicial investido
    i = Taxa de juros, em percentual
    t = Tempo do investimento, em meses

Exiba o resultado com duas casas decimais.

function montante (m, c, i, t){
    var c = prompt('Digite o Capital Inicial: ');
    c = parseFloat(c);
    console.log('R$',c);

    var i = prompt('Digite a Taxa de Juros: ');
    console.log(i,'% de juros');
    i = i / 100;
    i = parseFloat(i);

    var t = prompt('Digite o Tempo do Investimento, em meses: ');
    t = parseFloat(t);
    console.log(t, 'meses')

    m = c * (1+i) ** t;
    m = m.toFixed(2);
    console.log('Montante: R$',m);
}

montante();*/

function calcularMontante() {
    var c = parseFloat(document.getElementById('capitalInicial').value);
    var i = parseFloat(document.getElementById('taxaJuros').value);
    var t = parseFloat(document.getElementById('tempoInvestimento').value);

    var m = c * Math.pow(1 + (i / 100), t);
    
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = 'Montante: R$' + m.toFixed(2);

    // Adicione a classe de animação
    resultadoElement.classList.add('animado');

    // Remova a classe de animação após a animação terminar (1 segundo)
    setTimeout(function () {
        resultadoElement.classList.remove('animado');
    }, 1000);
}
