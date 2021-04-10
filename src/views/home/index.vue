<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 12:59:12
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-10 17:45:48
-->
<template>
  <div>
    首页
    <input type="file" accept="image/*" @change="onFileSelect">
  </div>
</template>
<script>
export default {
  name: '',
  methods: {
    onFileSelect(e) {
      console.log('图片选择完毕', e)
    }
  }
}
</script>
