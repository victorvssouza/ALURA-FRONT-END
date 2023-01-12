var titulo = document.querySelector(".titulo");
tituto = document.getElementsByClassName('titulo').textContent = 'Aparecida Nutricionista2';

// removido a duplicidade de código e melhorando a legibilidade
var pacientes = document.querySelectorAll(".paciente");
for (let pacienteAtual of pacientes) {
    var tdPeso = pacienteAtual.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacienteAtual.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = pacienteAtual.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    // validações de entrada de dados
    if (peso <= 0 || peso >= 3000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        pacienteAtual.classList.add("paciente-invalido");
        console.log("Peso inválido!");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        pacienteAtual.classList.add("paciente-invalido");
        console.log("Altura inválida!");
    }

    // se as entradas são válidas
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
        //tdImc.style.color = "blue" //Mudar cor do texto
        //tdImc.style.backgroundColor = "blue" //Mudar cor do background 
        //console.log(pacienteAtual.classList); //Listar todas as classes da variavel
    }
}

//Adiciona a classe titulo a todas os titulos h2
// var titulos = document.querySelectorAll("h2");

// for(var i = 0 ; i <  titulos.length ; i++){
//     var titulo = titulos[i];
//     titulo.classList.add("titulo");
// }