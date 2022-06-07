import react from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreateDocument from "./pages/CreateDocument";
import NotFound from "./pages/NotFound";
import Document from "./pages/Document";
import DocumentList from "./pages/DocumentList";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          <a href="/documents">Documents</a>
          <a href="/createdocument">Create Document</a>
        </div>
      </div>

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/CreateDocument" element={<CreateDocument />} />
        <Route path="/Documents" element={<DocumentList />} />
        <Route path="/:id" element={<Document />} />
        <Route path="/CreateDocument" element={<CreateDocument />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
