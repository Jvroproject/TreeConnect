const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(tab => tab.addEventListener("click", () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove("active"));
    tab.classList.add("active");
    
    const contents = document.querySelectorAll(".content");
    contents.forEach(content => content.classList.remove("show"));

    const contentid = tab.getAttribute("content-id");
    const content = document.getElementById(contentid);
    
    content.classList.add("show");
};

// Seleciona todos os elementos com a classe "read-more"
const readMoreButtons = document.querySelectorAll('.read-more');

// Adiciona um evento de clique a cada botão "Ler mais"
readMoreButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Encontra o parágrafo pai do botão clicado
        var paragraph = this.parentNode;
        
        // Adiciona ou remove a classe "expanded" para expandir ou retrair o texto
        paragraph.classList.toggle('expanded');
        
        // Altera o texto do botão de acordo com o estado expandido ou retraído
        if (paragraph.classList.contains('expanded')) {
            this.textContent = '[Recolher]';
        } else {
            this.textContent = '[Ler mais]';
        }
    });
});
