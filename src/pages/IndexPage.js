import React from "react";
import { Banner } from "../components";
import { Menu } from "../components/Menu";
import Sprints from "../components/Sprints";
import Survey from "../components/Survey";

const IndexPage = () => {
    return (
        <div className="flex-body">
        <Banner/>
        <div className='row'>
            <div className='row'>
                <Menu/>
                <Sprints/>
                <Survey/>
            </div>
        </div>
    </div>
    )
}

export default IndexPage;