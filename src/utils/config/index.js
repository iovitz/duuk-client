export function getConfig(key) {
	// @ts-ignore
	return import.meta.env[key];
}
