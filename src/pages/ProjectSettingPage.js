import React from "react";
import ProjectSetting from "../components/ProjectSetting";
import { Banner } from "../components";
import { useEffect, useState } from "react";
import { getUserwebByUsername, userwebGetAll } from "../services/UserwebService";
import TableMembers from "../components/TableMembers";
import { getUserByProject } from "../services/UserwebProjectService";
import { projectDelete } from "../services/ProjectService";

const ProjectSettingPage = () => {

    const [userProject, setUserProject] = useState([]);
    const [userweb, setUserweb] = useState([]);
    const [project, setProject] = useState([]);

    const deleteProject = async (id) => {
        await projectDelete(id);
    }

    const getUsersByProject = async () => {
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
                <div className="row m-3 shadow">
                    <ProjectSetting
                    project={project}
                    deleteProject={deleteProject}/>
                    <TableMembers
                        userProject={userProject} />
                </div>
            </div>
            <div className="empty-space"></div>
            <div className="empty-space2"></div>
        </div>
    )
}

export default ProjectSettingPage;