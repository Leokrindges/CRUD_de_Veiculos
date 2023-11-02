const listaVeiculos = []
let criaID = 0;
let opcao = 1

while (opcao != 6) {
    opcao = Number(prompt(`Bem-vindo ao sistema de CRUD de veículos:\nNo momento, o sistema tem ${listaVeiculos.length} carro(s) cadastrado(s).\n Escolha uma das opções para interagir com o sistema:\n 1 - Cadastrar veículo\n 2 - Listar todos os veículos\n 3 - Filtrar veículos por marca\n 4 - Atualizar veículo\n 5 - Remover veículo\n 6 - Sair do sistema`))

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
            removerVeiculo(listaVeiculos)
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

//Gera ids automáticos
function geraId() {
    criaID++
    return criaID
}


function listarVeiculos(lista) {
    //imprime veiculos 
    let imprimeLista = "Lista de veiculos cadastrados:\n"

    for (let i = 0; i < lista.length; i++) {
        imprimeLista += (`ID: ${lista[i].id}| Modelo: ${lista[i].modelo}| Marca: ${lista[i].marca}| Ano: ${lista[i].ano}| Cor: ${lista[i].cor}| Preço: ${lista[i].preco}\n`)
    }

    alert(imprimeLista);
}


function filraVeiculo(lista) {
    let marca = prompt("Qual é a marca do veiculo?")

    let imprimeLista = `Veiculos encontrados com a marca ${marca}\n`

    //busca marca que for = a marca informada usando filter
    const carros = lista.filter((carro) => carro.marca == marca)

    //imprime veiculos
    if (carros.length == 0) {
        alert("Marca não encontrada")
    } else {
        for (let i = 0; i < carros.length; i++) {
            imprimeLista += (`ID: ${carros[i].id}|Modelo: ${carros[i].modelo}| Cor: ${carros[i].cor}| Preço: R$${carros[i].preco}\n`)
        }
        alert(imprimeLista)
    }
}


function atualizaVeiculo(lista) {
    let identificador = Number(prompt("Qual é o identificador do veiculo?"))

    //busca veiculo com o mesmo id usando filter metodo de filtar passando parâmentros
    const carroSelecionado = lista.filter((carro) => carro.id == identificador)

    //verifica se existe veiculos
    if (carroSelecionado.length == 0) {
        alert("Veiculo não encontrado")
    } else {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].id == identificador) {
                let novaCor = prompt("Digite a nova cor.")
                let novoPreco = Number(prompt("Digite o novo preço."))
                lista[i].cor = novaCor
                lista[i].preco = novoPreco
                alert("Alterado com sucesso!!")
            }
        }
    }
}

function removerVeiculo(lista) {
    let identificador = Number(prompt("Qual é o identificador do veiculo?"))

    const carroSelecionado = lista.filter((carro) => carro.id == identificador)
    if (carroSelecionado.length == 0) {
        alert("Veiculo não encontrado")
    } else {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].id == identificador) {
                let apagar = prompt("Deseja apagar? [S/N]")
                if (apagar == "S" || apagar == "s") {
                    lista.splice(lista[i], 1) //metodo de remoção
                    alert("Removido com Sucesso!!")
                }
            }
        }
    }
}