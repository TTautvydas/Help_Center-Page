import "./App.css";
import FormPage from "./components/FormPage/FormPage";
import HelpPage from "./components/HelpPage/HelpPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<HelpPage />} />
        <Route path="/submit" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
