<template>
  <div class="layout">
      <h1>首页内容</h1>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
    }
  },
  created(){
      this.testInterface();
  },
  methods: {
      testInterface() {
          this.$axios.get('/user/logininfo', {
                params: {
                   src: 'pc',
                   page: 'searchresult',
                   time: '1572593168797'
                }
            })
            .then( (response) => {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
            });
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
