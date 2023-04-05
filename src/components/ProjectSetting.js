import React from "react";
import { Link } from "react-router-dom";

/*
cambiar nombre del proyecto
agrgar o quitar miembros
borrar proyecto */

const ProjectSetting = () => {
    return (
        <form class="row g-3 col-3 m-3 text-center d-flex flex-column align-items-center mx-auto">
            <h2>Configuración de proyecto</h2>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Cambiar nombre de proyecto</label>
                <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-12 text-center d-flex flex-column align-items-center mx-auto">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck">Autorizo los cambios</label>
                </div>
            </div>
            <Link to="/DashboardPage">
                <div className="aceptar text-center">
                    <button type="button" class="btn btn-warning"> Aceptar</button>
                </div>
            </Link>
            <div className="eliminar text-center m-3">
                <button type="button" class="btn btn-danger ms-2">Eliminar proyecto</button>
            </div>
        </form>
    )
}

export default ProjectSetting;