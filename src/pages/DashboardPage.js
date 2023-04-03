import React from "react";
import { Banner } from "../components";
import { Menu } from "../components/Menu";
import Sprints from "../components/Sprints";
import Survey from "../components/Survey";
import { useEffect, useState } from "react";
import { getUserwebFirstLastName } from "../services/UserwebService";

const DashboardPage = () => {

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
        <div className='row'>
            <div className='row'>
                <Menu/>
                <Sprints/>
                <Survey/>
            </div>
        </div>
    </div>
    )
}

export default DashboardPage;