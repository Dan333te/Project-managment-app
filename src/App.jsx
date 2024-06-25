import SideBar from "./components/SideBar";
import NoProjects from "./assets/no-projects.png";
import Button from "./ui/button";
import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/PorjectsDetails";
function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [projects, setProjects] = useState([]);
  const [formInfo, setFormInfo] = useState({
    title: "",
    description: "",
    date: 0,
  });
  const [selectedProject, setSelectedProject] = useState(null);

  function handleDeleteProject(index){
    const updatedProject=projects.filter((project,ind)=>ind!==index)
    setProjects(updatedProject)
    setIsFormShown(false)
    setSelectedProject(false)
  }
  function handleChange(e) {
    setFormInfo((prevInfo) => ({ ...prevInfo, [e.target.id]: e.target.value }));
    console.log(formInfo);
  }
  function handleShowForm() {
    setIsFormShown(true);
    setSelectedProject(false);
  }
  function handleCancel() {
    setIsFormShown(false);
  }
  function handleSave(e) {
    e.preventDefault();
    if (formInfo.title && formInfo.date && formInfo.description) {
      setProjects((prev) => [...prev, formInfo]);
      setFormInfo({ title: "", description: "", date: "00-00-00" });
      setIsFormShown(false);
      console.log(projects);
    }
  }
  function showProjectDetails(title) {
    if (projects) {
      const project = projects.find((project) => project.title == title);
      setSelectedProject(project);
      setIsFormShown(false);
    }
  }
  const selectedProjectIndex=projects.findIndex((project)=>project===selectedProject)
  return (
    <>
      <SideBar
        handleClick={handleShowForm}
        projects={projects}
        showProjectDetails={showProjectDetails}
      />
      {isFormShown && (
        <NewProject
          handleCancel={handleCancel}
          handleChange={handleChange}
          handleSave={handleSave}
          formInfo={formInfo}
        />
      )}
      {!isFormShown & !selectedProject && (
        <section className="flex flex-col items-center w-full pt-32">
          <img
            src={NoProjects}
            className="h-20 w-20 "
            alt=" no projects found"
          />
          <h3 className="mt-8 text-3xl text-gray-600 font-bold">
            No Projects Selected
          </h3>
          <p className="mt-8 text-xl text-gray-500">
            Select a project or get started with a new one
          </p>
          <Button clickEvent={handleShowForm}>Create new project </Button>
        </section>
      )}
      {selectedProject && <ProjectDetails project={selectedProject} onDelete={()=>handleDeleteProject(selectedProjectIndex)} />}
    </>
  );
}

export default App;
