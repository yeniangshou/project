<template>
  <div class="layout">
      <!-- 路由菜单 -->
      <el-container>
          <el-aside>
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                unique-opened
                active-text-color="#ffd04b"
                @open="handleOpen"
                @close="handleClose">
                
                <aside-nav v-for="item in routes" :key="item.path" :items="item" :basePath="item.path"></aside-nav>
                
            </el-menu>
        </el-aside>
        <el-main>
            <tabview></tabview>
            <keep-alive>
              <router-view :key="key"></router-view>
            </keep-alive> 
        </el-main>
      </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import asideNav from './asideNav'
import tabview from './tabview'
export default {
  name: 'layout',
  data () {
    return {
        // 得到所有路由的菜单
        routes: []
    }
  },
  computed: {
       key() {
            return this.$route.path
        }
  },
  created(){
      this.routes = this.$router.options.routes
      Vue.component('aside-nav', asideNav);
      Vue.component('tabview', tabview);
  },
  methods: {
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 100vh;
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
