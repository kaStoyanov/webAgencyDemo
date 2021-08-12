import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
