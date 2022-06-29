import { Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { IBeer } from "../../types/beer";
import BeerAccordion from "./BeerAccordion";
import { classes } from "../../styles/classes";

type Props = {
	isOpen: boolean;
	handleClose: () => void;
	beer: IBeer;
};

const BeerModal = ({ isOpen, handleClose, beer }: Props) => {
	return (
		<Modal open={isOpen} onClose={handleClose}>
			<Box sx={classes.modalContainer}>
				<IconButton sx={classes.modalClose} onClick={handleClose}>
					<CloseIcon />
				</IconButton>

				<Grid container direction="row" pb={2}>
					<Grid item xs={12} md={6}>
						<img
							src={beer.image_url || "/images/no-image.jpg"}
							alt=""
							className="beer__image"
						/>
					</Grid>
					<Grid item md={6}>
						<Typography variant="h4">{beer.name}</Typography>
						<Typography fontWeight={800}>vol. {beer.abv}%</Typography>
						<Typography>{beer.tagline}</Typography>
					</Grid>
				</Grid>
				<Grid>
					<BeerAccordion title="Description">{beer.description}</BeerAccordion>
					<BeerAccordion title="Food Pairing">
						{beer.food_pairing}
					</BeerAccordion>
				</Grid>
			</Box>
		</Modal>
	);
};

export default BeerModal;
