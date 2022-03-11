import centerbg from '@assets/main_centerbg.svg';

const StationMap = () => {
    return (
        <div className='station-map'>
            <img src={centerbg} alt='' />
            <div className='title'>Events status by station</div>
            <div className='content'></div>
        </div>
    );
};

export default StationMap;
