import "./App.css";
import Gallery from "./components/Gallery";
import { Route, Routes } from "react-router";
import { Favorite } from "./components/Favorite";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/" element={<Gallery />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
}

export default App;
