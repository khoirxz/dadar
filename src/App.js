import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Details, Home } from "./pages";

function App() {
  return (
    <Box className="App" color="#4F4C4C" bgColor="#FFF9F9">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
