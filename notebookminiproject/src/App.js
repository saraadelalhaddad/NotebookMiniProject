import React from "react";
import Sidebar from "./Sidebar";
import { Title, Wrapper, Description } from "./styles";
import noteBookStore from "./stores/noteBookStore";
import NoteBookList from "./components/NoteBookList";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NotesList from "./components/NotesList";

function App() {
  return (
    <Router>
      <div className="App" id="outer-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <div id="page-wrap">
          <Wrapper>
            <Title> My note Book </Title>
            <Description> my subjects </Description>
          </Wrapper>
          <Switch>
            <Route path="/noteBook">
              <NoteBookList noteBooks={noteBookStore.noteBooks} />
            </Route>
            <Route path="/notes">
              <NotesList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
