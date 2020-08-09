export class Cards {
    constructor(){
    
    }

    masonryLayout(containerElement,itensElements,columns){
        const isColumns = document.getElementsByClassName("mansonry-column");
        
        let columnsElements = [];
        let columnsItems = [];
        let arrIsColumns = Array.from(isColumns)

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
        for(let i = 0;i < Math.abs(isColumns.length - columns); i++){
            let x =  isColumns[i];
            setTimeout(() => x.parentNode.removeChild(x),50)
        }
    }
}