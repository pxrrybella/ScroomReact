import React from "react";
import { Link } from "react-router-dom";

const ProjectCode = () => {
    return (
        <div className="card m-auto col-6 p-4">
            <h2 className="mb-4">El código de tu proyecto es:</h2>
            <input type="text" max={30} className="form-control form-control-lg text-center" value="1234567" disabled="true"></input>
            <button type="submit" className="btn btn-primary mt-4"><Link to="/DashboardPage">Ir al dashboard</Link></button>
        </div>
    )
}

const ProjectCodeEnter = () => {
    return (
        <div className="card m-auto col-6 p-4">
            <h2 className="mb-4">Ingrese el código del proyecto:</h2>
            <input type="text" max={7} className="form-control form-control-lg text-center" placeholder="Ingrese aquí el código de 7 dígitos"></input>
            <button type="submit" className="btn btn-primary mt-4"><Link to="/DashboardPage">Ir al dashboard</Link></button>
        </div>
    )
}


const CreateProject = () => {
    return (
        <div className="card m-auto col-6 p-4">
            <h2 className="mb-4">Nombre del proyecto</h2>
            <input type="text" max={30} className="form-control form-control-lg text-center" placeholder="Ingrese aquí el nombre del proyecto"></input>
            <button type="submit" className="btn btn-primary mt-4"><Link to="/CodeProject">Siguiente</Link></button>
        </div>
    )
}

export { ProjectCode, CreateProject, ProjectCodeEnter };
