import { useEffect, useState } from "react"
import {Routes, Route} from 'react-router-dom'
import Splash from "./components/SplashScreen/Code_Splash"
import Home from "./components/Frame/Frame";
import Selection_Page from "./pages/Selection_Page";

function App() {
  const [showSplash, setShowSplash] = useState(
    () => !JSON.parse(localStorage.getItem("showedSplash") || "false")
  )

  useEffect(() => {
    const createdAt = Number(localStorage.getItem("createdAt") ?? "0")
    const now = Date.now();

    if (createdAt == 0) {
      setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("showedSplash", JSON.stringify(true));
        localStorage.setItem("createdAt", JSON.stringify(Date.now()));
      }, 7500);
    } else {
      if (now - createdAt > 1 * 60 * 60 * 1000) {
        localStorage.removeItem("showedSplash")
        localStorage.removeItem("createdAt")
        setShowSplash(true);
      }
    }
  }, []);

  return (
    <div>
      {showSplash ? (
      <Splash />
      ) : (
        <>
        <Routes>
          <Route
            path='/'
            element={<Selection_Page />}
          />
        </Routes>
        <Routes>
          <Route
            path='/portfolio'
            element={<Home />}
          />
        </Routes>
      </>
      )}
    </div>
  )
}

export default App
