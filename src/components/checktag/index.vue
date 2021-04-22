<!--
 * @Author       : heyongfeng
 * @Date         : 2021-04-22 20:35:39
 * @Description  :
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-22 23:36:42
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
            <span :style="{color: selectAll.includes(subItem[propReal.value])?item.color:'#333'}">{{ subItem[propReal.label] }}</span>
            <div v-show="selectAll.includes(subItem[propReal.value])" class="tag_list_item_select">
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
    },
    selectAll() {
      const list = []
      this.datas.forEach(v => {
        list.push(v.parentLabelId)
        if (Array.isArray(v.detailList)) {
          v.detailList.forEach(item => {
            list.push(item.id)
          })
        }
      })
      return list
    }
  },
  methods: {
    /**
     * 点击选择item
     */
    clickTagItem(index, subIndex) {
      const datas = JSON.parse(JSON.stringify(this.datas || []))

      const parent = this.options[index]
      const item = parent[this.propReal.children][subIndex]
      // 从value中找出已经选择的
      const selectItem = datas.find(v => v.parentLabelId === parent[this.propReal.value])
      if (selectItem) {
        // 说明已经有了
        if (parent.single === 0) {
          // 说明单选
          // 如果已经存在 则删除
          const index = selectItem.detailList.findIndex(v => v.id === item[this.propReal.value])
          // selectItem.detailList.splice(0,1)
          if (index !== -1) {
            // 存在
            selectItem.detailList.splice(index, 1)
          } else {
            // 不存在 清空所有的
            selectItem.detailList.splice(0, selectItem.detailList.length, { id: item[this.propReal.value] })
            // 添加新的
            // selectItem.detailList.push()
          }
        } else if (parent.single === 1) {
          // 说明多选
          // 找到已经存在的
          const index = selectItem.detailList.findIndex(v => v.id === item[this.propReal.value])
          // 如果存在，则移除
          if (index !== -1) {
            // 存在
            selectItem.detailList.splice(index, 1)
          } else {
            // 如果不存在，则添加
            selectItem.detailList.push({ id: item[this.propReal.value] })
          }
        }
      } else {
        // 说明没有
        datas.push({
          single: parent.single,
          parentLabelId: parent[this.propReal.value],
          detailList: [{ id: item[this.propReal.value] }]
        })
      }
      this.datas = datas
      // this.$forceUpdate()
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
