let btnAddTarefa = document.getElementById('adicionar-tarefa')
let tarefas = document.getElementById('tarefas')
let inputTarefa = document.getElementById('digitar-tarefa')
let listaTarefas = localStorage.getItem('listaTarefas')?JSON.parse(localStorage.getItem('listaTarefas')):[] 

const salvarLocalStorage = tarefas => {
    let tarefasJson = JSON.stringify(tarefas)
    localStorage.setItem('listaTarefas', tarefasJson)
    console.log("Tarefas salvas com sucesso!");
    
}
const mostrarNaTela = arrayTarefas => {
    arrayTarefas.forEach(textoTarefa => {
        let novaTarefa =  `<div class="col-md-4"> 
        <div class="card-tarefa">
            <div class="texto-tarefa">
        ${textoTarefa}
                </div>
                    <div class="botao-tarefa"> 
                <img src="imagens/check.png" width="32" alt="botao para checar tarefa" 
                 title="botao pra checar tarefa">
                     </div>
            </div>
        </div>`

    tarefas.insertAdjacentHTML('beforeend', novaTarefa) 

    let objetoTarefaNova = tarefas.lastElementChild

    let btnCheckTarefaNova = objetoTarefaNova.lastElementChild.lastElementChild

    btnCheckTarefaNova.onclick = (event) => {event.target.parentNode.parentNode.parentNode.remove()

    listaTarefas = listaTarefas.filter(valor => valor != textoTarefa)

    salvarLocalStorage(listaTarefas)        }
    })
}
mostrarNaTela(listaTarefas)

const criarTarefaComEnter = event =>{
    if(event.keyCode == 13 || event.type == 'click'){
    let valorDigitado = inputTarefa.value;
    if(valorDigitado == ""){
        alert("Você deve digitar uma tarefa primeiro!")
        return
    } listaTarefas.push(valorDigitado);
    salvarLocalStorage(listaTarefas);
    inputTarefa.value = "";
    let novaTarefa =  `<div class="col-md-4"> 
    <div class="card-tarefa">
    <div class="texto-tarefa">
    ${valorDigitado}
    </div>
    <div class="botao-tarefa"> 
        <img src="imagens/check.png" width="32" alt="botao para checar tarefa" 
        title="botao pra checar tarefa">
    </div>
</div>
</div>`

tarefas.insertAdjacentHTML('beforeend', novaTarefa)

let objetoTarefaNova = tarefas.lastElementChild
let btnCheckTarefaNova = objetoTarefaNova.lastElementChild.lastElementChild
btnCheckTarefaNova.onclick = (event) =>{ event.target.parentNode.parentNode.parentNode.remove()

listaTarefas = listaTarefas.filter(valor => valor != valorDigitado)
    
salvarLocalStorage(listaTarefas)  
}      


}

}
inputTarefa.addEventListener('keypress', criarTarefaComEnter)
btnAddTarefa.addEventListener('click', criarTarefaComEnter)