<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-10 21:29:34
 * @Description  : 日历组件
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-11 01:51:14
-->
<template>
  <div class="calendar_wrap">
    <Header :date="currentMonth" @pre="onPre" @next="onNext" />
    <Week />
    <ul class="calendar_item_wrap" :class="{toggle}">
      <CalendarItem
        v-for="(item,index) in calendar.dates"
        v-show="item.show"
        :key="index"
        :item="item"
        :active-date="activeDate"
        @click.native="clickCalendarItem(item)"
      />
    </ul>
    <div @click="toggle=!toggle">点击</div>
  </div>
</template>
<script>
// 数据
import { getCurrentDate, getPreMonth, getCurrentMonth, getNextMonth, getCurrentCalendar } from './util'
// 组件
import Header from './Header'
import Week from './Week'
import CalendarItem from './CalendarItem'
export default {
  name: 'Calendar',
  components: {
    Header,
    Week,
    CalendarItem
  },
  data() {
    return {
      toggle: true,
      activeDate: getCurrentDate(),
      currentMonth: getCurrentMonth()
    }
  },
  computed: {
    calendar() {
      const calendar = getCurrentCalendar(this.currentMonth)
      const dateList = calendar.dates
      const index = dateList.findIndex(v => v.date.getTime() === this.activeDate.getTime())
      const divider = dateList[0].date.getTime() + 7 * 24 * 60 * 60 * 1000
      dateList.forEach((v, i) => {
        if (index !== -1) {
          // 说明包含 activeDate
          const start = Math.floor(index / 7) * 7
          const end = start + 6
          v.show = this.toggle || (i <= end && i >= start)
        } else {
          v.show = this.toggle || v.date.getTime() < divider
        }
      })
      return calendar
    }
  },
  mounted() {
    // 首先获取当前的日期

  },
  methods: {
    /**
     * 点击日历的每一天事件
     */
    clickCalendarItem(item) {
      this.activeDate = item.date
      if (!item.isCurrentMonth) {
        if (item.date.getDate() <= 6) {
          // 说明是下个月
          this.onNext()
        } else {
          // 说明是上个月
          this.onPre()
        }
      }
    },
    getCurrentMonth,
    /**
     * 点击上个月
     */
    onPre() {
      this.currentMonth = getPreMonth(this.currentMonth)
    },
    /**
     * 点击下个月
     */
    onNext() {
      this.currentMonth = getNextMonth(this.currentMonth)
    }
  }
}
</script>
<style lang="scss" scoped>
.calendar_wrap {
    padding: 10px;
}
.calendar_item_wrap {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
}
</style>
