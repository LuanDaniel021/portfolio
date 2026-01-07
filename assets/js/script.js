
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function load_projects(isShuffle, array) {

    const data =  isShuffle ? shuffle([...array]) : array;

    const container = document.getElementById("projects-container");

    const cards = container.querySelectorAll(".card");

    for (let i = 0; i < cards.length; i++) {

        if (i >= data.length) break;

        const project = data[i];

        cards[i].innerHTML =  `
            <h3>${project.title}</h3>
            <p>${project.description}</p>

            <div class="techs">
              ${project.techs.map(t => `<span>${t}</span>`).join("")}
            </div>

            <a class="btn-project" href="${project.link}" target="_blank">
              Ver Repositório <i class="fas fa-code"></i>
            </a>
        `;
    }
}

function load_skills(isShuffle, array) {
    const data =  isShuffle ? shuffle([...array]) : array;

    const container = document.getElementById("skills-container");

    container.innerHTML = `${skills.map(t => `<span>${t}</span>`).join("")}`;
}


load_projects(true, [
{
    title: "ScriptDraw: Interpretador Geométrico",
    description: "Transforma instruções de texto em arte visual, usa uma linguagem própria de comandos de direções.",
    techs: ["JavaScript", "Canvas API", "Logic"],
    link: "https://luandaniel021.github.io/script-draw/"
},
{
    title: "DocGen: Gerador de Documentação",
    description: "Ferramenta que transforma comentários e estruturas de documentação limpas e organizadas em Markdown.",
    techs: ["JavaScript", "RegEx", "String Parsing"],
    link: "https://luandaniel021.github.io/doc-gen/"
},
{
    title: "StoreManager: Gerenciador de Loja",
    description: "Sistema de gestão comercial. Controle de cadastros, histórico de transações e PDV intuitivo.",
    techs: ["JavaScript", "MySql", "CRUD"],
    link: "https://luandaniel021.github.io/store-mamager/"
}
]);

load_skills(true, ["JavaScript", "Java", "MySql", "HTML5 & CSS3", "Lógica de Programação"]);
