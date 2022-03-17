import CCTVTable from "@components/cctv/CCTVTable";
import TopNavi from "@components/component/TopNavi";

const Cctv = () => {
    return (
        <div className="cctv-back">
            <TopNavi />
            <div className="table-div">
                <CCTVTable />
            </div>
        </div>
    );
};

export default Cctv;
