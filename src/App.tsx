import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Teaser from "./pages/teaser";

const App = (function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teaser" element={<Teaser />} />
        </Routes>
    </BrowserRouter>
  );
});

export default App;
