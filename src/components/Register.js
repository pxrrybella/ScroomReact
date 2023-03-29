import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="col-3 m-3 text-center d-flex flex-column align-items-center shadow mx-auto">
            <h4 className="mt-4">Regístrate</h4>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo electrónico"></input>
            </div>
            <div className="row">
            <div class="mx-auto col-sm-5 mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"></input>
            </div>
            <div class="mx-auto col-sm-5 mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Apellido"></input>
            </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombre de usuario"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Compañia"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Contraseña"></input>
            </div>
            <div class="d-grid gap-2 col-3 mx-auto">
            <Link to="/IndexPage"><button class="btn btn-primary " type="button">Entrar</button></Link>
            </div>
            <div className="text-center m-3">
                <h6>¿Ya tienes una cuenta? <Link to="/Login">Inicia sesión</Link> </h6>
            </div>
        </div>
    )
}

export default Register;