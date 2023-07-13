import React from "react";
import "./App.css";
import { Home, Pokemon, About } from "./pages";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import { HomeProvider } from "./contexts/";

function App() {
  return (
    <div className="App">
      <HomeProvider>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/:id" element={<Pokemon />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Route>
        </Routes>
      </HomeProvider>
    </div>
  );
}

export default App;
