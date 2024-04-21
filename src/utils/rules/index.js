export const usernameRule = [
	{
		required: true,
		type: "string",
		message: "用户名不能为空",
		// blur和change事件触发检验
		trigger: ["blur", "change"],
	},
	{
		required: true,
		type: "string",
		max: 10,
		min: 1,
		message: "用户名长度为1~10位",
		// blur和change事件触发检验
		trigger: ["blur", "change"],
	},
];

export const passwordRule = [
	{
		required: true,
		type: "string",
		message: "密码不能为空",
		// blur和change事件触发检验
		trigger: ["blur", "change"],
	},
	{
		required: true,
		type: "string",
		max: 16,
		min: 6,
		message: "密码长度为6~16位",
		// blur和change事件触发检验
		trigger: ["blur", "change"],
	},
];

export const verifyCodeRule = [
	{
		required: true,
		type: "string",
		message: "验证码不能为空",
		// blur和change事件触发检验
		trigger: ["blur", "change"],
	},
	{
		required: true,
		type: "string",
		max: 4,
		min: 4,
		message: "请输入4位验证码",
		// blur和change事件触发检验
		trigger: ["blur", "change"],
	},
];
