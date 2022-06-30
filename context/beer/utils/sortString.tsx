import { IBeer } from "../../../types/beer";

export const sortString = (prevState: IBeer[], value: keyof IBeer = "name") => {
	return prevState.sort((a, b) => {
		const aName = a[value];
		const bName = b[value];
		if (aName < bName) {
			return -1;
		}
		if (aName > bName) {
			return 1;
		}
		return 0;
	});
};
