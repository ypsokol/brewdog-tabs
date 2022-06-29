import type { NextPage } from "next";
import { SyntheticEvent, useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import SportsBarIcon from "@mui/icons-material/SportsBar";

import { BeerProvider } from "../context/beer/provider";
import BeerContainer from "../components/BeerContainer";

const Home: NextPage = () => {
	const [currentTab, setCurrentTab] = useState<number>(0);

	const handleChange = (event: SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue);
	};

	return (
		<Box sx={{ width: "100%", bgcolor: "background.paper" }}>
			<Tabs value={currentTab} onChange={handleChange} centered>
				<Tab label={<LocalPizzaIcon />} />
				<Tab label={<KebabDiningIcon />} />
				<Tab label={<SportsBarIcon />} />
			</Tabs>

			{["food=pizza", "food=steak", ""].map((params, i) => (
				<BeerProvider key={params}>
					{currentTab === i && <BeerContainer params={params} />}
				</BeerProvider>
			))}
		</Box>
	);
};

export default Home;
