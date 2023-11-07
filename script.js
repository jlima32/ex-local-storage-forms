//Adicionando vários elementos

//Adicionar
function criarPessoa(pessoa) {
    // Pega os item que estão cadastrados no local storage, se estiver vazio cria um array vazio
    let pessoas = JSON.parse(localStorage.getItem("pessoas"));
    if (pessoas == null){pessoas = []}

    // Adiciona os dados ao Array
    pessoas.push(pessoa);

    // Adiciona no local storage
    localStorage.setItem("pessoas", JSON.stringify(pessoas))
}

function lerPessoa(pessoa){
    JSON.parse(localStorage.getItem(pessoa));
}

function excluirPessoa(i){
    // Pega os item que estão cadastrados no local storage
    let pessoas = JSON.parse(localStorage.getItem('pessoas'));

    // Apaga o item pelo valor do índice
    pessoas.splice(i,1);

    // guarda o novo Array no local storage
    localStorage.setItem("pessoas", JSON.stringify(pessoas))

    //Atualiza a lista no index
    listarPessoas()
}

// Adicionando pelo formulário
function salvarPessoa(){
    let pessoa = {
        nome: document.getElementById('nomeObj').value,
        idade: document.getElementById('idadeObj').value,
        email: document.getElementById('emailObj').value
    }
    criarPessoa(pessoa);
    limparFormulario();
    listarPessoas()
}

function limparFormulario(){
    const campos = document.querySelectorAll('.formValue')
    campos.forEach(campo => campo.value = "")
}

//Listando os registros no index
function listarPessoas(){
    let pessoas = JSON.parse(localStorage.getItem('pessoas'));
    document.getElementById('listaPessoas').innerHTML = '';
    for (let i = 0; i < pessoas.length; i++) {
        document.getElementById('listaPessoas').innerHTML += `<p>Nome: ${pessoas[i].nome} || Idade: ${pessoas[i].idade} || Email: ${pessoas[i].email} || <button type="button" onclick=excluirPessoa(${i})>Excluir</button> </p>`
    }
}

listarPessoas()

















//  //Recuperar valor do Local Storage
//  document.getElementById('resultado').innerHTML = localStorage.getItem('dados');

// function lerDados(){
//     const dados = {
//         nome: document.getElementById('nome').value,
//         idade: document.getElementById('idade').value,
        
//     }
//     //document.getElementById('resultado').innerHTML = nome;
    
//     //Gravar no Local Storage
//     localStorage.setItem('dados', JSON.stringify(dados));  
    
//     //Recuperar valor do Local Storage
//     document.getElementById('resultado').innerHTML = JSON.stringify(dados);
// }

// //Apagar do Local Storage
// function removeDados(){
//     localStorage.removeItem('dados');
//     document.getElementById('resultado').innerHTML = localStorage.getItem('dados');
// }

