<template>
	<view>
		<button @click="handleClick">修改b组件中的数据</button>
	</view>
</template>

<script>
	export default {
		methods: {
			handleClick() {
				uni.$emit('changeNum', 10)
			}
		}
	}
</script>

<style>

</style>
