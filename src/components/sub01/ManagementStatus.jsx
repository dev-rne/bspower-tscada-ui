import React, { useState } from 'react';
import { Modal } from 'antd';

const ManagementStatus = ({dataList}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };

    return (
        <div className='management-status sectionBox'>
           <div className='title'>Management status by Device</div>
           <div className="contents">
               {dataList && dataList.map((list,idx) => {
                   return(
                    <div className="device" key={idx} onClick={showModal}>
                        <div className="img-box">
                            <img src={require(`@assets/icons/${list.img}.png`)} alt=''/>
                            <div className="name">{list.name}</div>
                        </div>
                        <div className="value-box">
                            <div className="label">Mng Cnt</div>
                            <div className="value">{list.mng_cnt}</div>
                        </div> 
                        <div className="value-box">
                            <div className="label">Down Cnt</div>
                            <div className="value">{list.mxg_cnt}</div>
                        </div>  
                    </div>
                   )
               })}
                <Modal visible={isModalVisible} onCancel={handleOk} footer={null} className="modal" maskClosable={false}>
                <p>Some contents...</p>
            </Modal>
            </div>
        </div>
    );
};

export default ManagementStatus;
