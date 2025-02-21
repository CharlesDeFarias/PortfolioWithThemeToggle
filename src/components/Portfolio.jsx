import Projects from "./Projects";
import ThemeToggle from "./ThemeToggle";
import ContactCard from "./ContactCard";
import AboutMe from "./AboutMe";

//may have to move aboutme and contact into here afte rall

const Portfolio = ({theme, isDark, handleToggle}) => {
  return (
    <div className={`parentDiv ${theme}`} id="portfolioParent">      <header>
        <h1>
            THE <small><small><small><small>eventually</small></small></small></small> AMAZING PORTFOLIO OF THE <small><small><small><small>eventually</small></small></small></small> AMAZING CHARLES
        </h1>
      </header>
      <main>
      <ThemeToggle handleToggle={handleToggle} theme={theme} isDark={isDark}/>
      <AboutMe theme={theme} />
      <ContactCard theme={theme} />
      <Projects theme={theme}/>
      </main>
      <footer>
        <p>&copy; 2025 RC Ascend Alum</p>
      </footer>
    </div>
  );
}

export default Portfolio;
