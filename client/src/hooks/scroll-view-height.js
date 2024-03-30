import { onMounted, ref } from "vue";

export function useScrollViewHeight(occupiedUpx = 0) {
	const height = ref(0);
	onMounted(() => {
		const sysInfo = uni.getSystemInfoSync();
		height.value =
			sysInfo.screenHeight - sysInfo.statusBarHeight - uni.upx2px(occupiedUpx);
	});
	return height;
}
