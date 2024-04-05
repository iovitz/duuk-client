import { onMounted, ref, computed } from "vue";

export function useWaterFlowColumnWidth(usedWidth, column = 2) {
	const screenWidth = ref(0);

	onMounted(() => {
		const sysInfo = uni.getSystemInfoSync();
		screenWidth.value = sysInfo.screenWidth;
		console.log(screenWidth.value);
	});

	const columnWidth = computed(() => {
		console.log((screenWidth.value - usedWidth) / column);
		return (screenWidth.value - usedWidth) / column;
	});

	return columnWidth;
}
