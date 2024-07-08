import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia().use(piniaPluginPersistedstate)

export default pinia
export * from './modules/user'
export * from './modules/category'
