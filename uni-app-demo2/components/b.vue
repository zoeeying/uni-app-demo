<template>
	<view>
		b组件中的数据为：{{num}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
			}
		},
		created() {
			uni.$on('changeNum', num => {
				this.num += num
			})
		}
	}
</script>

<style>

</style>
