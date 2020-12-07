import React from "react";
import { useState } from "react";
import NotesModal from "../components/NotesModal";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const NotesButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > span": {
        margin: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Icon onClick={openModal}>Add Notes</Icon>
      </div>
      <NotesModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default NotesButton;
