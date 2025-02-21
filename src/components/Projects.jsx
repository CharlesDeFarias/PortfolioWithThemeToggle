import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

const Projects = ({theme}) => {
    // console.log(`projects component before render`);

    return (
        <div className="parentDiv projects">
          <h2>Projects</h2>
          <section className="projectsContainer">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} theme={theme}/>
            ))}
          </section>
        </div>
    )
}

export default Projects;