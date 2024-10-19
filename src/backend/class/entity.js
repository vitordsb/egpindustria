export default class Fornecedores {
    nome = String;
    email = String;
    telefone = String;
    cnpj = String;
    constructor(nome, email, telefone, cnpj){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cnpj = cnpj;
    }
 }