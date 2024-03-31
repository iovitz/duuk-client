import { onMounted, ref, computed } from "vue";

export function useScrollViewHeight() {
	const statusBarHeight = ref(0);
	const screenHeight = ref(0);
	const height = ref(0);
	const occupiedUpx = ref(0);
	const occupiedPx = ref(0);
	onMounted(() => {
		const sysInfo = uni.getSystemInfoSync();
		statusBarHeight.value = sysInfo.statusBarHeight;
		screenHeight.value = sysInfo.screenHeight;
		height.value =
			sysInfo.screenHeight -
			sysInfo.statusBarHeight -
			uni.upx2px(occupiedUpx.value);
	});
	const scrollViewHeight = computed(() => {
		return (
			screenHeight.value -
			statusBarHeight.value -
			uni.upx2px(occupiedUpx.value) -
			occupiedPx.value
		);
	});

	const setOccupiedUpx = (v) => {
		occupiedUpx.value = v;
	};
	const setOccupiedPx = (v) => {
		occupiedPx.value = v;
	};
	return {
		scrollViewHeight,
		setOccupiedUpx,
		setOccupiedPx,
	};
}
