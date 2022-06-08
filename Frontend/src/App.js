import react, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreateDocument from "./pages/CreateDocument";
import NotFound from "./pages/NotFound";
import Document from "./pages/Document";
import DocumentList from "./pages/DocumentList";
import EditDocument from "./pages/EditDocument";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          {login ? (
            <span>
              <a href="/documents">Documents</a>
              <a href="/createdocument">Create Document</a>
            </span>
          ) : (
            <div />
          )}
        </div>
      </div>

      <Routes>
        <Route index element={<MainPage setLogin={setLogin} />} />
        <Route path="/CreateDocument" element={<CreateDocument />} />
        <Route path="/Documents" element={<DocumentList />} />
        <Route path="/view/:id" element={<Document />} />
        <Route path="/edit/:id" element={<EditDocument />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
