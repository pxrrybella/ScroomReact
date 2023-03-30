import { Banner } from "./Banner";
import { BannerNoUser } from "./Banner";
import { render } from "react-dom";
import { AuxIsa } from "./Chart";

export {
    Banner,
    BannerNoUser
}

const rootElement = document.getElementById("root");
render(<AuxIsa />, rootElement);

