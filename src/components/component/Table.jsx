import { Progress } from 'antd';

const Table = ({ thead, jsonData, unit }) => {
    let standardNumber = 0;
    if(jsonData){
        standardNumber = jsonData[0].value;
    }

    return (
        <div className='table'>
            <div className='thead'>
                {thead.map((list,i) => {
                    return (
                        <div className={list.class + ' th'} key={i}>{list.title}</div>
                    );
                })}
            </div>
            <div className='tbody'>
                {jsonData && jsonData.map((list,i) => {
                    return (
                        <div className='tr' key={i}>
                            <div className='td key'>{list.key}</div>
                            <div className='td name'>{list.name}</div>
                            <div className='td progress'>
                                <Progress
                                    className='progressBar'
                                    strokeColor={{
                                        '0%': '#108ee9',
                                        '100%': '#87d068',
                                    }}
                                    format={(p) => unit === 'per' ?  p.toFixed() :  (p / 100).toFixed(2)}
                                    percent={list.value / standardNumber * 100}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Table;
