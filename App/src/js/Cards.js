import { containerCard, cards } from "./Variables.js"

export class Cards {
    constructor(){
        console.log(Math.floor(containerCard.offsetWidth / 300))
        window.onresize = () => {alert("hola")}
        this.masonryLayout(containerCard,cards, Math.floor(containerCard.offsetWidth / 300))
    }
    masonryLayout(containerElement,itensElements, columns){
        
        console.log("Math.floor(containerCard.offsetWidth / 300)")
        let columnsElements = [];
        let columnsItems = [];

        for(let i = 1;i <= columns; i++){
            let column = document.createElement("div")
            column.classList.add("mansonry-column", `column-${i}`)
            containerElement.appendChild(column)
            columnsElements.push(column)
        }

        for(let n = 0; n < columns; n++){
            columnsItems.push([])
        }

        for(let m = 0; m < Math.ceil(itensElements.length / columns); m++){
            for(let n = 0; n < columns; n++){
                columnsItems[n].push(itensElements[m * columns + n])
            }            
        }

        for(let n = 0; n < columns; n++){
            for(let m = 0; m < Math.ceil(itensElements.length / columns); m++){
                columnsElements[n].appendChild(columnsItems[n][m])
            }    
        }
    }
}