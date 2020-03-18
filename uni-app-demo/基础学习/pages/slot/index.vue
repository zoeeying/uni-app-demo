<template>
  <view class="content">
    <my-form>
      <view>
        <input type="text" />
        <radio></radio>
        <checkbox></checkbox>
      </view>
    </my-form>
  </view>
</template>

<script>
  import myForm from '@/components/my-form'
  export default {
    components: {
      myForm
    }
  }
</script>

