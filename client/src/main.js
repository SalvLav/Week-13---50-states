import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'//makesStateService available to the rest of the App

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService//"$stateService" is creating a new global property

app.mount('#app')








