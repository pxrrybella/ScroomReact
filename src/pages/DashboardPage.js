import React from "react";
import { Banner } from "../components";
import { Menu } from "../components/Menu";
import Sprints from "../components/Sprints";
import Survey from "../components/Survey";
import { useEffect, useState } from "react";
import { getUserwebByUsername } from "../services/UserwebService";
import { surveyAdd } from "../services/SurveyService";

const DashboardPage = () => {

    const [userweb, setUserweb] = useState([]);
    const [survey, setSurvey] = useState([]);

    const getUserwebId = async() => {
        setUserweb(await getUserwebByUsername());
    }

    const agregarEncuesta = async(survey) => {
        await surveyAdd(survey);
    }

    useEffect(() => {
        //instrucciones
        getUserwebId();
    }, [])

    return (
        <div className="flex-body">
        <Banner userweb={userweb}/>
        <div className='row'>
            <div className='row'>
                <Menu/>
                <Sprints/>
                <Survey agregarEncuesta={agregarEncuesta} userweb={userweb}/>
            </div>
        </div>
    </div>
    )
}

export default DashboardPage;