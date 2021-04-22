<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-22 20:35:39
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-22 22:42:45
-->
<template>
  <div class="tag_wrap">
    <div v-for="(item, index) in options || []" :key="index" class="tag_item">
      <h3>
        <span :style="{ backgroundColor: item.color }" />
        {{ item[propReal.label] }}
      </h3>
      <ul v-if="Array.isArray(item[propReal.children])" class="tag_list">
        <li
          v-for="(subItem, subIndex) in item[propReal.children]"
          :key="index + '-' + subIndex"
        >
          <div class="tag_list_item" @click="clickTagItem(index,subIndex)">
            <span>{{ subItem[propReal.label] }}</span>
            <div v-show="subItem._show" class="tag_list_item_select">
              <span :style="{borderRightColor: item.color,borderBottomColor: item.color,}" />
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
  name: 'BtCheckTag',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    options: Array,
    props: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    propReal() {
      const defaultProp = {
        label: 'name',
        value: 'id',
        children: 'children'
      }
      return { ...defaultProp, ...this.props }
    },
    datas: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    /**
     * 点击选择item
     */
    clickTagItem(index, subIndex) {
      const parent = this.options[index]
      const item = parent[this.propReal.children][subIndex]
      // 从value中找出已经选择的
      const selectItem = this.value.find(v => v.parentLabelId === parent[this.propReal.value])
      if (selectItem) {
        // 说明已经有了
        if (parent.single === 0) {
          // 说明单选
          // 如果已经存在 则删除
          const index = selectItem.detailList.findIndex(v => v.id === item[this.propReal.value])
          // selectItem.detailList.splice(0,1)
          if (index !== -1) {
            // 存在
            item._show = false
            selectItem.detailList.splice(index, 1)
          } else {
            // 不存在 清空所有的
            selectItem.detailList.splice(0, selectItem.detailList.length)
            // 添加新的
            item._show = true
            selectItem.detailList.push({ id: item[this.propReal.value] })
          }
        } else if (parent.single === 1) {
          // 说明多选
          // 找到已经存在的
          const index = selectItem.detailList.findIndex(v => v.id === item[this.propReal.value])
          // 如果存在，则移除
          if (index !== -1) {
            // 存在
            item._show = false
            selectItem.detailList.splice(index, 1)
          } else {
            // 如果不存在，则添加
            item._show = true
            selectItem.detailList.push({ id: item[this.propReal.value] })
          }
        }
      } else {
        // 说明没有
        item._show = true
        this.value.push({
          single: parent.single,
          parentLabelId: parent[this.propReal.value],
          detailList: [{ id: item[this.propReal.value] }]
        })
      }
      this.$forceUpdate()
    },
    /**
     * 判断是否已经选中
     */
    hasChoosed(index, subIndex) {
      const parent = this.options[index]
      const item = parent[this.propReal.children][subIndex]
      const selectItem = this.value.find(v => v.parentLabelId === parent[this.propReal.value])
      if (selectItem) {
        // 在看detailList是否选中
        const e = (selectItem[this.propReal.children] || []).find(v => v.id === item[this.propReal.value])
        console.log(e)
        if (e) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tag_wrap {
  .tag_item {
    margin: 10px 0;
    background-color: #fff;
    h3 {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ddd;
      span {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 10px;
      }
    }

    .tag_list {
      display: flex;
      flex-wrap: wrap;
      padding: 5px;
      li {
        box-sizing: border-box;
        padding: 5px;
        min-width: 25%;
        .tag_list_item {
          position: relative;
          padding: 5px 10px;
          background-color: #ddd;
          text-align: center;
          border-radius: 4px;

          .tag_list_item_select {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 30px;
            height: 20px;
            span {
              position: absolute;
              right: 0;
              bottom: 0;
              width: 0;
              height: 0;
              border-left-width: 15px;
              border-top-width: 10px;
              border-bottom-width: 10px;
              border-right-width: 15px;
              border-color: transparent;
              border-style: solid;
              border-right-color: black;
              border-bottom-color: black;
            }
            i {
              position: absolute;
              bottom: 0;
              right: 0;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
