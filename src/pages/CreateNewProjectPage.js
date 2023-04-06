import React from "react";
import { Banner, CreateProject } from "../components";
import { useEffect, useState } from "react";
import { getUserwebFirstLastName } from "../services/UserwebService";

const CreateNewProjectPage = () => {

    const [userweb, setUserweb] = useState([]);

    const getUserwebNombreApellido = async() => {
        setUserweb(await getUserwebFirstLastName());
    }

    useEffect(() => {
        //instrucciones
        getUserwebNombreApellido();
    }, [])

    return (
        <div className="flex-body">
        <Banner userweb={userweb}/>
        <div className='row mt-5'>
            <div className='row'>
                <CreateProject/>
            </div>
        </div>
        <div className="empty-space2"></div>
    </div>
    )
}

export default CreateNewProjectPage;