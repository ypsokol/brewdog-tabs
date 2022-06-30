import { IBeer } from "../../../types/beer";

export const sortNumber = (prevState: IBeer[], value: keyof IBeer = "abv") => {
	return prevState.sort((a, b) => Number(a[value]) - Number(b[value]));
};
