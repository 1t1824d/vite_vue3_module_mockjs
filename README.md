#  vite_vue3_module_mockjs

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```


```
在Vue3项目中使用Mock.js可以模拟后端接口数据，方便前端开发和调试。下面是使用Mock.js的步骤：

1. 安装Mock.js：在Vue3项目的根目录下，使用以下命令安装Mock.js：
```
npm install mockjs --save-dev
```

2. 创建Mock数据：在项目的src目录下创建一个mock文件夹，并在该文件夹下创建一个mock.js文件。在mock.js文件中编写模拟的接口数据，例如：
```javascript
import Mock from 'mockjs';

// 模拟接口数据
Mock.mock('/api/user', 'get', {
  code: 200,
  message: 'success',
  data: {
    name: '@cname',
    age: '@integer(20, 40)',
    'gender|1': ['男', '女']
  }
});
```

3. 引入Mock数据：在项目的入口文件（一般是main.js）中引入mock.js文件，例如：
```javascript
import './mock/mock';
```

4. 使用Mock数据：在Vue组件中通过axios或其他网络请求库发送请求时，可以直接访问模拟的接口数据。例如，在一个组件的methods中发送GET请求：
```javascript
import axios from 'axios';

export default {
  methods: {
    getUserInfo() {
      axios.get('/api/user')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
```

以上就是在Vue3项目中使用Mock.js的基本步骤。
```