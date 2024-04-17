import { ref } from "vue";

export function useThemeColors() {
	const primaryColor = ref("#EC716E");
	return {
		primaryColor,
	};
}
