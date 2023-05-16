import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  // options - массив, каждый объект внутри массива это колонка.
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="auth/:id" element={<AuthPage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
