import Title from "@/components/element/PageTitle.vue"
import Button from "@/components/element/ButtonCmp.vue"
import ModalView from "@/components/modal/ModalView.vue"
import ToolTip from "@/components/modal/Tooltip.vue"

export default {
  install(app) {
    app.component('Title', Title)
    app.component('Button', Button)    
    app.component('ModalView', ModalView)  
    app.component('ToolTip', ToolTip)  
  }
}