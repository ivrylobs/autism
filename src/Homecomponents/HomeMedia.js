import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Grid, Paper } from "@material-ui/core";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Rotate from "react-reveal/Rotate";
import Carousel from "react-elastic-carousel";
import ReactPlayer from "react-player/youtube";

const useStyle = makeStyles((theme) => ({
	NewsContainer: {
		backgroundColor: "#fff",
		height: "auto",
		paddingBottom: 50,
		paddingTop: 70,
		[theme.breakpoints.down("md")]: {
			paddingBottom: 40,
		},
		[theme.breakpoints.down("sm")]: {
			paddingBottom: 30,
			paddingTop: 45,
		},
		[theme.breakpoints.down("xs")]: {
			paddingBottom: 20,
		},
	},
	paperVideo: {
		width: "100%",
		height: 498,
		backgroundColor: "#F5F5F5",
		[theme.breakpoints.down("md")]: {
			height: 356,
		},
		[theme.breakpoints.down("sm")]: {
			height: 339,
		},
		[theme.breakpoints.down("xs")]: {
			height: 225,
		},
	},
	BlogContainer: {
		[theme.breakpoints.down("xl")]: {
			maxWidth: 1720,
		},
		[theme.breakpoints.down("lg")]: {
			maxWidth: 1200,
		},
		[theme.breakpoints.down("md")]: {
			maxWidth: 900,
		},
		[theme.breakpoints.down("sm")]: {
			maxWidth: 590,
		},
		[theme.breakpoints.down("xs")]: {
			maxWidth: 599,
		},
	},
	imagenew1: {
		width: "100%",
		height: "auto",
	},
	imagenew2: {
		width: "100%",
		height: "auto",
	},
	Griditemnew1: {
		marginTop: 25,
		padding: 15,
		[theme.breakpoints.down("sm")]: {
			marginTop: 10,
			padding: 10,
		},
	},
	Griditemnew2: {
		marginTop: 25,
		padding: 15,
		[theme.breakpoints.down("sm")]: {
			marginTop: 10,
			padding: 10,
		},
	},
	Griditemnew3: {
		marginTop: 25,
		padding: 15,
		[theme.breakpoints.down("sm")]: {
			marginTop: 10,
			padding: 10,
		},
	},
	Griditemnew4: {
		marginTop: 25,
		padding: 15,
		[theme.breakpoints.down("sm")]: {
			marginTop: 10,
			padding: 10,
		},
	},
	buttonnew: {
		backgroundColor: "#ADE8FF",
		marginLeft: 620,
		marginTop: 20,
		width: "100px",
	},
	NewsTypo2: {
		fontFamily: "Raleway",
		color: "#000",
		fontWeight: "bold",
		[theme.breakpoints.down("sm")]: {
			fontSize: 10,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 6,
		},
	},
	NewsTypo1: {
		color: "#3AC7FD",
		[theme.breakpoints.down("md")]: {
			fontSize: 48,
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 24,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 18,
		},
	},
	NewsTypo3: {
		color: "#000",
		fontWeight: "bold",
		textAlign: "left",
		paddingRight: 62,
		[theme.breakpoints.down("xl")]: {
			fontSize: 24,
		},
		[theme.breakpoints.down("lg")]: {
			paddingRight: 0,
			fontSize: 18,
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 12,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 9,
		},
	},
	NewsTypo4: {
		color: "#3AC7FD",
		fontWeight: "bold",
		textAlign: "left",
		fontSize: 16,
		[theme.breakpoints.down("sm")]: {
			fontSize: 9,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: 6,
		},
	},
	buttonMore: {
		backgroundColor: "#3AC7FD",
		color: "#fff",
		fontSize: 24,
		marginTop: 40,
		marginBottom: 30,
		"&:focus": {
			backgroundColor: "#ADE8FF",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: 20,
		},
		[theme.breakpoints.down("sm")]: {
			height: 30,
			fontSize: 16,
		},
		[theme.breakpoints.down("xs")]: {
			height: 25,
			fontSize: 10,
		},
	},
	alignButton: {
		textAlign: "center",
	},
	NewsContainer2: {
		padding: 15,
		[theme.breakpoints.down("xs")]: {
			paddingBottom: 15,
			padding: 0,
		},
	},
}));

export default function HomeMedia() {
	const classes = useStyle();
	// Require for bi-language
	const router = useRouter();
	const { locale, locales, defaultLocale } = router;
	const { formatMessage } = useIntl();
	const f = (id) => formatMessage({ id });
	// End of Requirement

	return (
		<React.Fragment>
			<main>
				<Grid container className={classes.NewsContainer}>
					<Container maxWidth="xl" className={classes.BlogContainer}>
						<Grid container>
							<Grid item xs={12} align="center">
								<Rotate bottom left>
									<Typography variant="h2" className={classes.NewsTypo1}>
										{f("menuNews")}
									</Typography>
									<Typography variant="h5" className={classes.NewsTypo2}>
										Videos
									</Typography>
								</Rotate>
							</Grid>
							<Carousel itemsToShow={4}>
								<ReactPlayer url="https://www.youtube.com/watch?v=MCxLMYd4PrQ" width="100%" height="100%" />
								<ReactPlayer url="https://www.youtube.com/watch?v=qookT5kdZWU" width="100%" height="100%" />
								<ReactPlayer url="https://www.youtube.com/watch?v=KCN1xt29yB0" width="100%" height="100%" />
								<ReactPlayer url="https://www.youtube.com/watch?v=RJtKuMXx868" width="100%" height="100%" />
								<ReactPlayer url="https://www.youtube.com/watch?v=au8BzHV5P24" width="100%" height="100%" />
								<ReactPlayer url="https://www.youtube.com/watch?v=b2OFwhCx0ew" width="100%" height="100%" />
								<ReactPlayer url="https://www.youtube.com/watch?v=7hxRP5skmuw" width="100%" height="100%" />
								<ReactPlayer url="https://www.youtube.com/watch?v=lIMJcka--E4" width="100%" height="100%" />
							</Carousel>
						</Grid>
					</Container>
				</Grid>
			</main>
		</React.Fragment>
	);
}
