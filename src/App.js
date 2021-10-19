import { BrowserRouter, Switch,Route } from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Header from "./Pages/Shared/Header/Header";
import Team from "./Pages/Team/Team";
import Home from "./Pages/Home/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Regester from "./Pages/Regester/Regester";



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
        <Route exact path="/regester">
          <Regester></Regester>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
