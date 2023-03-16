import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import UserInfoContext from "./contexts/UserInfoContext";
import { useEffect, useState } from "react";
import TokenContext from "./contexts/TokenContext";

export default function App() {
  const [userInfo, setUserInfo] = useState({ name: '', image: '', token: '', habits: [], todayHabits: [], progress: 0 });
  const [tokenStored, setTokenStored] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('userData') !== null) {
      const localData = JSON.parse(localStorage.getItem('userData'));
      setUserInfo({ ...userInfo, ...localData });
      setTokenStored(true);
    }
  }, []);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      <TokenContext.Provider value={{ tokenStored, setTokenStored }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/cadastro' element={<SignUpPage />} />
            <Route path='/hoje' element={<TodayPage />} />
            <Route path='/habitos' element={<HabitsPage />} />
            <Route path='/historico' element={<HistoryPage />} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </UserInfoContext.Provider >
  );
}