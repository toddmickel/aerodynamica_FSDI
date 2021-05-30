import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Catalog />

      <Footer />
    </div>
  );
}

export default App;
