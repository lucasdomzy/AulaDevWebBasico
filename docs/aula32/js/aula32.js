document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.querySelector('form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        let linha = document.createElement('tr');
        let colNome = documdent.createElement('td');
        let colEmail = document.createElement('td');
        let colSenha = document.createElement('td');

        colNome.innerHTML = document.getElementById('nome').value;
        colEmail.innerHTML = document.getElementById('email').value;
        colSenha.innerHTML = document.getElementById('senha').value;

        linha.appendChild(colNome);
        linha.appendChild(colEmail);
        linha.appendChild(colSenha);

        let corpoTabela = document.querySelector('tbody');
        corpoTabela.appendChild(linha);
        limpaForm();
    })
})