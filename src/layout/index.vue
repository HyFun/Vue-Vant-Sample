<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 13:00:13
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-06 14:14:13
-->
<template>
  <div class="layout">
    <Header />
    <router-view />
    <BottomNav />
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
  }

}
</script>
<style lang="scss" scoped>
.layout {
    position: relative;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 50px 0 60px 0;
}
</style>
