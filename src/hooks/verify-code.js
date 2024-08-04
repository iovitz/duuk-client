import { io } from "@/utils/io/io";
import { logger } from "@/utils/logger";
import { onMounted } from "vue";
import { ref } from "vue";

export function useVerifyCode(idSelector, width, field) {
	const size = ref({
		height: 0,
		width: 0,
	});

	const verifyCodeSvg = ref("");

	async function reflashVerifyCode() {
		try {
			const res = await io.get(
				`/v1/verify/verify-code?height=${size.value.height}&width=${width}&type=${field}`,
			);
			verifyCodeSvg.value = res;
		} catch (e) {
			logger.error("获取验证码失败", e);
		}
	}

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
					reflashVerifyCode();
				},
			)
			.exec();
	});
	return {
		reflashVerifyCode,
		verifyCode: verifyCodeSvg,
	};
}
