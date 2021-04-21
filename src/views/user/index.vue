<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 12:59:29
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-21 14:37:10
-->
<template>
  <div class="form">
    <van-button type="primary" @click.native="()=>{$router.push('/user/changepwd')}">修改密码</van-button>
    <van-button type="primary" @click.native="()=>{$router.push('/user/settag')}">设置标签</van-button>
  </div>
</template>
<style lang="scss" scoped>
.form {
  padding: 20px;
}
</style>
