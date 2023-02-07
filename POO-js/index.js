class Cliente {
    nome;
    cpf;
    rg;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = "12345678900";
cliente1.rg = "1234560"
cliente1.agencia = "1001";
cliente1.saldo = "0";

cliente2.nome = "Alice";
cliente2.cpf = "12345678901";
cliente2.rg = "1234561"
cliente2.agencia = "1001";
cliente2.saldo = "0";

console.log(cliente1, cliente2);
