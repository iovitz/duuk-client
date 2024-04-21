import { onMounted } from "vue";
import { ref } from "vue";

export function useElementSize(idSelector) {
	const size = ref({
		height: 0,
		width: 0,
	});
	onMounted(() => {
		const query = uni.createSelectorQuery();
		//选择id为mybox的元素节点。
		query
			.select(idSelector)
			.fields(
				{
					size: true,
				},
				(res) => {
					if (!res) return;
					size.value = {
						// @ts-ignore
						height: res.height,
						// @ts-ignore
						width: res.width,
					};
				},
			)
			.exec();
	});
	return size;
}
