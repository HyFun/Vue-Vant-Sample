<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 13:08:01
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-06 14:20:07
-->
<template>
  <div class="layout_bottom_nav">
    <div
      v-for="(item,index) in menuList"
      :key="index"
      :class="{'bottom_item':true,'active':activePath===item.path}"
      @click="clickItem(item)"
    >
      <svg-icon :icon="item.meta.icon" class-name="bottom_nav_icon" />
      <span>{{ item.meta.title }}</span>
    </div>
  </div>
</template>
<script>
import { routes } from '@/router'
export default {
  name: 'LayoutBottomNav',
  computed: {
    menuList() {
      return routes.filter(v => v.meta && !v.meta.hidden)
    },
    activePath() {
      if (this.$route.meta && this.$route.meta.activePath) {
        return this.$route.meta.activePath
      }
      return this.$route.path
    }
  },
  methods: {
    clickItem(item) {
      this.$router.replace(item.path)
    }
  }
}
</script>
<style lang="scss" scoped>
.layout_bottom_nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    display: flex;
    .bottom_item {
      width: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #737373;
      .bottom_nav_icon {
        width: 24px;
        height: 24px;
      }
    }

    .bottom_item.active {
      color: $colorPrimary;
    }
}
</style>
