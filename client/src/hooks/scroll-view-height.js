import { onMounted, ref, computed } from "vue";

export function useScrollViewHeight() {
	const statusBarHeight = ref(0);
	const screenHeight = ref(0);
	const height = ref(0);
	const occupiedPx = ref(0);
	onMounted(() => {
		const sysInfo = uni.getSystemInfoSync();
		statusBarHeight.value = sysInfo.statusBarHeight;
		screenHeight.value = sysInfo.screenHeight;
		height.value =
			sysInfo.screenHeight - sysInfo.statusBarHeight - occupiedPx.value;
	});
	const scrollViewHeight = computed(() => {
		return screenHeight.value - statusBarHeight.value - occupiedPx.value;
	});

	const setOccupiedPx = (v) => {
		occupiedPx.value = v;
	};
	return {
		scrollViewHeight,
		setOccupiedPx,
	};
}
