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
      console.log();
      this.testInterface();
  },
  methods: {
      testInterface() {
          this.$axios({
                methods: 'post',
                url: '/portal/r/jd?cmd=com.actionsoft.apps.walmart.portal_get_mportal_nav',
                data: {
                    sid: 'nosid',
                }
            })
            .then( (response) => {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
            });
        //   this.$axios.get('/portal/r/jd?cmd=com.actionsoft.apps.walmart.portal_get_mportal_nav', {
        //         params: {
        //           sid: 'nosid'
        //         }
        //     })
        //     .then( (response) => {
        //         console.log(response);
        //     })
        //     .catch( (error) => {
        //         console.log(error);
        //     });
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
