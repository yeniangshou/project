<template>
  <div class="layout">
      <h1>首页内容</h1>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
    }
  },
  created() {
    console.log()
    const token = 'aaa'
    // 1 代表过期时间是1天
    this.$cookie.set('tooken', token, 1)
    this.testInterface()
  },
  methods: {
    testInterface() {
      var params = {
        userid: '5476',
        pwd: '18ed9e5f94b114f658dee20b46c34c88d0c5a63dd36b356d7a94172a9c7c07304c8741415bdbbbe18b31b140ff98a124d770aeb523505433b5007a3729626a65cef9188ac1ed1bd7428fd8b42f859a37488dd2d2c88afd79149b665aff22db12d68899245b3a63020df7c2852ed8b542b21f2387bb59609f1f85d8215acf7837',
        cmd: 'CLIENT_USER_LOGIN',
        deviceType: 'pc',
        timeZone: '-8',
        pwdEncode: 'RSA',
        lang: 'cn',
        sid: '',
        _CACHE_LOGIN_TIME_: '1574152339023'
      }
      this.$api.login.loginAPI(params).then((data) => {
        console.log(data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1 {
    font-size: 0.5rem;
    color: red;
}
</style>
