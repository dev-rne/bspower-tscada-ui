import { Route, Routes } from "react-router-dom";
import Subject01 from "@pages/Subject01";
import Subject02 from "@pages/Subject02";
import Subject03 from "@pages/Subject03";
import Cctv from "@pages/Cctv";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Subject01 />} />
            <Route path="/station" element={<Subject02 />} />
            <Route path="/occ" element={<Subject03 />} />
            <Route path="/cctv" element={<Cctv />} />
        </Routes>
    );
}

export default App;
