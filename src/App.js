import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Header from "./components/Header";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/cadastro' element={<SignUpPage />} />
        <Route path='/hoje' element={<TodayPage />} />
        <Route path='/habitos' element={<HabitsPage />} />
        <Route path='/historico' element={<HistoryPage />} />
      </Routes>
      <Menu />
    </BrowserRouter>
  );
}

