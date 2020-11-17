import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import App from './App.vue'
import 'tailwindcss/tailwind.css'

Vue.config.productionTip = false

const settings = {
   TInput: {
    classes: 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full leading-normal',
    variants: {
      error: 'text-red-600 bg-red-100 focus:outline-none focus:shadow-outline border border-red-300 rounded py-2 px-4 block w-full leading-normal placeholder-red-300',
      success: 'text-green-600 bg-green-100 focus:outline-none focus:shadow-outline border border-green-300 rounded py-2 px-4 block w-full leading-normal placeholder-green-300',
      fun: 'bg-orange-100 block border-2 border-orange-300 focus:border-orange-500 focus:outline-none leading-normal px-4 py-3 rounded-full shadow-inner w-full placeholder-orange-300'
    }
  }
}

Vue.use(VueTailwind, settings)

new Vue({
  render: h => h(App),
}).$mount('#app')
