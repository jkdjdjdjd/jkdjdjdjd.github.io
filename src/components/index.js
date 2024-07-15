import Sku from '@/components/XtxSku/index.vue'
import PreviewImg from '@/components/PreviewImg.vue'
export const componentPlugin = {
  install(app) {
    app.component('XtxSku', Sku)
    app.component('XtxPreviewImg', PreviewImg)
  }
}
