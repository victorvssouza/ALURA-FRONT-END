// Seleciona o botão com o id "adicionar-paciente"
var botaoAdd = document.querySelector("#adicionar-paciente");

// Adiciona um event listener de clique no botão
botaoAdd.addEventListener("click", function (event) {
    // Previne o comportamento padrão do botão (enviar o formulário)
    event.preventDefault();

    // Seleciona o formulário com o id "form-adiciona"
    var form = document.querySelector("#form-adiciona");

    // Armazena os valores dos campos de formulário "nome", "peso", "altura" e "gordura"
    var paciente = obtemPacienteDoFormulario(form);

    // Cria novos elementos HTML "tr" e "td"
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // Adiciona os valores dos campos de formulário nos elementos "td"
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

    // Adiciona os elementos "td" na "tr"
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // Seleciona a tabela com o id "tabela-pacientes"
    var tabela = document.querySelector("#tabela-pacientes");
    // Adiciona a "tr" na tabela
    tabela.appendChild(pacienteTr);
});

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}