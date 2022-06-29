import { IBeer } from "../../../types/beer";

export const sortString = (prevState: IBeer[]) => {
	return prevState.sort((a, b) => {
		const aName = a.name.toLocaleLowerCase();
		const bName = b.name.toLocaleLowerCase();
		if (aName < bName) {
			return -1;
		}
		if (aName > bName) {
			return 1;
		}
		return 0;
	});
};
