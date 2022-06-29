import { Context, createContext, Dispatch, useContext } from "react";

import { IBeer } from "../../types/beer";
import { Action } from "./actions";

export const initialState: IBeer[] = [];

export type DispatchCart = Dispatch<Action>;
export type BeerContextType = {
	state: IBeer[];
	dispatch: DispatchCart;
};
export const dispatchInitialState: DispatchCart = () => undefined;

export const BeerContext: Context<BeerContextType> =
	createContext<BeerContextType>({
		state: initialState,
		dispatch: dispatchInitialState,
	});

export const useBeer = () => useContext(BeerContext);
