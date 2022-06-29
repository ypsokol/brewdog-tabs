import { Suspense, useEffect } from "react";

import axios from "axios";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { IBeer } from "../../types/beer";
import { useBeer } from "../../context/beer/context";
import { ActionType } from "../../context/beer/actions";
import BeerSort from "../BeerSort";
import BeerCard from "../BeerCard";

type Props = {
	beer?: IBeer;
	params?: string;
};

const BeerContainer = ({ params = "" }: Props) => {
	const { state, dispatch } = useBeer();

	useEffect(() => {
		!state?.length && fetchBeers();
	}, []);

	const fetchBeers = async () => {
		await axios
			.get<IBeer[]>(`https://api.punkapi.com/v2/beers?${params}`)
			.then((response) => {
				return dispatch({ type: ActionType.update, state: response.data });
			});
	};

	return (
		<Container>
			<Grid sx={{ pt: 2, pb: 2, justifyContent: "space-between" }}>
				<BeerSort />
				<Button onClick={() => fetchBeers()}>Update</Button>
			</Grid>
			<Grid container spacing={2}>
				<Suspense fallback={<Typography>Loading...</Typography>}>
					{state?.map((beer) => (
						<Grid key={beer.id} item xs={12} sm={6} md={4} lg={3}>
							<BeerCard beer={beer} />
						</Grid>
					))}
				</Suspense>
			</Grid>
		</Container>
	);
};

export default BeerContainer;
