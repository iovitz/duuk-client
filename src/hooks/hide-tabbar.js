import { onMounted } from "vue";

export function useHideTabBar() {
	onMounted(() => {
		uni.hideTabBar();
	});
}
