import React from "react";
import ProjectSetting from "../components/ProjectSetting";
import { Banner } from "../components";
import { useEffect, useState } from "react";
import { getUserwebFirstLastName } from "../services/UserwebService";
import TableMembers from "../components/TableMembers";

const ProjectSettingPage = () => {

    const [userweb, setUserweb] = useState([]);

    const getUserwebNombreApellido = async () => {
        setUserweb(await getUserwebFirstLastName());
    }

    useEffect(() => {
        getUserwebNombreApellido();
    }, [])

    return (
        <div className="flex-body">
            <div>
                <Banner userweb={userweb} />
            </div>
            <div>
                <ProjectSetting />
                <TableMembers />
                <div className="empty-space2"></div>
            </div>
        </div>
    )
}

export default ProjectSettingPage;