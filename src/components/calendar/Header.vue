<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-10 21:53:03
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-10 23:36:25
-->
<template>
  <div class="calendar_header_wrap">
    <i class="left" @click="clickPre">P</i>
    <span>{{ dateString }}</span>
    <i class="right" @click="clickNext">N</i>
  </div>
</template>
<script>
export default {
  props: {
    date: Date
  },
  computed: {
    dateString() {
      if (this.date) {
        return `${this.date.getFullYear()}年${this.date.getMonth() + 1}月`
      }
      return `-年-月`
    }
  },
  methods: {
    clickPre() {
      this.$emit('pre')
    },
    clickNext() {
      this.$emit('next')
    }
  }
}
</script>
<style lang="scss" scoped>
.calendar_header_wrap {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 10px;
    i {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        cursor: pointer;
        font-style: normal;
    }

    .left {
        left: 10px;
    }
    .right {
        right: 10px;
    }
    span {
        font-size: 18px;
        color: #333;
    }
}
</style>
