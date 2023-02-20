import {Cliente} from "../POO-js/Cliente.js";
import {ContaCorrente} from "../POO-js/ContaCorrente.js";

//CLIENTE 1
const cliente1 = new Cliente("Ricardo", 12345678900);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(-100);
// const valorSacado = contaCorrenteRicardo.sacar(50);

//CLIENTE 2
const cliente2 = new Cliente("Alice", 12345678901);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
console.log("Número de contas abertas:",ContaCorrente.numeroDeContas);

