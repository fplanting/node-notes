import react from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreateDocument from "./pages/CreateDocument";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/mainpage">Main Page</a>
          <a href="/createpost">Create Post</a>
        </div>
      </div>

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/CreateDocument" element={<CreateDocument />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
