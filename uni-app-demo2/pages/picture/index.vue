<template>
	<view>
		<button type="warn" @click="chooseImage">上传图片</button>
		<image v-for="(item,index) in images" :src="item" :key="index" @click="previewImage(item)"></image>
		<!-- #ifdef H5 -->
		<view>我只出现在H5页面中</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view>我只出现在微信小程序中</view>
		<!-- #endif -->
		<view>
			<photo-frame :src="imgUrl"></photo-frame>
		</view>
	</view>
</template>

<script>
	import photoFrame from '@/components/photo-frame'
	export default {
		data() {
			return {
				images: [],
				imgUrl: 'https://img3.sycdn.imooc.com/5e12e15309ff060712000676-360-202.png'
			}
		},
		components: {
			// 注册组件
			photoFrame
		},
		onLoad() {
			// #ifdef H5
			console.log('我只在H5页面中打印')
			// #endif
			// #ifdef MP-WEIXIN
			console.log('我只在微信小程序中打印')
			// #endif
		},
		methods: {
			chooseImage() {
				uni.chooseImage({
					count: 5,
					success: res => {
						// 成功则返回图片的本地文件路径列表tempFilePaths
						this.images = res.tempFilePaths
					}
				})
			},
			previewImage(current) {
				uni.previewImage({
					current,
					urls: this.images,
				})
			}
		},
	}
</script>

<style>
	/* #ifdef H5 */
	view {
		color: hotpink;
	}

	/* #endif */

	/* #ifdef MP-WEIXIN */
	view {
		color: #007AFF;
	}

	/* #endif */
</style>
