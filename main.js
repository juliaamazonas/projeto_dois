const form = document.getElementById('AddContato');
let linhas = '';
const nome = [];
const telefone = [];
const inputTelefone = document.getElementById('TelefoneContato');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNome = document.getElementById('NomeContato');
        
    if (nome.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já foi inserido.`);
    }

    if (telefone.includes(inputTelefone.value)) {
        alert(`O telefone ${inputTelefone.value} já foi inserido.`);
    }

    nome.push(inputNome.value);
    telefone.push(parseFloat(inputTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNome.value = '';
    inputTelefone.value = '';
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
