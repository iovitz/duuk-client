import { onMounted, ref, computed } from "vue";

export function useStickyHeight(occupied = 0) {
	const statusBarHeight = ref(0);
	const occupiedPx = ref(occupied);
	onMounted(() => {
		const sysInfo = uni.getSystemInfoSync();
		statusBarHeight.value = sysInfo.statusBarHeight;
	});
	const stickyHeight = computed(() => {
		return `-${occupiedPx.value}px`;
	});

	const setOccupiedPx = (v) => {
		occupiedPx.value = v;
	};
	return {
		stickyHeight,
		statusBarHeight,
		setOccupiedPx,
	};
}
