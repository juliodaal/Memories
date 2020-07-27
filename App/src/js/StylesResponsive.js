import 
{ 
    asideContainer,
    mainContainer,
    myButtonMenu,
    myIconBackButton
} from "./Variables.js"

export class StylesResponsive {
    constructor(){
        this.checkReposiveValue() ?  this.changeGirdToResponsive() : this.changeGirdToNoResponsive() 
        window.onresize = () => this.checkReposiveValue() ?  this.changeGirdToResponsive() : this.changeGirdToNoResponsive()
        asideContainer.onmouseover = () => this.myOnMouseOver()
        asideContainer.onmouseout = () => this.myOnMouseOver()
        myButtonMenu.onclick = () => this.showAside()
    }
    // Methods
    checkReposiveValue(){
        return window.matchMedia("(max-width: 1242px)").matches
    }
    checkReposiveValue580(){
        return window.matchMedia("(max-width: 580px)").matches
    }
    changeGirdToResponsive(){
        asideContainer.classList.remove("col-sm-2")
        asideContainer.classList.add("width-aside-reponsive")
        mainContainer.classList.remove("col-sm-10")
        mainContainer.classList.add("col")
    }
    changeGirdToNoResponsive(){
        asideContainer.classList.remove("width-aside-reponsive")
        asideContainer.classList.add("col-sm-2")
        mainContainer.classList.remove("col")
        mainContainer.classList.add("col-sm-10")
    }
    myOnMouseOver(){
        let value580 = window.matchMedia("(max-width: 580px)").matches
        console.log(value580)
        if(this.checkReposiveValue() && !value580 ){
            console.log("hola")
            asideContainer.classList.toggle("width-aside-reponsive")
        }
    }
    showAside(){
        asideContainer.classList.toggle("open-aside");
    }
}