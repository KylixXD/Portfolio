const logo = document.querySelector("#logo");
logo.innerHTML = "Teste";

fetch("../content/pt-br.json").then(response => response.json()).then((data) =>{
    console.log(data);
    // Header
    logo.innerHTML = data.header.logo;
});