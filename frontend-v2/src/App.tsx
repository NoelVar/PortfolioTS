import { useEffect, useState } from "react"
import Landing from "./components/Landing/Landing"
import Splash from "./components/SplashScreen/Splash"

function App() {
  // () => !JSON.parse(localStorage.getItem("showedSplash") || "false"
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
      // localStorage.setItem("showedSplash", JSON.stringify(true));
    }, 7500);
  }, []);

  return (
    <div>
      {showSplash ? (
      <Splash />
      ) : (
      <Landing />
      )}
    </div>
  )
}

export default App
