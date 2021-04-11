import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Button, List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { useRouter } from "next/router";
import { useIntl } from "react-intl";

import moment from "moment";

const useStyles = makeStyles((theme) => ({
    update: {
        [theme.breakpoints.down("xs")]: {
            paddingTop: 0,
        },
    },
    NewsUpdate: {
        borderRadius: 10,
        padding: 20,
    },
    NewsUpdate2: {
        color: "#3AC7FD",
        fontSize: 10,
        [theme.breakpoints.down("sm")]: {
            fontSize: 8,
        },
    },
    TypoNews2: {
        paddingBottom: 15,
    },
    updateLink: {
        padding: 0,
    },
    PaperUpdate: {
        marginTop: 15,
    },
}));

export default function Blog({ posts }) {
    const classes = useStyles();
    const [sortedPosts, setSortedPosts] = React.useState([]);

    // Require for bi-language
    const router = useRouter();
    const { locale, locales, defaultLocale } = router;
    const { formatMessage } = useIntl();
    const f = (id) => formatMessage({ id });
    // End of Requirement

    React.useEffect(() => {
        const sortedData = posts.sort((a, b) => {
            return new Date(b.updated_at) - new Date(a.updated_at);
        });
        sortedData.length -= sortedData.length - 4;
        setSortedPosts(sortedData);
    });

    return (
        <React.Fragment>
            <main>
                <Paper elevation={1} className={classes.NewsUpdate}>
                    <Typography variant="h6" align="left" className={classes.TypoNews}>
                        อัพเดตล่าสุด
                    </Typography>
                    <Divider />
                    <List className={classes.update}>
                        {sortedPosts.map((post) => (
                            <div key={post.id}>
                                <ListItem component={Button} className={classes.updateLink}>
                                    <ListItemText>
                                        <Typography variant="caption" className={classes.NewsUpdate2}>
                                            สถาบันวิจัยและบริการด้านออทิซึม -{" "}
                                            {moment(post.updated_at).locale(locale).format("l")}
                                        </Typography>
                                        <Typography variant="subtitle2" className={classes.TypoNews2}>
                                            {post.title}
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>
                </Paper>
            </main>
        </React.Fragment>
    );
}
