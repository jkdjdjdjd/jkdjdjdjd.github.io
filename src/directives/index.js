import { useIntersectionObserver } from '@vueuse/core'
//vue的插件写法
export const plugin = {
  install(app) {
    //创建全局图片懒加载指令v-img-lazy
    app.directive('img-lazy', {
      // 在元素挂载时执行的回调函数
      mounted(el, binding) {
        // 使用IntersectionObserver监听元素是否进入视口
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          // 如果元素进入视口，则设置图片的src属性为绑定值
          if (isIntersecting) {
            el.src = binding.value
            //第一次加载完成后，图片资源已经请求到，要停止监听
            stop()
          }
        })
      }
    })
  }
}
