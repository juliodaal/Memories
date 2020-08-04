import { Form } from "./js/Form.js"
import { Cards } from "./js/Cards.js"
import { StylesResponsive } from "./js/StylesResponsive.js"

class App {
    constructor(){
        new Form()
        new Cards()
        new StylesResponsive()
    }    
}

new App()