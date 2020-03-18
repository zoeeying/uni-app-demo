<template>
	<view class="content">
		<a-com></a-com>
		<b-com></b-com>
		<view>
			<uni-calendar :insert="true" :lunar="true" :start-date="'2019-3-2'" :end-date="'2019-5-20'"></uni-calendar>
		</view>
	</view>
</template>

<script>
	import aCom from '@/components/a.vue'
	import bCom from '@/components/b.vue'
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		data() {
			return {}
		},
		components: {
			aCom,
			bCom,
			uniCalendar
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
