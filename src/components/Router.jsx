import { Routes, Route } from "react-router-dom";
// import Middleware from "../components/Middleware";
import {routes} from "../config/path"

const Routeur = () => {
    
    return (
        <Routes>
            {routes.map((e,i) => {
                return(
                    <Route key={i} path={e.path} element={e.element} />
                )
            })}
        </Routes>
    );
};

export default Routeur;