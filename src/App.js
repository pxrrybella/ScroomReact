import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnalyticsPage from "./pages/AnalyticsPage";
import AuxPage from "./pages/AuxPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/Aux' element={<AuxPage/>}></Route>
            <Route path='/Analytics' element={<AnalyticsPage/>}></Route>
            <Route path='/Login' element={<LoginPage/>}></Route>
            <Route path='/Register' element={<RegisterPage/>}></Route>
            <Route path='/IndexPage' element={<IndexPage/>}></Route>
        </Routes>
        </BrowserRouter>
    )
};

export default App;