import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
