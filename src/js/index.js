const formulario = document.getElementById('formulario');
const camposObrigatorios = document.querySelectorAll('.input');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    validacaoDoCampo(camposObrigatorios);
});

function validacaoDoCampo(camposObrigatorios) {
    camposObrigatorios.forEach(itens => {
        const controle = itens.parentElement;
        const mensagemDeErro = controle.querySelector('.campo-obrigatorio');
        const bordaVermhelha = controle.querySelector('.input');

        if (itens.value === '') {
            mensagemDeErro.classList.add('incorreto')
            bordaVermhelha.classList.add('incorreto')

            itens.classList.remove('correto');
        }else {
            itens.classList.add('correto');

            mensagemDeErro.classList.remove('incorreto');
            bordaVermhelha.classList.remove('incorreto');
        }
    })
}