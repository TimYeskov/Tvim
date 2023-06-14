import logo from "./img/another.png";
import Tvim from "./img/Tvim.svg";
import dot from "./img/dot.svg";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [dotsVisible, setDotsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDotsVisible(true);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="App">
      <div className="app__img">
        <img src={logo} className="logo" alt="logo" />
        {dotsVisible && (
          <div className="dot-container">
            <img src={dot} className="dot1" alt="dot" />
            <img src={dot} className="dot2" alt="dot" />
          </div>
        )}
      </div>
      <h1>Coming soon</h1>
    </div>
  );
}

export default App;
