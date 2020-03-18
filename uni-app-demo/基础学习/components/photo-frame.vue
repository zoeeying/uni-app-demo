<template>
  <view class="content">
    <image
      :src="src"
      class="photo_frame"
      @click="handleClick"
    />
  </view>
</template>

<script>
  export default {
    props: {
      src: String
    },
    methods: {
      handleClick() {
        // this.$emit('自定义事件名称', '要传递的参数')
        this.$emit('srcChange', this.src)
      }
    }
  }
</script>

<style>
  .photo_frame {
    border-radius: 50%;
  }
</style>
