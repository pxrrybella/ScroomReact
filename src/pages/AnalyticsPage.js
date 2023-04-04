import React from "react";
import { Banner } from "../components";
import Sprints from "../components/Sprints";
import Analytics from "../components/Analytics";
import { MenuAnalytics } from "../components/Menu";
import { useEffect, useState } from "react";
import { getUserwebFirstLastName } from "../services/UserwebService";

const AnalyticsPage = () => {
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
                <MenuAnalytics/>
                <Sprints/>
                <Analytics/>
            </div>
        </div>
    </div>
    )
}

export default AnalyticsPage;