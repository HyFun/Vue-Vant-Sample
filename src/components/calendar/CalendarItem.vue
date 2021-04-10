<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-10 22:04:01
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-11 00:51:30
-->
<template>
  <li class="calendar_day_item">
    <span :style="{color: item.color,...currentDateStyle,...currentActiveStyle}">
      {{ item.text+'' }}
    </span>
  </li>
</template>
<script>
export default {
  name: 'CalendarDay',
  props: {
    item: Object,
    activeColor: {
      type: String,
      default: '#D80C18'
    },
    activeDate: Date
  },
  computed: {
    isCurrentDate() {
      const date = new Date()
      const item = this.item.date
      return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}` === `${item.getFullYear()}/${item.getMonth()}/${item.getDate()}`
    },
    currentDateStyle() {
      if (this.isCurrentDate) {
        return { border: `1px solid ${this.activeColor}` }
      }
      return {}
    },
    isActiveDate() {
      const date = this.activeDate
      const item = this.item.date
      return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}` === `${item.getFullYear()}/${item.getMonth()}/${item.getDate()}`
    },
    currentActiveStyle() {
      if (this.isActiveDate) {
        return { backgroundColor: `${this.activeColor}`, color: '#fff' }
      }
      return {}
    }
  }
}
</script>
<style lang="scss" scoped>
.calendar_day_item {
  position: relative;
  width: 14.28%;
  padding-top: 14.28%;
  // float: left;
  cursor: pointer;
  span {
      position: absolute;
      left: 0;
      top: 0;
  box-sizing: border-box;
  border-radius: 5px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
}
</style>
