import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { IBeer } from "../../types/beer";
import { useOpenState } from "../../utils/useOpenState";
import BeerModal from "../BeerModal";

type Props = {
	beer: IBeer;
};

const BeerCard = ({ beer }: Props) => {
	const { isOpen, onOpen, onClose } = useOpenState();

	return (
		<>
			<Card sx={{ height: "100%" }}>
				<CardActionArea onClick={onOpen} sx={{ height: "100%" }}>
					<CardMedia
						sx={{ objectFit: "contain" }}
						component="img"
						height="200"
						image={beer.image_url || "/images/no-image.jpg"}
						alt=""
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{beer.name}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							vol. {beer.abv}%
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>

			<BeerModal beer={beer} isOpen={isOpen} handleClose={onClose} />
		</>
	);
};

export default BeerCard;
