import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectCodeEnter = () => {
    return (
        <div className="card m-auto col-6 p-4">
            <h2 className="mb-4">Ingrese el código del proyecto:</h2>
            <input type="text" max={7} className="form-control form-control-lg text-center" placeholder="Ingrese aquí el código de 7 dígitos"></input>
            <button type="submit" className="btn btn-primary mt-4"><Link to="/DashboardPage">Ir al dashboard</Link></button>
        </div>
    )
}

const projectDefault = {
    "project_id": 0,
    "project_name": "",
    "admin_name": ""
}

const CreateProject = ( {agregarProject} ) => {

    const [project, setProject] = useState(projectDefault);
    const { project_id, project_name, admin_name } = project;
    const handleInputChange = (p) => {
        const handleInputChange = {
            ...project,
            [p.target.name]: p.target.value,
        }
        setProject(handleInputChange);
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
        alert(project.project_id);
      }

    return (
        <div className="card m-auto col-6 p-4">
            <h2 className="mb-4">Nombre del proyecto</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" max={30} className="form-control form-control-lg text-center" placeholder="Ingrese aquí el nombre del proyecto" id="project_name" name="project_name" value={project_name} onChange={handleInputChange}></input>
            <button type="submit" className="btn btn-primary mt-4" onClick={() => agregarProject(project)}>Siguiente</button>
            {project.project_name!==undefined ? (<div className="text-center"> <h1>Tu código: {project.project_id}</h1> <Link to="/DashboardPage">Siguiente</Link></div>):(<></>)}
            </form>
        </div>
    )
}

const ProjectCode = (project) => {
    return (
        <div className="card m-auto col-6 p-4">
            <h2 className="mb-4">El código de tu proyecto es:</h2>
            <input type="text" max={30} className="form-control form-control-lg text-center" value={project.project_id} disabled="true"></input>
            <button type="submit" className="btn btn-primary mt-4"><Link to="/DashboardPage">Ir al dashboard</Link></button>
        </div>
    )
}

export { ProjectCode, CreateProject, ProjectCodeEnter };
