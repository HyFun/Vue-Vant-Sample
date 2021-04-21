/*
 * @Author       : heyongfeng
 * @Date         : 2021-04-10 22:06:36
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-11 00:22:40
 */
const DAY_TIMES = 24 * 60 * 60 * 1000

/**
 * 获取当前日期
 */
export function getCurrentDate(date = new Date()) {
  return new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`)
}
/**
 * 获取当前月 1 号
 */
export function getCurrentMonth(date = new Date()) {
  if (!(date instanceof Date)) {
    date = new Date()
  }
  const dateString = date.getFullYear() + '/' + (date.getMonth() + 1) + '/1'
  return new Date(dateString)
}

/**
 * 获取下个月 1 号
 */
export function getNextMonth(date = getCurrentMonth()) {
  let year = date.getFullYear(); let month = date.getMonth() + 1
  if (month === 12) {
    year++
    month = 1
  } else {
    month++
  }
  const dateString = `${year}/${month}/1`
  return new Date(dateString)
}

/**
 * 获取上个月 1 号
 */
export function getPreMonth(date = getCurrentMonth()) {
  let year = date.getFullYear(); let month = date.getMonth() + 1
  if (month === 1) {
    year--
    month = 12
  } else {
    month--
  }
  const dateString = `${year}/${month}/1`
  return new Date(dateString)
}

/**
 * 获取当前月的 calendar对象
 */
export function getCurrentCalendar(date = getCurrentMonth()) {
  const obj = {
    date
  }
  const next = getNextMonth(date)
  // 判断当前日期是否为周日
  let start = date; let end = next
  if (date.getDay() !== 0) {
    // 需要往前 date.getDay() 天
    start = new Date(date.getTime() - date.getDay() * DAY_TIMES)
  }
  // 判断结束日期是否为周日
  if (end.getDay() !== 0) {
    // 需要往后 7 - end.getDay() 天
    end = new Date(end.getTime() + (6 - end.getDay()) * DAY_TIMES)
  }
  //   const days = (end.getTime() - start.getTime()) / DAY_TIMES
  const dateList = []
  let d = start
  while (d) {
    const day = d
    const text = d.getDate()
    const isCurrentMonth = !((d.getTime() < date.getTime()) || (d.getTime() >= next.getTime()))
    const hasTask = false
    const color = isCurrentMonth ? '#333' : '#737373'
    dateList.push({
      date: day,
      text,
      isCurrentMonth,
      hasTask,
      color,
      show: true
    })
    if (d.getTime() < end.getTime()) {
      d = new Date(d.getTime() + DAY_TIMES)
    } else {
      d = undefined
    }
  }
  obj.dates = dateList
  return obj
}

