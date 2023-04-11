import React from "react";
import ProjectSetting from "../components/ProjectSetting";
import { Banner } from "../components";
import { useEffect, useState } from "react";
import { getUserwebByUsername, userwebGetAll } from "../services/UserwebService";
import TableMembers from "../components/TableMembers";
import { getUserByProject } from "../services/UserwebProjectService";

const ProjectSettingPage = () => {

    const [userProject, setUserProject] = useState([]);
    const [userweb, setUserweb] = useState([]);


    const getUsersByProject= async () => {
        console.log(await getUserByProject());
        setUserProject(await getUserByProject());
    }

    const getUserwebId = async () => {
        setUserweb(await getUserwebByUsername());
    }


    useEffect(() => {
        getUsersByProject();
        getUserwebId();
    }, [])

    return (
        <div className="flex-body">
            <div>
                <Banner userweb={userweb} />
            </div>
            <div>
                <ProjectSetting />
                <TableMembers
                    userProject={userProject}/>
                <div className="empty-space2"></div>
            </div>
        </div>
    )
}

export default ProjectSettingPage;