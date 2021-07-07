import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Blog1 from "../Blogcomponents/Blog1";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Button, Grid } from "@material-ui/core";
import Link from "../Link";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import Rotate from "react-reveal/Rotate";
import Carousel from "react-elastic-carousel";

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
		marginTop: 30,
		marginBottom: 20,
		"&:focus": {
			backgroundColor: "#ADE8FF",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: 18,
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: 16,
		},
		[theme.breakpoints.down("xs")]: {
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
	Carousel1: {
		display: "contents",
		[theme.breakpoints.down("sm")]: {
			display: "none"
		},
	},
	Carousel2: {
		display: "none",
		[theme.breakpoints.down("sm")]: {
			display: "contents"
		},
		[theme.breakpoints.down("xs")]: {
			display: "none"
		},
	},
	Carousel3: {
		display: "none",
		[theme.breakpoints.down("xs")]: {
			display: "contents"
		},
	},
}));

export default function Home({ posts }) {
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
										NEWS AND PUBLIC RELATIONS
									</Typography>
								</Rotate>
							</Grid>
							<div className={classes.Carousel1}>
							<Carousel itemsToShow={4} >
								{posts
									? posts.slice(0, 16).map((post) => (
											<div key={post.id} className={classes.NewsContainer2}>
												<Blog1 post={post} url={`/post/${post.id}`} />
											</div>
									  ))
									: "Loading Data"}
							</Carousel>
							</div>
							<div className={classes.Carousel2}>
							<Carousel itemsToShow={2} >
								{posts
									? posts.slice(0, 12).map((post) => (
											<div key={post.id} className={classes.NewsContainer2}>
												<Blog1 post={post} url={`/post/${post.id}`} />
											</div>
									  ))
									: "Loading Data"}
							</Carousel>
							</div>
							<div className={classes.Carousel3}>
							<Carousel itemsToShow={1} >
								{posts
									? posts.slice(0, 6).map((post) => (
											<div key={post.id} className={classes.NewsContainer2}>
												<Blog1 post={post} url={`/post/${post.id}`} />
											</div>
									  ))
									: "Loading Data"}
							</Carousel>
							</div>
							<Grid item xs={12} className={classes.alignButton}>
								<Button component={Link} href="/blog" variant="contained" size="large" className={classes.buttonMore}>
									{f("button")}
								</Button>
							</Grid>
						</Grid>
					</Container>
				</Grid>
			</main>
		</React.Fragment>
	);
}
