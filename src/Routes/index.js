import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./routes.scss";

const Login = React.lazy(() => import("../Components/Login/login"));
const Bundles = React.lazy(() => import('../Components/Bundles/index'));
const Cost = React.lazy(() => import('../Components/Cost/index'));
const AddInfluencer = React.lazy(() => import('../Components/AddInfluencer/index'));

function RouteF() {

    return (
        <div>
            <Suspense
                fallback={<div className="load_parent">
                    <div className="loaderss"></div>
                </div>}
            >
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="/bundles" element={<Bundles />} />
                </Routes>
                <Routes>
                    <Route path="/cost" element={<Cost />} />
                </Routes>
                <Routes>
                    <Route path="/addInfluencer" element={<AddInfluencer />} />
                </Routes>
            </Suspense>
        </div>
    )
}
export default RouteF;