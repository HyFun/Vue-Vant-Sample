<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 14:04:20
 * @Description  : 头部
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-06 14:20:28
-->
<template>
  <div class="layout_header">
    <div v-if="$route.meta&&$route.meta.showBack" class="header_back">
      <svg-icon icon="back" />
    </div>
    <div v-if="$route.meta&&$route.meta.title" class="header_title">
      {{ $route.meta.title||'' }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    color: #fff;
    background-color: $colorPrimary;
    .header_back {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .header_title {
        line-height: 50px;
        text-align: center;
        padding: 0 52px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
