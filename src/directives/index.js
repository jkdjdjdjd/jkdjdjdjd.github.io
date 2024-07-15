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
    //创建全局自定义指令v-myLoading(SVG,gif实现)
    app.directive('myLoading', {
      mounted(el, binding) {
        if (binding.value) {
          el.classList.add('loading')
          disableScroll()
        } else {
          el.classList.remove('loading')
          enableScroll()
        }
      },
      updated(el, binding) {
        if (binding.value) {
          el.classList.add('loading')
          disableScroll()
        } else {
          el.classList.remove('loading')
          enableScroll()
        }
      }
    })
    //创建全局自定义指令v-personLoading(HTLM,CSS实现)
    app.directive('personLoading', {
      mounted(el, binding) {
        const loadingBox = createLoadingBox()
        handleBinding(el, binding, loadingBox)
      },
      updated(el, binding) {
        const loadingBox = el.querySelector('.loading_box')
        handleBinding(el, binding, loadingBox)
      }
    })

    function createLoadingBox() {
      const loadingBox = document.createElement('div')
      loadingBox.classList.add('loading_box')
      loadingBox.innerHTML = ` 
        <div class="spinner">
          <div class="cube1"></div>
          <div class="cube2"></div>
        </div> 
        <p class="loading_text">加载中...</p>`
      return loadingBox
    }

    function handleBinding(el, binding, loadingBox) {
      if (binding.value) {
        if (!el.contains(loadingBox)) {
          el.appendChild(loadingBox)
        }
      } else {
        if (el.contains(loadingBox)) {
          el.removeChild(loadingBox)
        }
      }
    }

    // 禁用滚动
    function disableScroll() {
      document.body.style.overflow = 'hidden'
    }

    // 启用滚动
    function enableScroll() {
      document.body.style.overflow = ''
    }
  }
}
