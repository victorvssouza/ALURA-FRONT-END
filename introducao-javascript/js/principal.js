var titulo = document.querySelector(".titulo");
tituto = document.getElementsByClassName('titulo').textContent = 'Aparecida Nutricionista2';

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    console.log(pacientes[i]);
    var tdPeso = document.querySelector(".info-peso");
    
    var peso = tdPeso.textContent;
    var tdAltura = document.querySelector(".info-altura")
    var altura = tdAltura.textContent;

    console.log(pacientes);
    console.log(tdPeso);
    console.log(peso,"Kg");
    console.log(altura,"m");

    var tdImc = document.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso < 0 || peso > 1000){
        console.log("Peso invalido!")
        pesoValido = false;
        tdImc.textContent = "Peso Invalido!";
    }

    if(altura < 0 || altura > 3.00){
        console.log("Altura invalida!")
        alturaValida = false;
        tdImc.textContent = "Altura Invalida!";
    }

    if(alturaValida && pesoValido){
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(0);
        console.log("IMC: ",imc);
    }
}
