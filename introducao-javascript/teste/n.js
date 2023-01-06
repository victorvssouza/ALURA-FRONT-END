var produtos = document.querySelector("lista-produtos");

for( var i=0 ; i < produtos.length ; i++){
    var produto  = produtos[i];
    var nomeDoProduto = produto.textContent;
    console.log(nomeDoProduto);
}













// TESTE FIREWALL
/*var setorTI = true;
var gerente = true;
if(setorTI == true && gerente == true){
    console.log("Acesso ADMIN permitido");
}else{
    console.log("Acesso ADMIN negado")
}

if(setorTI == true && gerente == false){
    console.log("Acesso COMMOM permitido");
}else{
    console.log("Acesso COMMOM negado");
}*/