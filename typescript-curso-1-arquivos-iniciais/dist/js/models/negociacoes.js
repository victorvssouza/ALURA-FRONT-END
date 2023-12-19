export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
// Generics: Se eu definir que list será do tipo Array de String, ele só aceitará Strings dentro da Array. Ocorrerá erro para tipos divergentes.
// const list: Array<String> = [];
// list.push('10');
// list.push('11');
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
});
