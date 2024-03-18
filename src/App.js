import React from 'react';
import Pages from "./pages/Pages";
import Category from "./components/Category.jsx";
import {BrowserRouter} from "react-router-dom";
import Toolbar from "./components/Toolbar";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Pages />
        </BrowserRouter>
    </div>
  );
}

export default App;
