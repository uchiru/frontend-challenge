import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header />
      <main>
        <Gallery />
      </main>
    </>
  );
}

export default App;
