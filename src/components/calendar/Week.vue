<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-10 21:43:30
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-10 22:03:02
-->
<template>
  <ul class="calendar_week_wrap">
    <li v-for="(item,index) in weeks" :key="index" :style="{color}">
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Week',
  props: {
    color: {
      type: String,
      default: '#737373'
    }
  },
  data() {
    return {
      weeks: ['日', '一', '二', '三', '四', '五', '六']
    }
  }
}
</script>
<style lang="scss" scoped>
    .calendar_week_wrap{
        overflow: hidden;
        li {
            position: relative;
            width: 14.28%;
            padding-top: 14.28%;
            float: left;
            span {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
