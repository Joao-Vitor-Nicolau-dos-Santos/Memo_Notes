// Função para alternar o dropdown
function alternarDropdown() {
    document.getElementById("meuDropdown").classList.toggle("mostrar");
}

// Fechar o dropdown se o usuário clicar fora dele
window.onclick = function(evento) {
    if (!evento.target.matches('.botao-dropdown')) {
        var dropdowns = document.getElementsByClassName("conteudo-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var dropdownAberto = dropdowns[i];
            if (dropdownAberto.classList.contains('mostrar')) {
                dropdownAberto.classList.remove('mostrar');
            }
        }
    }
}
