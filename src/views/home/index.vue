<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 12:59:12
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-21 15:33:15
-->
<template>
  <div class="container">
    <van-button type="primary" plain @click="clickCalendar">日历组件</van-button>
  </div>
</template>
<script>
export default {
  name: '',
  methods: {
    clickCalendar(e) {
      this.$router.push('/home/calendar')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .van-button {
    width: 100%;
  }
}
</style>
