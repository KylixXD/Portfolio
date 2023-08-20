const translations = {
    en: {
        Inicio: "Home",
        Sobre: "About ",
        Habilidades: "Skills",
        Projetos: "Projects",
        Contato: "Contact",
        saudacoes: "Hi, my name is",
        resumo: "and I have a lot to learn in this gigantic world called Programming.",
        Sobre_mim: "About me",
        estudos: "I'm learning these technologies",     
        projetos_fodas: "Cool Projects",
        projeto_1: "Project 1",
        projeto_2: "Project 2",
        projeto_3: "Project 3",
        projeto_4: "Project 4",
        projeto_5: "Project 5",
        projeto_6: "Project 6",
        Formulario: "Contact Form",
        'nome-form': "Name:",
        email: "Email:",
        'assunto-form': "Subject:",
        'mensagem-form': "Your message:",
        'enviar-form': "Send"
    },
    pt: {
        Inicio: "Início",
        Sobre: "Sobre",
        Habilidades: "Habilidades",
        Projetos: "Projetos",
        Contato: "Contato",
        saudacoes: "Oi, me chamo",
        resumo: "e tenho muito o que aprender nesse mundo gigantesco chamado Programação.",
        Sobre_mim: "Sobre mim",
        estudos: "Estou aprendendo estas tecnologias",
        projetos_fodas: "Projetos em andamento",
        projeto_1: "projeto 1",
        projeto_2: "projeto 2",
        projeto_3: "projeto 3",
        projeto_4: "projeto 4",
        projeto_5: "projeto 5",
        projeto_6: "projeto 6",
        Formulario: "Formulário para contato",
        'nome-form': "Nome:",
        email: "E-mail:",
        'assunto-form': "Assunto:",
        'mensagem-form': "Sua mensagem:",
        'enviar-form': "Enviar"
    }
};

function translatePage(language) {
    const translation = translations[language];

    for (const key in translation) {
        if (translation.hasOwnProperty(key)) {
            const element = document.getElementById(key);
            if (element) {
                if (element.tagName === "IMG") {
                    element.alt = translation[key];
                } else {
                    element.textContent = translation[key];
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.querySelector(".language-toggle");
    const languageLinks = languageToggle.querySelectorAll("a");

    languageLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const selectedLanguage = link.classList.contains("en") ? "en" : "pt";
            translatePage(selectedLanguage);
        });
    });
});
