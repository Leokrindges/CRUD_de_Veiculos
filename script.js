
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
            filraVeiculo()
            break;
        case 4:
            AtualizaVeiculo()
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

    const veiculo = {
        id,
        modelo,
        marca,
        ano,
        cor,
        preco
    }

    listaVeiculos.push(veiculo)
}

function geraId() {
    criaID++
    return criaID
}


function listarVeiculos(lista) {
    lista.forEach((element) => document.write(`ID: ${element.id}| Modelo: ${element.modelo}| Marca: ${element.marca}| Ano: ${element.ano}| Preço: ${element.preco}`))
}

console.log(listaVeiculos);