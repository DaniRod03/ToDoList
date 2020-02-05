let btnAddTarefa = document.getElementById('adicionar-tarefa')
let tarefas = document.getElementById('tarefas')
let inputTarefa = document.getElementById('digitar-tarefa')

btnAddTarefa.onclick= function(){
    let valorDigitado = inputTarefa.value;
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
tarefas.innerHTML += novaTarefa
}
