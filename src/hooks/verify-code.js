import { http } from "@/utils/http/http";
import { logger } from "@/utils/logger";
import { onMounted } from "vue";
import { ref } from "vue";

export function useVerifyCode(idSelector, width, field) {
	const size = ref({
		height: 0,
		width: 0,
	});

	const verifyCodeSvg = ref("");

	onMounted(() => {
		reflashVerifyCode();
	});

	async function reflashVerifyCode() {
		try {
			const res = await http.get(
				`/service/verify-code?height=${size.value.height}&width=${width}&field=${field}`,
			);
			verifyCodeSvg.value = res;
		} catch (e) {
			logger.error(e, "获取验证码失败");
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
