import React from "react";

const CreateProject = () => {
    return (
        <div className="card m-auto col-6 p-4">
            <h2 className="mb-4">Nombre del proyecto</h2>
            <input type="text" max={30} className="form-control form-control-lg text-center"></input>
            <button type="submit" className="btn btn-primary mt-4">Siguiente</button>
        </div>
    )
}

export default CreateProject;