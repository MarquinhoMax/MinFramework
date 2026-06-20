import { Log, setElements, setProp } from "./funcoes.js";





export function Root(contents) {
    const element = document.body
    return setElements(element, contents)
}

export function Text(txt) {
    if (typeof (txt) == "number") {
        txt = String(txt)
    }
    const el = document.createTextNode(txt);
    return el
}



export function Main(contents) {
    const element = document.createElement("main");
    return setElements(element, contents)
}


export function Div(contents) {
    const element = document.createElement("div");
    return setElements(element, contents)
}

export function H1(contents) {
    const element = document.createElement("h1");
    return setElements(element, contents)
}
export function H2(contents) {
    const element = document.createElement("h2");
    return setElements(element, contents)
}
export function H3(contents) {
    const element = document.createElement("h3");
    return setElements(element, contents)
}
export function H4(contents) {
    const element = document.createElement("h4");
    return setElements(element, contents)
}
export function H5(contents) {
    const element = document.createElement("h5");
    return setElements(element, contents)
}
export function H6(contents) {
    const element = document.createElement("h6");
    return setElements(element, contents)
}


export function Botao(contents) {
    const element = document.createElement("button");
    return setElements(element, contents)
}


export function Tabela(contents) { const element = document.createElement("table"); return setElements(element, contents) }
export function Thead(contents) { const element = document.createElement("thead"); return setElements(element, contents) }
export function Tbody(contents) { const element = document.createElement("tbody"); return setElements(element, contents) }
export function Tfoot(contents) { const element = document.createElement("tfoot"); return setElements(element, contents) }
export function Th(contents) { const element = document.createElement("th"); return setElements(element, contents) }
export function Tr(contents) { const element = document.createElement("tr"); return setElements(element, contents) }
export function Td(contents) { const element = document.createElement("td"); return setElements(element, contents) }

export function Lbl(contents) { const element = document.createElement("label"); return setElements(element, contents) }


export function Chk(contents) {
    const chk = document.createElement("input");
    chk.Id = function (id) {
        if (id) this.id = id
        return this
    }
    chk.Class = function (clss) {
        if (clss) this.classList.add(...clss.split(" "))
        return this
    }

    chk.setAttribute("type", "checkbox")
    return chk
}


export function InputTxt(contents) {
    const inputtxt = document.createElement("input");
    inputtxt.Id = function (id) {
        if (id) this.id = id
        return this
    }
    inputtxt.Class = function (clss) {
        if (clss) this.classList.add(...clss.split(" "))
        return this
    }


    inputtxt.Value = function (val) {
        if (val) this.value=val
        return this
    }




    inputtxt.setAttribute("type", "text")
    inputtxt.setAttribute("placeholder", contents)
    return inputtxt
}


