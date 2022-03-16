import centerbg from '@assets/dashboardTop.svg';

const StationMap = () => {
    return (
        <div className='station-map'>
            <div className="bgbox">
                <img src={centerbg} alt='' />
                <div className="imgbox"></div>
            </div>
            <div className='title'>Events status by station</div>
            <div className='content'></div>
        </div>
    );
};

export default StationMap;
