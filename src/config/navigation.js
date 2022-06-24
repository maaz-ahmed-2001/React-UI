import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import AboutUs from "../views/aboutUs";
import English from "../views/english";
import ForBusiness from "../views/forBusiness";
import Home from "../views/home";


function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route path="" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="ForBusiness" element={<ForBusiness />} />
                    <Route path="AboutUs" element={<AboutUs />} />
                    <Route path="English" element={<English />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation