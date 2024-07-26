import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

export function useRouteQuery() {
	const queryRef = ref({});
	onLoad((query) => {
		queryRef.value = query;
	});
	return queryRef;
}
