import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList(props) {
  const { searchResult, onClick } = props;

  const classes = useStyles();

  return (
    <List className={classes.root}>
      {searchResult.map((el) => (
        <>
          <ListItem alignItems="flex-start" onClick={() => onClick(el.id)}>
            <ListItemAvatar>
              <Avatar alt={el.name} src="./../../images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={el.name}
              secondary={<React.Fragment>{el.about}</React.Fragment>}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}
