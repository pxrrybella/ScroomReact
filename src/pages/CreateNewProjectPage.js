import React from "react";
import { Banner, CreateProject } from "../components";
import { useEffect, useState } from "react";
import { getUserwebByUsername } from "../services/UserwebService";
import { projectAdd } from "../services/ProjectService";
import { userwebProjectAdd } from "../services/UserwebProjectService";

const CreateNewProjectPage = () => {
    const [project, setProject] = useState([]);
    const [userwebProject, setUserwebProject] = useState([]);
    const [userweb, setUserweb] = useState([]);

    const getUserwebId = async() => {
        setUserweb(await getUserwebByUsername());
    }

    const agregarProject = async(project, userwebProject) => {
        await projectAdd(project);
        await userwebProjectAdd(userwebProject);
    }

    /*const agregarUserwebProject = async(userwebProject) => {
        await userwebProjectAdd(userwebProject);
    }*/


    useEffect(() => {
        getUserwebId();
    }, [])

    return (
        <div className="flex-body">
        <Banner userweb={userweb}/>
        <div className='row mt-5'>
            <div className='row'>
                <CreateProject agregarProject={agregarProject} userweb={userweb}/>
            </div>
        </div>
        <div className="empty-space2"></div>
    </div>
    )
}

export default CreateNewProjectPage;