const botao = document.querySelector(".botao");
const anotar = document.querySelector(".input-anotar");
const listanatela = document.querySelector(".lista");
let listao = []

function Tarefas(){
    listao.push({
        Trabalho: anotar.value,
        concluida: false,
    })
    anotar.value = '';
    MostrarnaTela()
}

function MostrarnaTela(){
    let novalista = '';
    listao.forEach((item, posicao) => {
        novalista = novalista + 
        
        `
        <li class="listas ${item.concluida && 'MudarCor'}">
            <img src="./assets/icons8-selecionado-48.png" alt="icone checklist" onclick= "ConcluirTarefa(${posicao})">
            <p>${item.Trabalho}</p>
            <img class="lixeira" src="./assets/icons8-lixeira-96.png" alt="icone lixeira" onclick= "Deletar(${posicao})">
        </li>

        `
    }) 
    
   listanatela.innerHTML = novalista

   localStorage.setItem('lista', JSON.stringify(listao))
}

function ConcluirTarefa(posicao){
    listao[posicao].concluida = !listao[posicao].concluida
    

    MostrarnaTela()
}


function Deletar(posicao){
    listao.splice(posicao, 1)

    MostrarnaTela()
}

function GuardarTarefas(){
    const TarefasSalvas = localStorage.getItem('lista')

    if(TarefasSalvas){
        listao = JSON.parse(TarefasSalvas)
    }
    

    MostrarnaTela()
}
GuardarTarefas()

botao.addEventListener('click')