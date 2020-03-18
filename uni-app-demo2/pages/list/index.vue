<template>
	<view>
		<!-- <view>{{msg}}</view> -->
		<!-- <button @click="pullDown">下拉刷新</button> -->
		<button @click="fetchData">发送get请求</button>
		<view v-for="item in list" :key="item.id" class="list_item">
			<view>{{item.username}}-{{item.age}}-{{item.sex}}</view>
		</view>
		<button @click="setStorage" type="primary">存储数据</button>
		<button @click="getStorage" type="primary">获取数据</button>
		<button @click="removeStorage" type="primary">移除数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: '这是列表页',
				list: []
			}
		},
		onLoad(options) {
			// options就是上个页面传递过来的参数
			console.log(options)
		},
		// onPullDownRefresh() {
		// 	setTimeout(() => {
		// 		this.msg = '触发了下拉刷新，可以做一些数据操作'
		// 		uni.stopPullDownRefresh()
		// 	}, 2000)
		// },
		// onReachBottom() {
		// 	console.log('页面滚动到底部了')
		// },
		methods: {
			pullDown() {
				uni.startPullDownRefresh()
			},
			fetchData() {
				uni.request({
					url: 'http://localhost:3000/api/userlist',
					success: res => {
						this.list = res.data
					}
				})
			},
			setStorage() {
				// uni.setStorage({
				// 	key: 'username',
				// 	data: '小畅叙',
				// 	success() {
				// 		console.log('数据存储成功！')
				// 	}
				// })
				uni.setStorageSync('username', 'zoeeying')
			},
			getStorage() {
				// uni.getStorage({
				// 	key: 'username',
				// 	success(res) {
				// 		console.log('数据获取成功！', res)
				// 	}
				// })
				console.log(uni.getStorageSync('username'))
			},
			removeStorage() {
				// uni.removeStorage({
				// 	key: 'username',
				// 	success() {
				// 		console.log('数据移除成功！')
				// 	}
				// })
				uni.removeStorageSync('username')
			},
		}
	}
</script>

<style>
	.list_item {
		border-bottom: 1px solid #ccc;
		padding: 10px 20px;
	}
</style>
