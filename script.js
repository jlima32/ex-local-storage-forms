 //Recuperar valor do Local Storage
 document.getElementById('resultado').innerHTML = localStorage.getItem('dados');

function lerDados(){
    const dados = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        
    }
    //document.getElementById('resultado').innerHTML = nome;
    
    //Gravar no Local Storage
    localStorage.setItem('dados', JSON.stringify(dados));  
    
    //Recuperar valor do Local Storage
    document.getElementById('resultado').innerHTML = JSON.stringify(dados);
}

//Apagar do Local Storage
function removeDados(){
    localStorage.removeItem('dados');
    document.getElementById('resultado').innerHTML = localStorage.getItem('dados');
}