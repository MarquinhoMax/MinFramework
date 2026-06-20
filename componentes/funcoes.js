import { Text } from "./elementos.js";
export const Log = console.log;


export const QueryId = (qry) => document.querySelector(`#${qry}`)
    



export function setProp(element) {
    if (element.tagName != "BODY") {
        element.Id = function (id) {
            if (id) {
                this.id = id;
            }
            return this
        }

        element.Class = function (clss) {
            if (clss) {
                this.classList.add(...clss.split(" "))
            }
            return this
        }

        element.Css = function (css) {
            if (css) {

                element.cssText = css
            }
            return this
        }


        element.Add = function (content) {
            setElements(this, content)
            return this
        }

        element.On = function (event, callback) {
            if (event && callback) {
                this.addEventListener(event, callback)
            }
            return this
        }


    }
    return element
}


function verificaEConvertParaLista(contents) {
    if (contents) {
        const contentsLista = Array.isArray(contents) ? contents : [contents];
        for (let i in contentsLista) {
            if (typeof (contentsLista[i]) == "string" || typeof (contentsLista[i]) == "number") {
                contentsLista[i] = Text(contentsLista[i])
            }
        }
        return contentsLista
    }
    return false
}

export function setElements(element, contents) {

    setProp(element)

    if (verificaEConvertParaLista(contents)) {
        const elemList = verificaEConvertParaLista(contents)
        for (let i in elemList) {
            element.appendChild(elemList[i])
        }
    }
    return element
}
