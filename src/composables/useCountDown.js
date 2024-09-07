import { ref, computed, onUnmounted } from 'vue'
import { dayjs } from 'element-plus'
export const useCountDown = () => {
  let timer = null
  const time = ref(0)
  const start = startTime => {
    time.value = startTime
    timer = setInterval(() => {
      time.value--
      if (time.value <= 0) {
        clearInterval(timer)
      }
    }, 1000)
  }
  const formatTime = computed(() => {
    return dayjs.unix(time.value).format('mm分ss秒')
  })
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start,
    time
  }
}
