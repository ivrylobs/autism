import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardActionArea, CardContent, CardMedia } from "@material-ui/core";
import moment from "moment";

import { useRouter } from "next/router";
import { useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
	Blogpaper: {
		width: "100%",
		height: 396,
		[theme.breakpoints.down("lg")]: {
			height: 360,
		},
		[theme.breakpoints.down("md")]: {
			height: 191,
		},
		[theme.breakpoints.down("sm")]: {
			height: 202,
		},
		[theme.breakpoints.down("xs")]: {
			height: 217,
		},
	},
	imgNews: {
		height: 300,
		[theme.breakpoints.down("lg")]: {
			height: 175,
		},
		[theme.breakpoints.down("md")]: {
			height: 115,
		},
		[theme.breakpoints.down("sm")]: {
			height: 130,
		},
		[theme.breakpoints.down("xs")]: {
			height: 140,
		},
	},
	Typo1: {
		color: "#3AC7FD",
		[theme.breakpoints.down("md")]: {
			fontSize: 6,
		},
	},
	Typo2: {
		padding: 10,
		fontSize: 18,
		[theme.breakpoints.down("lg")]: {
			fontSize: 14,
		},
		[theme.breakpoints.down("md")]: {
			fontSize: 10,
			padding: 0
		},
		[theme.breakpoints.down("xs")]: {
			padding: 5
		},
	},
	PaddingText: {
		padding: 10,
		[theme.breakpoints.down("sm")]: {
			padding: 5,
		},
	},
	
}));

export default function Blog1({ url, post }) {
	const classes = useStyles();

	// Require for bi-language
	const router = useRouter();
	const { locale, locales, defaultLocale } = router;
	const { formatMessage } = useIntl();
	const f = (id) => formatMessage({ id });
	// End of Requirement

	return (
		<React.Fragment>
			<Card className={classes.Blogpaper}>
				<CardActionArea href={url}>
					<CardMedia component="img" alt="blog1" className={classes.imgNews} image={"https://cms.rsiakku.com" + post.cover.url} title="blog1" />
					<CardContent className={classes.PaddingText}>
						<Typography gutterBottom variant="caption" className={classes.Typo1}>
							{f("rsia")} - {moment(post.updated_at).locale(locale).format("l")}
						</Typography>
						<Typography variant="subtitle1" className={classes.Typo2}>
							{locale == "th" ? post.title : post.titeEn}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</React.Fragment>
	);
}
