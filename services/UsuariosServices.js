let usuarios = require('../databases/usuarios.json')
const fs = require('fs')
//const bcrypt = 



function listar(){
    // Exibir uma tabela somente com index, id, nome e email do usuário
    console.table(usuarios.map(u => `ID: ${u.id} | Nome: ${u.nome} | E-mail: ${u.email}`))
}

function salvar(arrayDeUsuarios){

    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4))
}

let usuario = {
    id: 128,
    nome: 'jaqueline copello',
    email: 'ttt',
    senha: '$2b$10$SVtOuXSKV9phITIZH6V12.8VN7iOxi2xHcGq0eQiVU82cKmFx.CRa',
    enderecos: [ 'tttt' ],
    formasDePagamento: []
}

listar()

function cadastrar(objeto){
let usuario = {
    id: usuarios.length,
    nome: objeto.nome,
    email: objeto.email,
    enderecos: objeto.enderecos,
    formasDePagamento: objeto.formasDePagamento
}
usuarios.push(usuario)
salvar(usuarios)

}

cadastrar(usuario)

function detalhar(idUsuario){
// Seu código aqui
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    salvar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices