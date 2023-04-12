import React from "react";
import { Link } from "react-router-dom";

const ProjectSetting = () => {
    return (
        <form class="col-3 m-3 text-center d-flex flex-column align-items-center mx-auto">
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
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Eliminar proyecto</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">¿Deseas eliminar este proyecto?</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary">Sí, estoy seguro</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ProjectSetting;