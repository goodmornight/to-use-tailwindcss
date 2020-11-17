# to-use-tailwindcss

## 运行项目

### 安装相关包

```
npm install
```

### 本地运行项目
```
npm run serve
```

### 编译生产
```
npm run build
```

## 配置过程

1. 安装 **Tailwind**

```bash
npm install tailwindcss -S
npm install vue-tailwind --save
```

2. 在 `main.js` 文件中引入 `taiwind.css`

```javascript
import Vue from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

3. 创建 `Tailwind` 配置文件

```bash
npx tailwind init
```

4. 修改`vue.config.js`文件

```javascript
module.exports = {
  css:{
    loaderOptions: {
      postcss: {
        plugins:[require('tailwindcss'), require('autoprefixer')]
      }
    }
  }
}
```

# 参考

---

1. [VueCLI3+项目使用tailwindcss，最简单配置](https://segmentfault.com/a/1190000021855655)
2. [vue-tailwind installation](https://www.vue-tailwind.com/docs/installation)
3. [tailwindcss installation](https://tailwindcss.com/docs/installation)
4. [How to add Tailwind to your Vue app](https://dev.to/mornir/add-tailwind-to-your-vue-app-5hea)

