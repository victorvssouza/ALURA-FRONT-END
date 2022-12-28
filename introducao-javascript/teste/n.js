var a = document.querySelector("lorem");
console.log(a);

let text = document.getElementById('divA').textContent;
// Agora a variável de texto é: 'Isto é algum texto!'
document.getElementById('divA').textContent = 'Este texto é diferente!';
// O HTML de divA agora é:
// <div id="divA">Este texto é diferente!</div>