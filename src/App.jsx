import { useState } from "react";
import Portfolio from "./components/Portfolio";
import "./app.css";

const App = () => {
  //want to start with darkmode by default because it's the superior mode. fite me.
  const [isDark, setDarkMode] = useState(true);

  const handleToggle = () => {
    console.log(`theme mode handle toggle before set - ${isDark}`);
    setDarkMode(!isDark);
  };

  let themeMode = isDark ? "Dark":"Light"

  console.log(isDark)
  console.log(themeMode)
  console.log(handleToggle)

  return (
    <div className={`parentDiv ${themeMode}`} id="appDiv">
      <Portfolio theme={themeMode} isDark={isDark} handleToggle={handleToggle} />
    </div>
  );
};

export default App;
