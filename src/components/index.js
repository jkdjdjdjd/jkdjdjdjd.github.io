// import Address from '@/components/XtxAddress/index.vue'
import Sku from '@/components/XtxSku/index.vue'
import PreviewImg from '@/components/XtxPreviewImg/index.vue'

export const componentPlugin = {
  install(app) {
    app.component('XtxSku', Sku)
    app.component('XtxPreviewImg', PreviewImg)
    // app.component('XtxAddress', Address)
  }
}
