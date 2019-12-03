<template>
  <div class="tabview">
      <router-link v-for="tag in tags" :class="isActive(tag) ? 'isActive': ''" :key="tag.path" :to="tag.path">
        <el-tag
            closable
            :disable-transitions="false"
            @close.prevent.stop="handleClose(tag)">
            {{ tag.name }}
        </el-tag>
      </router-link>
  </div>
</template>

<script>
import {mapGetters, mapMutations } from 'vuex'
export default {
  name: 'tabview',
  computed: {
    ...mapGetters(['tags'])
  },
  watch: {
    $route () {
      this.addTags(this.$route)
    }
  },
  created () {
    this.addTags(this.$route)
  },
  methods: {
    ...mapMutations(['addTags', 'delTag']),
    handleClose (tag) {
      this.delTag(tag)
      if (this.isActive(tag)) {
        const lastTag = this.tags.splice(-1)[0]

        if (lastTag) {
          this.$router.push(lastTag.path)
        } else {
          this.$router.push('/layout')
        }
      }
    //    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    isActive (tag) {
      if (tag.name == this.$route.name) {
        return true
      }
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1 {
    font-size: 50px;
    color: red;
}

.isActive {

    .el-tag {
         color: red;
         background: blue;
    }
}
</style>
