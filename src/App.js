import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./views/pages/HomePage";
import NotFoundPage from "./views/pages/NotFoundPage";
import Header from "./views/components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
