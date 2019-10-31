<template>
  <div class="asideNav">
    <!-- 当是一级菜单展示 -->
    <router-link v-if="!items.children && !items.showTrue" :to="items.path">
        <el-menu-item :index="items.path">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ items.meta.title }}</span>
        </el-menu-item>
    </router-link>

    <!-- 否则2个以上子菜单 -->
    <el-submenu :index="items.path"  v-else>
         <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ items.meta.title }}</span>
         </template>
        
        <el-menu-item-group :index="child.path" :key="child.path" v-for="child in items.children">
            <router-link v-if="!child.children" :to="resolvePath(child.path)">
                <el-menu-item :index="child.path">
                    {{child.meta.title}}
                </el-menu-item>
            </router-link>
            <!-- 三级以上菜单 -->
            <aside-nav v-else 
                :key="child.path" :items="child" :basePath="resolvePath(child.path)">
            </aside-nav>
        </el-menu-item-group> 
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'layout',
  data () {
    return {
        // 得到所有路由的菜单
        routes: []
    }
  },
  props: {
      items: {
          type: Object,
          default: {}
      },
      basePath: {
          type: String,
          default: ''
      }
  },
  methods: {
    resolvePath(routePath) {
        return path.resolve(this.basePath, routePath)
    },
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
