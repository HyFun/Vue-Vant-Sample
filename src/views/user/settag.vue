<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-21 14:34:49
 * @Description  :设置标签
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-21 15:14:56
-->
<template>
  <div>
    <div class="tag_item invite">
      <div class="title">
        <i />
        <span>特约标签</span>
      </div>
      <ul>
        <li v-for="(item,index) in inviteList" :key="index" :class="{active: index===current}">
          <div class="item" @click="current=index">
            {{ item }}
            <div class="active_wrap">
              <van-icon name="success" />
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      current: 0
    }
  },
  computed: {
    inviteList() {
      const list = []
      for (let i = 1; i <= 10; i++) {
        list.push(`标签${i}`)
      }
      return list
    }
  }
}
</script>
<style lang="scss" scoped>

$colorInvite: $colorPrimary;

.tag_item {
    background-color: #fff;
    .title {
        font-size: 18px;
        padding: 10px;
        display: flex;
        align-items: center;
        i {
            display: inline-block;
            width: 20px;
            height: 20px;
        }
        span {
            margin-left: 10px;
            font-weight: bold;
        }
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            width: 25%;
            box-sizing: border-box;
            padding: 5px;
            .item {
                position: relative;
                background-color: #f5f5f5;
                padding: 10px;
                border-radius: 5px;
                text-align: center;
                .active_wrap {
                    display: none;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 30px;
                    height: 20px;
                    &::after {
                        position: absolute;
                        top: 0;
                        left: 0;
                        content: '';
                        width: 0;
                        height: 0;
                        border-top: 10px solid transparent;
                        border-left: 15px solid transparent;
                        border-right: 15px solid transparent;
                        border-bottom: 10px solid transparent;
                    }
                    .van-icon-success {
                        position: absolute;
                        right: 2px;
                        bottom: 0;
                        z-index: 1;
                    }
                }
            }
        }
    }
}

.invite {
    .title i {
        background-color: $colorInvite;
    }

    .active .item{
        color: $colorInvite;
        .active_wrap {
            display: block;
           .van-icon-success{
               color: #fff;
           }
        }
        .active_wrap::after {
            border-right-color: $colorInvite;
            border-bottom-color: $colorInvite;
        }
    }
}
</style>
