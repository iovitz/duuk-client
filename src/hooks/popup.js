import { ref } from "vue";

export function usePopup() {
	const popup = ref();

	return {
		popup,
	};
}
