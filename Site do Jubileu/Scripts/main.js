const botaoL = document.getElementById("botao");
botaoL.addEventListener("submit", function logar(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const senha = document.getElementById("senha").value;

    if(nome.lenght < 3){
        alert("Nome deve possuir mais de 3 caracteres");
        return;
    }
    if(idade < 18 || idade > 100){
        alert("Idade deve ser maior que 17 e menor que 100");
        return;
    }
    if(senha.lenght < 6){
        alert('Senha inválida.');
        return;
    }

    const concluido = document.getElementById("result");
    concluido.innerText(`Bem vindo, ${nome}.`);
    console.log("Tá funfando");
})

