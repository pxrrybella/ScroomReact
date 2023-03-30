import React from "react";
import { BannerNoUser } from "../components";
import Login from "../components/Login";


const LoginPage = () => {
    return (
        <div className="flex-body">
            <BannerNoUser />
            <Login />
            <div className="empty-space">
            </div>
        </div>
    )
}

export default LoginPage;