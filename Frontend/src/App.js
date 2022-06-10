import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreateDocument from "./pages/CreateDocument";
import NotFound from "./pages/NotFound";
import Document from "./pages/Document";
import DocumentList from "./pages/DocumentList";
import EditDocument from "./pages/EditDocument";
import { useLogin } from "./services/login.provider";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const { user } = useLogin();

  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          {user ? (
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
        <Route index element={<MainPage />} />
        <Route
          path="/createdocument"
          element={
            <ProtectedRoute>
              <CreateDocument />
            </ProtectedRoute>
          }
        />
        <Route
          path="/documents"
          element={
            <ProtectedRoute>
              <DocumentList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view/:id"
          element={
            <ProtectedRoute>
              <Document />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditDocument />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
