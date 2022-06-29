import { IBeer } from "../../../types/beer";

export const sortNumber = (prevState: IBeer[]) => {
	return prevState.sort((a, b) => a.abv - b.abv);
};
