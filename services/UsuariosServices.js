let usuarios = require('../databases/usuarios.json')
const fs = require('fs')
const bcrypt = require('bcrypt')




function listar() {
    
    console.table(usuarios.map(u => `ID: ${u.id} | Nome: ${u.nome} | E-mail: ${u.email}`))
}

function salvar(arrayDeUsuarios) {

    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4))
}



function cadastrar(objeto) {
    const senhaCripto = bcrypt.hashSync(objeto.senha, 10)

    let usuario = {
        id: usuarios.length + 1,
        nome: objeto.nome,
        email: objeto.email,
        senha: senhaCripto,
        enderecos: [],
        formasDePagamento: []

    }

}


function detalhar(idUsuario) {
    let usuarioId = usuarios.find(u => u.id == idUsuario)
    console.log(usuarioId.nome + ' ' + usuarioId.email)
    console.table(usuarioId.enderecos)
}



function remover(idDoUsuarioParaRemover) {
    
    let indexIdRemover = usuarios.findIndex(i => i.id === idDoUsuarioParaRemover)
    usuarios.splice(indexIdRemover, 1)
    salvar(usuarios)
    
}

function alterar(novosDados, idUsuario) {
    let usuarioId = usuarios.find(u => u.id == idUsuario)
    const senhaCripto = bcrypt.hashSync(usuarioId.senha, 10)

    usuarioId.nome = novosDados.nome
    usuarioId.email = novosDados.email
    usuarioId.senha = senhaCripto

    salvar(usuarios)
}


function addEndereco(novoEndereco, idUsuario) {
    let usuarioId = usuarios.find(u => u.id == idUsuario)

    usuarioId.enderecos.push(novoEndereco)

    salvar(usuarios)
}


function removerEndereco(posicaoDoEndereco, idUsuario) {
    let usuarioId = usuarios.find(u => u.id == idUsuario)
    
    let posicao = usuarioId.enderecos

    posicao.splice(posicaoDoEndereco, 1)

    salvar(usuarios)

} 

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario) {
    let usuarioId = usuarios.find(u => u.id == idUsuario)
    
    let posicao = usuarioId.enderecos
    
    posicao.splice(posicaoDoEndereco,1,novoEndereco)

    salvar(usuarios)
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario) {
    let usuarioId = usuarios.find(u => u.id == idUsuario)

    let posicaoPagamento = usuarioId.formasDePagamento

    posicaoPagamento.push(novaFormaDePagamento)

    salvar(usuarios)
}


function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario) {
    let usuarioId = usuarios.find(u => u.id == idUsuario)

    let posicaoPagamento = usuarioId.formasDePagamento

    posicaoPagamento.splice(posicaoDaFormaDePagamento, 1)

    salvar(usuarios)

}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario) {
    let usuarioId = usuarios.find(u => u.id == idUsuario)

    let posicaoPagamento = usuarioId.formasDePagamento

    posicaoPagamento.splice(posicaoDaFormaDePagamento, 1, novaFormaDePagamento)

    salvar(usuarios)
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