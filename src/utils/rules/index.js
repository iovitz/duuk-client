export const nicknameRule = [
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

export const emailRule = [
	{
		required: true,
		message: "邮箱不能为空",
		// blur和change事件触发检验
		trigger: ["blur", "change"],
	},
	{
		type: "email",
		message: "邮箱格式错误",
		// blur和change事件触发检验
		trigger: ["blur", "change"],
	},
	{
		required: true,
		type: "string",
		max: 30,
		min: 6,
		message: "邮箱长度为6~30位",
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
