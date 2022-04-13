import { Route, Routes, useLocation } from "react-router-dom";
import Subject01 from "@pages/Subject01";
import Subject02 from "@pages/Subject02";
import Subject03 from "@pages/Subject03";
import Cctv from "@pages/Cctv";

function App() {
    return (
        <Routes>
            <Route path="/tscada/" element={<Subject01 />} />
            <Route path="/tscada/station" element={<Subject02 />} />
            <Route path="/tscada/occ" element={<Subject03 />} />
            <Route path="/tscada/cctv" element={<Cctv />} />
        </Routes>
    );
}

export default App;
