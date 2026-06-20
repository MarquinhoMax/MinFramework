import { Botao, Chk, Div, H1, InputTxt, Lbl, Main, Root, Tabela, Tbody, Td, Th, Thead, Tr } from "../componentes/elementos.js";
import { Log, QueryId } from "../componentes/funcoes.js";
import { dados } from "./dados.js";





function TableList() {
    return Tabela([
        Thead(Tr([Th("Index"), Th("Nome"), Th("Data Nascimento")])),
        Tbody(
            dados.map((res, idx) =>
                Tr([
                    Td(idx + 1),
                    Td(`${res.nome}${res.sobrenome}`),
                    Td(res.data_nascimento),
                    Chk("Ok").Id(`chk${idx}`),
                ]).On("click", (e) => {
                    if (e.target.tagName != "INPUT") {
                        const elem = QueryId(`chk${idx}`)
                        elem.checked = !elem.checked

                    }

                })
            )).Id("tbody_list")
    ]).Class("tabela")
}


const lista = TableList()
lista.border = 1

Root([
    Main(
        Div([
            Div([InputTxt("Digite seu nome")
                .Id("txt_nome")
                .Class("txt-nome")
                .Value("Max Prudente da Silva"),
            Div(Botao("dd").Class("div-btn").On("click", () => { Log("kdfjlskfjlksdf") }))
            ]).Class("top-bar"),
            Div("Ola").Class("teste"),
            Div(
                lista
            ).Class("lista-container")
        ])
    )
])


if ('caches' in window) {
    caches.keys().then(console.log);
} else {
    console.log("API Cache não disponível");
}

// navigator.serviceWorker.getRegistrations()
//     .then(console.log)
//     .catch(console.error);

// navigator.serviceWorker.ready
//     .then(console.log)
//     .catch(console.error);    
navigator.serviceWorker.getRegistrations().then(console.log)