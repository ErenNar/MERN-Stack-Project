import NotFound from "./views/404";
import AllMovie from "./views/allMovie";
import Action from "./views/Category/Action";
import Advanture from "./views/Category/Adventure";
import Comedy from "./views/Category/Comedy";
import Dram from "./views/Category/Dram";
import Historial from "./views/Category/Historial";
import Most from "./views/Category/Most";
import ScienceFiction from "./views/Category/ScienceFiction";
import RFooter from "./components/RFooter";
import RHeader from "./components/RNavigate";
import Romantic from "./views/Category/Romantic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import DetailMovie from "./views/detailMovie";
import { useEffect, useState } from "react";

function App() {

const [scroll , SetScroll ] = useState()
const deneme =()=>{
  window.addEventListener('scroll',()=>{
    const scrollStatus =  window.scrollY;
     if (scrollStatus > 1800) {
          SetScroll('btn text-white scrollON')
     }
     if (scrollStatus > 0 && scrollStatus < 1800) {
          SetScroll('btn text-white  scrollOF')
     }
  })

}
useEffect(()=>{
  deneme()
},[])

  return (

    <Router>
      <div className="App">
        <header id="header">
          <RHeader></RHeader>
        </header>
        <main className="main">


          <Routes>
            <Route exact path="/" element={<AllMovie></AllMovie>} />
            <Route exact path="/most-viewed" element={<Most></Most>} />
            <Route exact path="/action-movies" element={<Action></Action>} />
            <Route
              exact
              path="/advanture-movies"
              element={<Advanture></Advanture>}
            />
            <Route exact path="/comedy-movies" element={<Comedy></Comedy>} />
            <Route exact path="/dram-movies" element={<Dram></Dram>} />
            <Route
              exact
              path="/historial-movies"
              element={<Historial></Historial>}
            />

            <Route
              exact
              path="/scinece-fiction-movies"
              element={<ScienceFiction></ScienceFiction>}
            />
            <Route
              exact
              path="/romantic-movies"
              element={<Romantic></Romantic>}
            />
            <Route exact path="/:id" element={<DetailMovie></DetailMovie>} />
            <Route exact path="*" element={<NotFound></NotFound>} />
          </Routes>

          <br></br>

        <a className={scroll}  href="#header" ><i class="fa-solid fa-arrow-up fa-2xl"></i></a>

        </main>
        <footer className="footer" >
          <RFooter></RFooter>
        </footer>
      </div>
    </Router>
  );
}

export default App;
