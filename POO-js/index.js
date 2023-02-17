import {Cliente} from "../POO-js/Cliente.js";
import {ContaCorrente} from "../POO-js/ContaCorrente.js";

//CLIENTE 1
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "12345678900";

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(-100);
// const valorSacado = contaCorrenteRicardo.sacar(50);

//CLIENTE 2
const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "12345678901";

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(conta2._saldo)
