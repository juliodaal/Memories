import 
{ 
    myForm,
    myFormCollapse,
    mySerachingContainer,
    myButtonBackSearching,
    myContentSearching,
    myButtonFormSearch,
    myContainerFormCollapse,
    myButtonFormSearchResponsive
} from "./Variables.js"

export class Form {

    constructor(){
        myForm.onfocus = () => this.onFocus()
        myButtonBackSearching.onclick = () => this.focusOut()
        myButtonFormSearch.onclick = () => this.showForm()
        myButtonFormSearchResponsive.onclick = () => this.showForm()
    }

    // Methods
    onFocus(){
        setTimeout(() => mySerachingContainer.classList.remove("display-none"),100)
        setTimeout(() => myContentSearching.classList.remove("opacity"),300)
        mySerachingContainer.classList.add("mySeraching-container-active")
    }
    focusOut(){
        mySerachingContainer.classList.remove("mySeraching-container-active")
        setTimeout(() => {mySerachingContainer.classList.add("display-none"), myContentSearching.classList.add("opacity")},500)
        myContainerFormCollapse.classList.add("d-none")
        myContainerFormCollapse.classList.remove("d-flex")
        myContainerFormCollapse.classList.remove("visibility-5ms")
    }
    showForm(){
        myContainerFormCollapse.classList.remove("d-none")
        myContainerFormCollapse.classList.add("d-flex")
        myContainerFormCollapse.classList.add("visibility-5ms")
        myFormCollapse.focus()
        this.onFocus()
    }
}