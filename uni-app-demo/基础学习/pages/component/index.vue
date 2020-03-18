<template>
  <view class="content">
    <!-- 不推荐小驼峰的写法 -->
    <!-- <photoFrame></photoFrame> -->
    <photo-frame
      :src="src1"
      @srcChange="handleSrcChange"
    ></photo-frame>
    <photo-frame
      :src="src2"
      @srcChange="handleSrcChange"
    ></photo-frame>
  </view>
</template>

<script>
  import photoFrame from '@/components/photo-frame'
  export default {
    data() {
      return {
        src1:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584119379982&di=a99ea6502ec39bf51fa8cbfeacb4825e&imgtype=0&src=http%3A%2F%2Fimage11.m1905.cn%2Fuploadfile%2F2015%2F0528%2F20150528023039238348.jpg',
        src2:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584119404141&di=79b22e8ebb0c7f88a5e53678f85f5608&imgtype=0&src=http%3A%2F%2Fimage14.m1905.cn%2Fuploadfile%2F2015%2F0528%2F20150528023039519416.jpg'
      }
    },
    // 注册组件
    components: {
      photoFrame
    },
    methods: {
      handleSrcChange(e) {
        // console.log('父组件的自定义事件被触发了')
        console.log(e)
      }
    },
    onLoad() {
      console.log(this.blogUrl)
      console.log(getApp().globalData.msg)
      // getApp().globalData.msg = 'Hello Tyler'
    }
  }
</script>

<style>
</style>
