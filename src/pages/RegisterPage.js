import React from "react";
import { BannerNoUser } from "../components";
import Register from "../components/Register";


const RegisterPage = () => {
    return (
        <div className="flex-body">
        <BannerNoUser/>
        <Register/>
        <div className="empty-space2"></div>
        </div>
    )
}

export default RegisterPage;