import React from "react";
import "./App.css";
import { Home, Pokemon, About } from "./pages";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./action-creators/";
import { bindActionCreators } from "redux";

function App() {
  const isLoading = useSelector((state) => state.load.isLoading);

  return (
    <div className="App" style={{ height: isLoading ? "100vh" : "" }}>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Pokemon />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
