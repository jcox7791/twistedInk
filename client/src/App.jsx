import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Compopnets
import TopNavBar from './componets/nav/topNav';
// Pages
import Home from './pages/home';

function App() {
  return (
    <>
    <TopNavBar />
      {/* displaying of pages and routes for navigation calls */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="" >
          </Route>
          <Route path="" >
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
