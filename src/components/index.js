import { Banner } from "./Banner";
import { BannerNoUser } from "./Banner";
import { render } from "react-dom";
import { LineChart } from "./LineChart";
import { CreateProject } from "./CreateProjects";
import { ProjectCode } from "./CreateProjects";
import { ProjectCodeEnter } from "./CreateProjects";

export {
    Banner,
    BannerNoUser,
    CreateProject,
    ProjectCodeEnter,
    ProjectCode
}

const rootElement = document.getElementById("root");
render(<LineChart />, rootElement);

