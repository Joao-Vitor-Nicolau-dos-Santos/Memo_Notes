// document.addEventListener('DOMContentLoaded', function() {
//     // Verifica se há uma cor de fundo salva no localStorage
//     const savedColor = localStorage.getItem('backgroundColor');
//     if (savedColor) {
//         document.body.style.backgroundColor = savedColor;
//     }

//     // Função para alterar a cor e salvar no localStorage
//     window.changeColor = function(color) {
//         document.body.style.backgroundColor = color;
//         localStorage.setItem('backgroundColor', color);
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    // Verifica se há uma cor de fundo salva no localStorage
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.querySelector('.container').style.backgroundColor = savedColor;
    }

    // Função para alterar a cor e salvar no localStorage
    window.changeColor = function(color) {
        document.body.style.backgroundColor = color;
        document.querySelector('.container').style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }
});
