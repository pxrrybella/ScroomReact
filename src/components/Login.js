import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login col-3 m-3 text-center d-flex flex-column align-items-center shadow mx-auto">
            <h4 className="mt-4">Iniciar sesión</h4>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Correo electrónico"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Contraseña"></input>
            </div>
            <div className="text-center m-3">
                <h6>¿Olvidaste tu contraseña?</h6>
            </div>
            <div class="d-grid gap-2 col-3 mx-auto">
            <Link to="/DashboardPage"><button class="btn btn-primary " type="button">Entrar</button></Link>
            </div>
            <div className="text-center m-3">
                <h6>¿No tiene una cuenta? <Link to="/Register">Crear cuenta</Link> </h6>
            </div>
        </div>
    )
}
export default Login;