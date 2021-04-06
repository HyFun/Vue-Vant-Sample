<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 12:59:29
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-06 16:08:13
-->
<template>
  <div class="form">
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        name="用户名"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-button block type="primary" native-type="submit">提交</van-button>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.form {
  padding: 20px;
}

::v-deep.form {
  .van-field {
    position: relative;
    margin-bottom: 22px;
    border-radius: 5px;
    overflow: visible;
  }
  .van-field--error .van-field__control,
  .van-field--error .van-field__control::placeholder {
    color: #737373 !important;
  }

  .van-field__value {
    position: static;
  }
  .van-field__error-message {
    position: absolute;
    left: 10px;
    bottom: -24px;
  }
}
</style>
