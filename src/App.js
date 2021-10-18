import { BrowserRouter, Switch,Route } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Header from "./Pages/Shared/Header/Header";
import Team from "./Pages/Team/Team";
import Home from "./Pages/Home/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Services from "./Pages/Home/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/team">
          <Team></Team>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route>
          <Services></Services>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
