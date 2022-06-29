import { useEffect, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { useBeer } from "../../context/beer/context";
import { ActionType, SortValue } from "../../context/beer/actions";

const BeerSort = () => {
	const [sort, setSort] = useState<SortValue>(SortValue.name_asc);
	const { dispatch } = useBeer();

	useEffect(() => {
		dispatch({ type: ActionType.sort, value: sort });
	}, [sort]);

	const handleChange = (e: SelectChangeEvent) => {
		setSort(e.target.value as SortValue);
	};

	return (
		<Select value={sort} label="Beer" onChange={handleChange}>
			<MenuItem value={SortValue.name_asc}>
				Name <ArrowUpwardIcon />
			</MenuItem>
			<MenuItem value={SortValue.name_desc}>
				Name <ArrowDownwardIcon />
			</MenuItem>
			<MenuItem value={SortValue.abv_asc}>
				Abv <ArrowUpwardIcon />
			</MenuItem>
			<MenuItem value={SortValue.abv_desc}>
				Abv <ArrowDownwardIcon />
			</MenuItem>
		</Select>
	);
};

export default BeerSort;
