export const classes = {
	modalContainer: {
		position: "absolute" as "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "85%",
		maxHeight: {
			xs: "100%",
			md: "max-content",
		},
		maxWidth: {
			xs: "100%",
			md: 800,
		},
		bgcolor: "background.paper",
		borderRadius: 4,
		boxShadow: 4,
		p: 4,
	},
	modalClose: {
		position: "absolute",
		right: 24,
		top: 24,
	},
};
