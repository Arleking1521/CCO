import React from 'react';
import Inventory from "../pages/inventory";

const InvHeader = () => {
    return (
        <>
            <div className='header'>
                <div class="tb">INVENTORY</div>
                <div className='Cell-count'>Size: 25/50</div>
            </div>
            <div className='inv-main'>
                <Inventory/>
            </div>
        </>
    );
};

export default InvHeader;