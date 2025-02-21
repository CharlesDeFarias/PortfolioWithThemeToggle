function ThemeToggle({handleToggle, theme, isDark}) {
    const message = isDark ? "Go ahead, click it and blind yourself" : "Join the dark side and unfurrow that brow"
// console.log(handleToggle)
// console.log(theme)
// console.log(isDark)

return (
        <div id="toggleDiv" className={`parentDiv ${theme} themeToggle`}>
          <button
            className="btn"
            onClick={handleToggle}
          >
            Switch to {theme} Mode Theme.
          </button>
          <span>{message}</span>
        </div>
    );
  }

  export default ThemeToggle;