import React from "react" 
// import Navbar from "./components/Navbar"
// import About from "./components/About"
// import ProjectList from "./components/ProjectList"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import KolahFarangi from "./pages/KolahFarangi"
import Starters from "./pages/Starters"
import Home from "./pages/Home"
import HighStakes from "./pages/HighStakes"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  // return (
  //   <div>
  //     <Navbar />
  //     <main>
  //       <About />
  //       <ProjectList />
  //     </main>
      
  //   </div>
  // );
  // const [codeContext, setCodeContext] = React.useState("");

  return (
    <div className="App">
      
        <Router>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/kolahfarangi/*" element={<KolahFarangi />}/>  
              <Route path="/starters/*" element={<Starters />}/>
              <Route path="/highstakes/*" element={<HighStakes />}/>
          </Routes>
        </Router>  
      
    </div>
  );
}

export default App;
