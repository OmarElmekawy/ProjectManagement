import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';

import { useState } from 'react';

function App() {
  const [projectState, setProjectState] =useState({
    selelectedProject: undefined,
    projects: [],
    tasks:[]
})

function handleAddTask(text){
  setProjectState(prevState => {
    const taskId =Math.random()
    const newTask= {
      text:text,
      projectId: prevState.selelectedProject,
      id: taskId
    }
    return {
      ...prevState, 
      tasks: [newTask,...prevState.tasks]
    };
  })
}


function handleDeleteTask(id){
  setProjectState(prevState => {
    return {
     ...prevState, 
       tasks: prevState.tasks.filter(task => task.id !== id)
    }
  })
}


function handleStartAddProject(){
  setProjectState(preState => {
    return {
      ...preState,
      selelectedProject: null
    }
  })
}
function handleSelectProject(id){
  setProjectState(preState => {
    return {
      ...preState,
      selelectedProject: id
    }
  })
}
function handleCancelAddProject (){
  setProjectState(preState => {
    return {
      ...preState,
      selelectedProject: undefined
    }
})
}

function handleAddProject (projectData){
  setProjectState(prevState => {
    const newProject= {
      ...projectData,
      id: Math.random()
    }
    return {
      ...prevState, 
      selelectedProject: undefined,
      projects: [...prevState.projects, newProject]
    }
  })
}

function handleDeleteProject (){
  setProjectState(prevState => {
    return {
    //  ...prevState, 
      selelectedProject: undefined,
       projects: prevState.projects.filter(project => project.id !== prevState.selelectedProject)
    }
  })
}


const selectedProject= projectState.projects.find(project => project.id === projectState.selelectedProject)

let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks} />

if (projectState.selelectedProject === null){
  content =<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
} else if (projectState.selelectedProject === undefined){
  content=<NoProjectSelected onStartAddProject={handleStartAddProject} />
}
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selelectedProject}/>
      {content}
    </main>
  );

  }
export default App;
