import React from "react";
import NoteBookModal from "../components/NoteBookModal";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";

const AddButton = (props) => {
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
        <Icon onClick={openModal} style={{ color: green[500] }}>
          Add Subject
        </Icon>
      </div>
      <NoteBookModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
