import 
{ 
    asideContainer,
    mainContainer,
    myButtonMenu,
    allcards,
    containerCard
} from "./Variables.js"
import { Cards } from "./Cards.js"

export class StylesResponsive {
    constructor(){
        let cards = new Cards()
        let id;
        cards.masonryLayout(containerCard,allcards, Math.floor(containerCard.offsetWidth / 300))
        this.checkReposiveValue1242() ?  this.changeGirdToResponsive1242() : this.changeGirdToNoResponsive1242()
        this.checkReposiveValue580() ?  this.changeGirdToResponsive580() : this.changeGirdToNoResponsive580()
        window.onresize = () => {
            clearTimeout(id)
            id = setTimeout(() => this.mansonry(cards),100)
            this.checkReposiveValue1242() ?  this.changeGirdToResponsive1242() : this.changeGirdToNoResponsive1242()
            this.checkReposiveValue580() ?  this.changeGirdToResponsive580() : this.changeGirdToNoResponsive580()
        }
        asideContainer.onmouseover = () => this.myOnMouseOver()
        asideContainer.onmouseout = () => this.myOnMouseOver()
        myButtonMenu.onclick = () => this.showAside()
    }
    mansonry(cards){
        cards.masonryLayout(containerCard,allcards, Math.floor(containerCard.offsetWidth / 300))
    }
    checkReposiveValue1242(){
        return window.matchMedia("(max-width: 1242px)").matches
    }
    checkReposiveValue580(){
        return window.matchMedia("(max-width: 580px)").matches
    }
    changeGirdToResponsive1242(){
        asideContainer.classList.remove("col-sm-2")
        asideContainer.classList.add("width-aside-reponsive")
        mainContainer.classList.remove("col-sm-10")
        mainContainer.classList.remove("offset-sm-2")
        mainContainer.classList.add("col")
    }
    changeGirdToNoResponsive1242(){
        asideContainer.classList.remove("width-aside-reponsive")
        asideContainer.classList.add("col-sm-2")
        mainContainer.classList.remove("col")
        mainContainer.classList.add("offset-sm-2")
        mainContainer.classList.add("col-sm-10")
    }
    myOnMouseOver(){
        let value580 = window.matchMedia("(max-width: 580px)").matches; 
        if(this.checkReposiveValue1242() && !value580 ){
            asideContainer.classList.toggle("width-aside-reponsive")
        }
    }
    changeGirdToResponsive580(){
        asideContainer.classList.remove("aside-in")
        asideContainer.classList.add("aside-out")
        asideContainer.classList.add("display-none") 
        asideContainer.classList.add("opacity")
    }
    changeGirdToNoResponsive580(){
        asideContainer.classList.remove("aside-in")
        asideContainer.classList.remove("aside-out")
        asideContainer.classList.remove("display-none") 
        asideContainer.classList.remove("opacity")
    }
    showAside(){
        if(asideContainer.classList.contains("aside-in")){
            asideContainer.classList.remove("aside-in")
            asideContainer.classList.add("aside-out")
            setTimeout(() => {
                asideContainer.classList.add("display-none"), 
                asideContainer.classList.add("opacity")
            },500)
        } else {
            asideContainer.classList.remove("aside-out")
            asideContainer.classList.add("aside-in")
            setTimeout(() => asideContainer.classList.remove("display-none"),100)
            setTimeout(() => asideContainer.classList.remove("opacity"),150)
        }
    }
}