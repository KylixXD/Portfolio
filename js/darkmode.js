const darkModeButton = document.querySelector("#dark-mode-toggle");
const rootElement = document.documentElement;

const lightTheme = {
    "--background-color": "#dee2e6",
    "--text-color": "#000",
    "--verde-claro": "#80ed99",
    "--verde-hover": "#57cc99",
    "--cor-botao": "#43b45d"
}

const darkTheme = {
    "--background-color": "#343a40",
    "--text-color": "#fff",
    "--verde-claro": "#3f7e5e",
    "--verde-hover": "#c7f9cc",
    "--cor-botao": "#6a994e"
}

let currentTheme = lightTheme; 

darkModeButton.addEventListener('click', function(){
    currentTheme = (currentTheme === lightTheme) ? darkTheme : lightTheme;
    changeTheme(currentTheme);
})

function changeTheme(theme){
    for (let prop in theme){
        changeProperty(prop, theme[prop]);
    }
}

function changeProperty(property, value){
    rootElement.style.setProperty(property, value);
}
