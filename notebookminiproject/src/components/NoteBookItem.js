import React from "react";
import { Link } from "react-router-dom";
import { NotesWrapper, CreatButtonStyled } from "../styles";
import subjectimg from "../subjects2.png";
import { SubjectImg, Wrapper } from "../styles";
import DeleteButton from "../Buttons/DeleteButton";

const NoteBookItem = ({ noteBook }) => {
  return (
    <>
      <Wrapper>
        <NotesWrapper>
          <SubjectImg src={subjectimg} />
          <Link to={"/notes"}>
            <CreatButtonStyled>{noteBook.name}</CreatButtonStyled>
          </Link>
          <DeleteButton />
        </NotesWrapper>
      </Wrapper>
    </>
  );
};

export default NoteBookItem;
