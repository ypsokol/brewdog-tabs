import { Reducer, useReducer } from "react";

import { IBeer } from "../../types/beer";
import { Action, ActionType, SortValue } from "./actions";
import { initialState } from "./context";
import { sortNumber } from "./utils/sortNumber";
import { sortString } from "./utils/sortString";

type ReducerType = Reducer<IBeer[], Action>;

export const reducer: ReducerType = (
	prevState: IBeer[],
	action: Action
): IBeer[] => {
	switch (action.type) {
		case ActionType.update:
			return [...sortString(action.state)];

		case ActionType.sort:
			switch (action.value) {
				case SortValue.abv_asc:
					return [...sortNumber(prevState)];
				case SortValue.abv_desc:
					return [...sortNumber(prevState).reverse()];

				case SortValue.name_asc:
					return [...sortString(prevState)];
				case SortValue.name_desc:
					return [...sortString(prevState).reverse()];
			}

		default:
			return prevState;
	}
};

export function useBeerReducer() {
	return useReducer(reducer, initialState);
}
