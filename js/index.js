//Dark Mode 
// // Acessa o botão de toggle
// const darkModeToggle = document.getElementById("darkmode-button");

// // Adiciona um listener de evento ao botão
// darkModeToggle.addEventListener("click", () => {
//   // Seleciona o elemento <html> para aplicar as mudanças de estilo
//   const html = document.querySelector("html");

//   // Adiciona ou remove a classe "dark-mode" do <html> para alternar os estilos
//   html.classList.toggle("dark-mode");
// });

function darkModeToggle (){
    const body = document.body;
    body.classList.toggle('dark-mode');
}