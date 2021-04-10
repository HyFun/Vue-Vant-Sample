<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 13:00:13
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-10 21:27:40
-->
<template>
  <div class="layout" :style="{...layoutPadding}">
    <Header />
    <router-view />
    <BottomNav v-if="showBottom" />
  </div>
</template>
<script>
import Header from './Header'
import BottomNav from './BottomNav'
export default {
  name: 'Layout',
  components: {
    Header,
    BottomNav
  },
  computed: {
    showBottom() {
      if (this.$route.meta && this.$route.meta.activePath) {
        return true
      }
      return false
    },
    layoutPadding() {
      if (this.showBottom) {
        return { paddingBottom: '60px' }
      }
      return { paddingBottom: '0' }
    }
  }

}
</script>
<style lang="scss" scoped>
.layout {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 375px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 50px 0 60px 0;
}
</style>
