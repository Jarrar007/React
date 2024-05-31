import ResumeCard from "../components/resume-card";
import { js_data } from "../data/js-projects";
import { react_data } from "../data/react-projects";

const Projects = () => {
  return (
    <div className="projects" style={{textAlign : "center"}}>
      <h1>Javascript Projects</h1>
{js_data.map((js, index)=> {
  return (
    <div key={index}>
  <ResumeCard img={js.img} title={js.title} github_link={js.github_link} live_view={js.live_view} description={js.description}/>
  </div>
  )
})}

<h1 style={{marginTop : "20vh"}}>React Projects</h1>
{react_data.map((react_data, index)=> {
  return (
    <div key={index}>
  <ResumeCard img={react_data.img} title={react_data.title} github_link={react_data.github_link} live_view={react_data.live_view} description={react_data.description}/>
  </div>
  )
})}
    </div>
  )
}

export default Projects;