import React from "react";
import { Banner } from "../components";
import Sprints from "../components/Sprints";
import Analytics from "../components/Analytics";
import { MenuAnalytics } from "../components/Menu";

const AnalyticsPage = () => {
    return (
        <div className="pag">
        <Banner/>
        <div className='row'>
            <div className='row'>
                <MenuAnalytics/>
                <Sprints/>
                <Analytics/>
            </div>
        </div>
    </div>
    )
}

export default AnalyticsPage;