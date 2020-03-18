<template>
	<view>
		<view>导航跳转和传参</view>
		<navigator url="/pages/list/index?id=99&age=18">跳转到列表页并传参</navigator>
		<navigator url="/pages/picture/index" open-type="switchTab">跳转到图片页</navigator>
		<navigator url="/pages/list/index" open-type="redirect">跳转到列表页并关闭当前页面</navigator>
		<button type="primary" @click="goList">跳转到列表页并传参</button>
		<button type="primary" @click="goPicture">跳转到图片页</button>
		<button type="warn" @click="redirectList">跳转到列表页并关闭当前页面</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onUnload() {
			console.log('导航页面卸载了')
		},
		methods: {
			goList() {
				uni.navigateTo({
					url: '/pages/list/index?id=99&age=18'
				})
			},
			redirectList(){
				uni.redirectTo({
					url: '/pages/list/index'
				})
			},
			goPicture() {
				uni.switchTab({
					url: '/pages/picture/index'
				})
			}
		}
	}
</script>

<style>

</style>
