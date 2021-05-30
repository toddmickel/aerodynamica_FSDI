import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
