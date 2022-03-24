import { Progress } from 'antd';

const Table = ({ thead, jsonData }) => {
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
                                    format={(p) => p / 10}
                                    percent={list.value * 10}
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
