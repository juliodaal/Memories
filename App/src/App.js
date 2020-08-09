import { Form } from "./js/Form.js"
import { Cards } from "./js/Cards.js"
import { StylesResponsive } from "./js/StylesResponsive.js"

class App {
    constructor(){
        new StylesResponsive()
        new Form()
        new Cards()         
    } 
}

new App()