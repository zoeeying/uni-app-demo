<template>
  <view class="content">
    <view class="rpxClass">rpx演示</view>
    <view class="vwClass">vw演示</view>
    <view class="sassClass">sass演示</view>
  </view>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .rpxClass {
    /* rpx是小程序中的单位，750rpx等于屏幕的宽度 */
    width: 750rpx;
    height: 100px;
    background-color: aqua;
  }
  .vwClass {
    /* vw和vh是H5中的单位，100vw等于屏幕的宽度，100vh等于屏幕的高度 */
    width: 50vw;
    height: 100px;
    background-color: tan;
  }
  .content {
    .sassClass {
      /* 使用uni.scc中的sass变量 */
      color: $uni-color-primary;
      background: pink;
    }
  }
</style>
