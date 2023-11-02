
document.write(`Bem-vindo ao sistema de CRUD de veículos:\n`)
// document.write(`No momento, o sistema tem ${listaVeiculos.lenght} carros cadastrados`)

const listaVeiculos = []
let criaID = 0;
let opcao = 1

while (opcao != 6) {
    opcao = Number(prompt(`Escolha uma das opções para interagir com o sistema:\n 1 - Cadastrar veículo\n 2 - Listar todos os veículos\n 3 - Filtrar veículos por marca\n 4 - Atualizar veículo\n 5 - Remover veículo\n 6 - Sair do sistema`))

    switch (opcao) {
        case 1:
            cadastraVeiculo()
            break;
        case 2:
            listarVeiculos(listaVeiculos)
            break;
        case 3:
            filraVeiculo(listaVeiculos)
            break;
        case 4:
            atualizaVeiculo(listaVeiculos)
            break;
        case 5:
            RemoverVeiculo()
            break;
        case 6:
            alert("SAINDO...")
            break;

        default:
            break;
    }
}

function cadastraVeiculo() {

    id = geraId()
    modelo = prompt("Digite o modelo do Veículo")
    marca = prompt("Digite a marca do Veículo")
    ano = prompt("Digite o ano do Veículo")
    cor = prompt("Digite a cor do Veículo")
    preco = prompt("Digite o preço do Veículo")

    if (modelo == "" || marca == "" || ano == "" || cor == "" || preco == "") {
        alert("Falha ao cadastrar")
        criaID--
    } else {
        const veiculo = {
            id,
            modelo,
            marca,
            ano,
            cor,
            preco
        }

        listaVeiculos.push(veiculo)
        alert("Cadastrado com sucesso")
    }


}

function geraId() {
    criaID++
    return criaID
}


function listarVeiculos(lista) {
    lista.forEach((element) => console.log(`Lista de veiculo cadastrados:\nID: ${element.id}| Modelo: ${element.modelo}| Marca: ${element.marca}| Ano: ${element.ano}| Preço: ${element.preco}\n`))
}


function filraVeiculo(lista) {
    let marca = prompt("Qual é a marca do veiculo?")

    const carros = lista.filter((carro) => carro.marca == marca)

    carros.forEach((element) => console.log(`ID: ${element.id}| Cor: ${element.cor}| Preço: R$${element.preco}`))

}


function atualizaVeiculo(lista) {
    let identificador = Number(prompt("Qual é o identificador do veiculo?"))

    const idSelecionado = lista.filter((pegaId) => pegaId.id == identificador)
    if (idSelecionado.length == 0) {
        alert("Veiculo não encontrado")
    } else {
        let novaCor = prompt("Digite a nova cor.")
        let novoPreco = Number(prompt("Digite o novo preço."))


        // EM DESENVOLVIMENTO
        
        // const listaAtualizada = idSelecionado.forEach((element) => element.cor = novaCor, element.preco = novoPreco);
        // lista.splice(idSelecionado - 1, 0, listaAtualizada)
    }
    console.log(idSelecionado);

}


console.log(listaVeiculos);