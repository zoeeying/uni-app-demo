<template>
	<view class="content">
		<image :src="src" class="photo_frame" />
	</view>
</template>

<script>
	export default {
		// props: {
		// 	src: String
		// },
		props: ['src']
	}
</script>

<style>
	.photo_frame {
		border-radius: 50%;
	}
</style>
