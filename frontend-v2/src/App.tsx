import { useEffect, useState } from "react"
import {Routes, Route} from 'react-router-dom'
import Splash from "./components/SplashScreen/Code_Splash"
import Home from "./components/Frame/Frame";

function App() {
  const [showSplash, setShowSplash] = useState(
    () => !JSON.parse(localStorage.getItem("showedSplash") || "false")
  )

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
      localStorage.setItem("showedSplash", JSON.stringify(true));
    }, 7500);
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
            element={<Home />}
          />
        </Routes>
      </>
      )}
    </div>
  )
}

export default App
