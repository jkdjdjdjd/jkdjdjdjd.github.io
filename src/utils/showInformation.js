import { ElNotification } from 'element-plus'

export const showInformation = (type, message) => {
  ElNotification({
    type,
    message,
    duration: 2000
  })
}
