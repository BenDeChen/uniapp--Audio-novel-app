<template>
	<view>
		<block v-for="(mitem, mindex) in bookList" :key="mindex">
			<view class="flex align-center p-1 border-bottom" hover-class="bg-light" style="height: 320rpx;">
				<image :src="mitem.imgurl" mode="aspectFill" class="rounded mx-2" style="width: 250rpx;height: 250rpx;"></image>
				<view class="flex-1" style="height: 100%;">
					<view class="py-2 font-md font-weight-bold">{{mitem.name}}</view>
					<view class="font">{{mitem.synopsis}}</view>
				</view>
			</view>
			
		</block>
	</view>
</template>

<script>
	export default {
		name:"booklist",
		props:{
			bookList:{
				type: Array,
				default:()=>[]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>