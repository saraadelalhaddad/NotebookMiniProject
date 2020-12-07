import React from "react";
import NotesButton from "../Buttons/NotesButton";
import Tags from "./Tags";
import NotesItem from "./NotesItem";
import noteBookStore from "../stores/noteBookStore";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const NotesList = () => {
  const notesList = noteBookStore.notes.map((_notes) => (
    <NotesItem notes={_notes} />
  ));

  const useStyles = makeStyles({
    root: {
      minWidth: 50,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Tags />
      {notesList}
      <NotesButton />
      <h4>Notes</h4>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Title:
            <input type="text" onSubmit={handleSubmit} />
          </Typography>
          <Typography variant="h5" component="h2">
            body:
            <form onSubmit={handleSubmit}>
              <input
                defaultValue="title"
                inputProps={{ "aria-label": "text" }}
              />
              <input placeholder="body" inputProps={{ "aria-label": "text" }} />
            </form>
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
};

export default observer(NotesList);
