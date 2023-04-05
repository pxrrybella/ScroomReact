import React from "react";

const Setting = () => {
    return (
        <div className="setting col-3 m-3 text-center d-flex flex-column align-items-center shadow mx-auto">
            <h4 className="mt-4">Configuración de usuario</h4>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Nombre</b></label>
                <input type="" class="form-control" id="exampleFormControlInput1"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Apellido</b></label>
                <input type="" class="form-control" id="exampleFormControlInput1"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Nombre de usuario</b></label>
                <input type="" class="form-control" id="exampleFormControlInput1"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Nueva contraseña</b></label>
                <input type="password" class="form-control" id="exampleFormControlInput1"></input>
            </div>
            <div class="mb-3">
                <label for="disabledTextInput" class="form-label"><b>Contraseña actual</b></label>
                <p>Verificar cambios</p>
                <input type="password" id="disabledTextInput" class="form-control" />
            </div>
            <div class="text-center m-3">
                <button class="btn btn-primary" type="button">Guardar</button>
            </div>
            <div className="cancel text-center m-3">
                <button class="btn btn-primary" type="button">Cancelar</button>
            </div>
        </div>
    )
}

export default Setting;