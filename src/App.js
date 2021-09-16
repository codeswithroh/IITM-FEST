import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import Artsy from "../src/Components/Events/Artsy";
import Danza from "../src/Components/Events/Danza";
import MentalHealth from "../src/Components/Events/MentalHealth";
import Rhythm from "../src/Components/Events/Rhythm";
import WarOfWords from "../src/Components/Events/WarOfWords";
import XFrontier from "../src/Components/Events/XFrontier";
import Esport from "../src/Components/Events/Esports";
import GitHub from "../src/Components/Events/Github";
import Flutter from "../src/Components/Events/Flutter";
import XFrontierWin from "./Components/Event-Winners/XFrontierWin";
import EsportWin from "./Components/Event-Winners/EsportWin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/artsy" exact component={Artsy} />
          <Route path="/danza" exact component={Danza} />
          <Route path="/mental-health" exact component={MentalHealth} />
          <Route path="/rhythm" exact component={Rhythm} />
          <Route path="/warofwords" exact component={WarOfWords} />
          <Route path="/xfrontier" exact component={XFrontier} />
          <Route path="/github" exact component={GitHub} />
          <Route path="/esport" exact component={Esport} />
          <Route path="/flutter" exact component={Flutter} />
          <Route path="/xfrontier/winners" component={XFrontierWin} />
          <Route path="/gamespalooza/winners" component={EsportWin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
