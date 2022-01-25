// Modal pre-order

var btn = document.querySelector('#btn')
var cadastro = document.querySelector('.cadastro')
var fechar = document.querySelector('.fechar')


btn.addEventListener('click', function() {
    cadastro.classList.add('on')
})

fechar.addEventListener('click', function() {
    cadastro.classList.remove('on')
})

