<template>
  <view class="content">
    <view>{{msg}}</view>
    <!-- data-color是自定义属性，color是变量 -->
    <view :data-color="color">标签的属性中使用了color变量</view>
    <view
      v-for="(item,index) in list"
      :key="item.id"
    >
      {{index}}-{{item.text}}
    </view>
    <!-- v-if在隐藏标签的时候，是直接删除这个标签，而v-show是通过样式来隐藏标签的 -->
    <view v-if="false">v-if</view>
    <view v-show="true">v-show</view>

    <view>{{cnMoney}}</view>

    <!-- 自定义属性方式传参，需要把事件源对象传递过去 -->
    <view
      data-index="11"
      @click="handleClick('hello', $event)"
    >点击我试试</view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        msg: '我是小畅叙吖',
        color: 'aqua',
        money: 20000,
        list: [
          { text: '苹果', id: 0 },
          { text: '香蕉', id: 1 },
          { text: '樱桃', id: 2 }
        ]
      }
    },
    // 计算属性，cnMoney和filterList可以被当成data中的数据一样来使用
    computed: {
      cnMoney() {
        return `￥${this.money}`
      },
      filterList() {
        return this.list.filter(v => v.id <= 0)
      }
    },
    methods: {
      // 通过event接收自定义属性传递过来的参数
      handleClick(index, event) {
        console.log(index)
        console.log(event.currentTarget.dataset.index)
      }
    }
  }
</script>
