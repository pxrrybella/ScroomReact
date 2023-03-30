import { Banner } from "./Banner";
import { BannerNoUser } from "./Banner";
import { render } from "react-dom";
import { LineChart } from "./LineChart";

export {
    Banner,
    BannerNoUser
}

const rootElement = document.getElementById("root");
render(<LineChart />, rootElement);

