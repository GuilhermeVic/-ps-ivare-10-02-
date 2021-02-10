function alerta() {
var botaoAlerta = document.getElementById("container").innerHTML=botaoAlerta;
});

function validaForm(dados) {

    var erros = [];

    if (dados.nome.length == 0) {
        erros.push("O código não pode ficar em branco");
    }

    if (dados.data.length == 0) {
        erros.push("O nome não pode ficar em branco");
    }
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

