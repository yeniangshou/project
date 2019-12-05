<template>
  <div class="hello">
    <h1>国际化语言：{{$t('person.name')}}</h1>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { resolve } from 'q'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.testAsync()
    // 输出 Promise {<resolved>: undefined}
    // __proto__: Promise
    // [[PromiseStatus]]: "resolved"
    // [[PromiseValue]]: undefined
    console.log(this.getResolve())
  },
  methods: {
    // async 返回一个promise对象，需要使用then的注册输出返回值，然后这里是个异步操作
    async testAsync() {
      // 在这里两个接口查看异步操作之间顺序和结果
      // await这里等待promise的值得返回reolve，在执行下面的值
      var d = await new Promise(function(resolve, reject) {
        console.log(1)
        setTimeout(() => {
          // 这里就可以返回接口的结果值
          resolve(3)
        }, 1)
        //  resolve(3)
      })
      var f = await new Promise(function(resolve, reject) {
        setTimeout(() => {
          // 这里就可以返回接口的结果值
          resolve(4)
        }, 1)
        //  resolve(3)
      })
      // 这里明显是先输出3，然后再输出4
      console.log(d)
      console.log(f)
      console.log(555)
    },
    async getResolve() {
      setTimeout(() => {
        return '3'
      }, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .hello {
     h1{
         color:red;
     }
 }
</style>
