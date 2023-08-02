import React from "react";
import { ThemeSetter } from "./ThemeSetter";
import { ResponsiveAppBar } from './Navigation/ResponsiveAppBar';
import Container from '@mui/material/Container';
import { Routing } from './Navigation/Routing';


function App() {
  return (
    <ThemeSetter>
      <Container>
        <ResponsiveAppBar />
        <Routing />
      </Container>
      {/*<div className="App">*/}
      {/*<EditorMain />*/}
      {/*</div>*/}
    </ThemeSetter>
  );
}

export default App;
