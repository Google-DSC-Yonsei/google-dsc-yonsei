import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "./404";
import DeveloperPage from "./Developer";
import GooglePage from "./Google";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/google" element={<GooglePage />} />
      <Route path="/developer" element={<DeveloperPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

export default App;
