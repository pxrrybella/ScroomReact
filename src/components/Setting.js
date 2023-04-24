import React from "react";
import  { useEffect, useState } from "react";


const userwebInit = {
    "userweb_id":2,
    "user_name":"",
    "first_name":"",
    "last_name":"",
    "email":"",
    "user_password":"",
    "company_position":"",
    "company_id":1

       
}
  



const Setting = ({editUserweb,userwebEdited,setUserwebEdited}) => {
    const [userweb, setUserweb] = useState(userwebInit);
    const {user_name,first_name,last_name,user_password,email} = userweb;

const handleInputChange = (u) => {
    console.log(u + "hangleInputChange ejecutandose");
    const handleFormValue = {
        ...userweb,
        // "email":userweb.email,
        // "company_position":userweb.company_position,
        // "company_id":userweb.company_id,
        // "userweb_id":userweb.userweb_id,
        [u.target.name]: u.target.value,
    }
    setUserweb(handleFormValue);
    console.log(userweb);  
    console.log(u + "hangleInputChange ejecutandose");    
}
const current_password = handleInputChange ;
const handleSave = () => {
    if (current_password === userweb.user_password) {
   console.log("Las contraseñas coinciden");
 //     editUserweb(userweb);
    } else {
      alert("Contraseña actual incorrecta");
    }
}
    useEffect(()=>{
        if(userwebEdited!==null){
            setUserweb(userwebEdited);   
        }else{setUserweb({
            "userweb_id": 2,
            "user_name":"",
            "first_name":"",
            "last_name":"",
            "email":"mary.smith@email.com",
            "user_password":"",
            "company_position":"Q.A.",
            "company_id":2,
          
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
                placeholder={first_name}
                id="first_name"
                name="first_name"
                value={first_name}
                onChange={handleInputChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Apellido</b></label>
                <input type="text"
                 class="form-control" 
                 placeholder={last_name}
                 id="last_name"
                 name="last_name"
                 value={last_name}
                 onChange={handleInputChange}/>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Nombre de usuario</b></label>
                <input type="text" 
                class="form-control"
                placeholder={user_name}
                id="user_name"
                name="user_name"
                value={user_name}
                onChange={handleInputChange}/>
               
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Email</b></label>
                <input type="text" 
                class="form-control"
                placeholder={email}
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}/>
               
            </div>
            <div class="mb-3">
                <label for="disabledTextInput" class="form-label"><b>Contraseña actual</b></label>
                <p>Verificar cambios</p>
                <input type="password" id="disabledTextInput" class="form-control" />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Nueva contraseña</b></label>
                <input type="password" 
                class="form-control"
                placeholder={user_password}
                id="user_password"
                name="user_password"
                value={user_password}
                onChange={handleInputChange}/>

            </div>
           
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"><b>Confirmar contraseña</b></label>
                <input type="password" 
                class="form-control"
            //    placeholder={user_password}
                id="confirm_password"
                name="confirm_password"
            //    value={user_password}
                onChange={handleSave} />
                
            </div>
            <div class="text-center m-3">
            <button class="btn btn-primary" onClick = {()=>editUserweb(userweb)}type="button">Guardar</button>
            </div>
            {/* {userwebEdited !== null ? (<div class="text-center m-3">
            <button class="btn btn-primary" onClick = {()=>editUserweb(userweb)}type="button">Guardar</button>
            </div> ):(<></>)}  */}
            
            <div className="cancel text-center m-3">
                <button class="btn btn-primary" onClick = {()=>setUserwebEdited(null)} type="button">Cancelar</button>
            </div>
        </div>
    )
}

export default Setting;
