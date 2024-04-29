export const replaceBracketsWithStateValues = (str: string, state: Record<string, string>) => {
	const regex = /{([^{}]+)}/g 
	return str.toLocaleLowerCase().replace(regex, (match, group) => {
		const key = group.trim()
		return state[key] || ''
	})
}
