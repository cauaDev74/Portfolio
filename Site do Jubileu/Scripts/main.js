const formularioJubileu = document.getElementById("cadastro");
formularioJubileu.addEventListener("submit", function logar(event){
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const senha = document.getElementById("senha").value;

    if(nome.lenght < 3){
        alert("Nome deve possuir mais de 3 letras.");
        return;
    }
    
    if(idade < 18 || idade > 120){
        alert("Idade deve estar entre 18 e 120 anos.");
        return;
    }

    if(senha.lenght < 6){
        alert("Senha deve possuir mais de 6 letras.");
        return;
    }

    const concluido = document.getElementById("result");
    concluido.innerHTML = `Bem vindo, ${nome}`;
    console.log('Tá a funcionar.');
});