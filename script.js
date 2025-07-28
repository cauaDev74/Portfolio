
function botaoVerificar(){
    const idade = document.querySelector("#idade").value;

    if(idade < 15 || idade > 100){
        alert('Insira uma idade válida')
        return;
    }
}
