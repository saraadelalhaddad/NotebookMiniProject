import React from "react";
import NoteBookList from "./components/NoteBookList";
import { Title, Wrapper, HomeImg } from "./styles";
import noteBookStore from "./stores/noteBookStore";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NotesList from "./components/NotesList";
import { observer } from "mobx-react";
import NavBar from "./components/NavBar";
import backgroundimg from "./backgroundHome.jpg";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/notes">
          <NotesList />
        </Route>

        <Route path="/notebooks">
          {" "}
          <NoteBookList noteBook={noteBookStore.noteBook} />
        </Route>

        <Route path="/">
          <NavBar />
          <Wrapper>
            <Title> My note Book </Title>
            <HomeImg src={backgroundimg} />
          </Wrapper>
        </Route>
      </Switch>
    </Router>
  );
}

export default observer(App);
