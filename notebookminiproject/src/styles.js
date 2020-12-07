import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #524948;
  font: "Georgia";
  padding: 8;
  border-radius: 25;
`;
export const Wrapper = styled.section`
  padding: 4em;
  background-color: #f9dcd9;
`;
export const HomeImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
export const SubjectImg = styled.img`
  display: auto;
  margin: center;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const Description = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #524948;
`;

export const CreatButtonStyled = styled.button`
  /* display: inline-block; */
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;

  display: block;
  /* border-radius: 3px; */
`;

export const ListWrapper = styled.div`
  border-radius: 3px;
  border: 2px solid #41addd;
  display: block;
  margin: 0 0 1em;
  max-width: calc(768px + 16px * 2);
  padding: ${(props) => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`;

export const NotesWrapper = styled.div`
  margin-top: 8;
  border-top-width: 1;
  border-radius: 25;
  text-align: "center";
  justify-content: "center";
  font-weight: "bold";
  list-style: none;
  overflow-x: auto;
  display: flex;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  color: white;
  background-color: #6c757d;
  border: none;
  border-radius: 4px;
  :not(:disabled) {
    cursor: pointer;
  }
  :hover {
    background-color: #5a6268;
  }
`;
