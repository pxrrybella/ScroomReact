import React from "react";
import  { useEffect, useState } from "react";


const userwebInit = {
    "user_name":"",
    "first_name":"",
    "last_name":"",
    "user_password":""
       
}
  



const Setting = ({editUserweb,userwebEdited,setUserwebEdited}) => {
    const [userweb, setUserweb] = useState(userwebInit);
    const {user_name,first_name,last_name,user_password} = userweb;

const handleInputChange = (u) => {
    console.log(u);
    const handleFormValue = {
        ...userweb,
        [userweb.target.name]: userweb.target.value,
    }
    setUserweb(handleFormValue);
    console.log(userweb);
}
    useEffect(()=>{
        if(userwebEdited!==null){
            setUserweb(userwebEdited);   
        }else{setUserweb({
            "userweb_id": 2,
            "user_name":"",
            "first_name":"",
            "last_name":"",
            "email":"",
            "user_password":"",
            "company_position":"",
            "company_id":1
        })

        }
    },[userwebEdited])

    return (
        <div className="setting col-3 m-3 text-center d-flex flex-column align-items-center shadow mx-auto">
            <h4 className="mt-4">Configuración de usuario</h4>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Nombre</b></label>
                <input type="text" 
                class="form-control" 
                placeholder="Nombre"
                id="first_name"
                name="first_name"
                value={first_name}
                onChange={handleInputChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Apellido</b></label>
                <input type="text"
                 class="form-control" 
                 placeholder="Apellido"
                 id="last_name"
                 name="last_name"
                 value={last_name}
                 onChange={handleInputChange}/>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Nombre de usuario</b></label>
                <input type="text" 
                class="form-control"
                placeholder="Nombre de usuario"
                id="user_name"
                name="user_name"
                value={user_name}
                onChange={handleInputChange}/>
               
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Nueva contraseña</b></label>
                <input type="password" 
                class="form-control"
                placeholder="contraseña"
                id="user_password"
                name="user_password"
                value={user_password}
                onChange={handleInputChange}/>
            
            </div>
            <div class="mb-3">
                <label for="disabledTextInput" class="form-label"><b>Contraseña actual</b></label>
                <p>Verificar cambios</p>
                <input type="password" id="disabledTextInput" class="form-control" />
            </div>
            {userwebEdited !== null ? (<div class="text-center m-3">
            <button class="btn btn-primary" onClick = {()=>editUserweb(userweb)}type="button">Guardar</button>
            </div> ):(<></>)} 
            
            <div className="cancel text-center m-3">
                <button class="btn btn-primary" onClick = {()=>setUserwebEdited(null)} type="button">Cancelar</button>
            </div>
        </div>
    )
}

export default Setting;
