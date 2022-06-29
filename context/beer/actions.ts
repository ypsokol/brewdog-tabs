import { IBeer } from "../../types/beer";

export enum ActionType {
	update = "update",
	sort = "sort",
}

export enum SortValue {
	name_asc = "name_asc",
	name_desc = "name_dsc",
	abv_asc = "abv_asc",
	abv_desc = "abv_desc",
}

export type Update = {
	type: ActionType.update;
	state: IBeer[];
};
export type Sort = {
	type: ActionType.sort;
	value: SortValue;
};

export type Action = Update | Sort;

export const BeerActions = {
	update: (state: IBeer[]): Update => ({ type: ActionType.update, state }),
	sort: (value: SortValue): Sort => ({
		type: ActionType.sort,
		value,
	}),
};
