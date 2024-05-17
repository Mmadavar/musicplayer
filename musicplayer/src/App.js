import {BrowserRouter, Routes, Route} from 'react-router-dom'
import library from "./library";
import {Navbar} from "./components/Navbar";
import Player from "./Player"

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Navbar></Navbar>
              <Routes>
                  <Route path="/" >Home</Route>
                  <Route path="/library" Component={library}></Route>
                  <Route path="/player" Component={Player}></Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
