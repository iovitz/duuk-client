import { ref } from "vue";

export function useThemeColors() {
	const primaryColor = ref("#5c3eea");
	return {
		primaryColor,
	};
}
