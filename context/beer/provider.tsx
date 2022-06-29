import { PropsWithChildren } from "react";

import { BeerContext } from "./context";
import { useBeerReducer } from "./reducer";

export const BeerProvider = ({ children }: PropsWithChildren<{}>) => {
	const [state, dispatch] = useBeerReducer();

	return (
		<BeerContext.Provider value={{ state, dispatch }}>
			{children}
		</BeerContext.Provider>
	);
};
