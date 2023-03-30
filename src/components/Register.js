import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="login p-5 col-6 m-3 text-center d-flex flex-column align-items-center shadow mx-auto">
            <div></div>
            <h5 class="text-center mb-4">¡Regístrate!</h5>
            <form class="form-card" onsubmit="event.preventDefault()">
                <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="text" class="form-control" id="username" name="username" placeholder="Nombre de usuario"/></div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label><input type="text" class="form-control" id="company" name="company" placeholder="Compañia"/> </div>
                </div>
                <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="text" class="form-control" id="first_name" name="first_name" placeholder="Nombre"/> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="text" class="form-control" id="last_name" name="last_name" placeholder="Apellido"/> </div>
                </div>
                <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="email" class="form-control" id="email" name="email" placeholder="Correo"/> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-label px-3"></label> <input type="password" class="form-control" id="password" name="password" placeholder="Contraseña"/> </div>
                </div>
                <div class="row justify-content-end mt-4">
                    <Link to="/IndexPage"><button class="btn btn-primary " type="button">Entrar</button></Link>
                </div>
                <div className="text-center m-3">
                    <h6>¿Ya tienes una cuenta? <Link to="/Login">Inicia sesión</Link> </h6>
                </div>
            </form>
        </div>
    )
}

export default Register;