import { Banner } from "./Banner";
import { BannerNoUser } from "./Banner";
import { render } from "react-dom";
import { LineChart } from "./LineChart";
import { Register } from "./Register";

export {
    Banner,
    BannerNoUser,
    Register
}

const rootElement = document.getElementById("root");
render(<LineChart />, rootElement);

