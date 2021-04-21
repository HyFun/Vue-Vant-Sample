<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 12:59:12
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-06 12:59:13
-->
<template>
  <div>
    首页
    <van-uploader
      :max-count="maxCount"
      :after-read="afterRead"
      :preview-full-image="false"
      :deletable="false"
      :capture="false"
    />

    <input type="file" accept="image/*">
  </div>
</template>

<script>
export default {

  data() {
    return {
      maxCount: 1,
      androidAttrs: ''
    }
  },

  mounted() {
    const u = navigator.userAgent
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    this.androidAttrs = isAndroid && u.match(/MMWEBSDK\/200502/i) && u.match(/XWEB\/2353/i)
  },

  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file)
    }
  }
}
</script>
