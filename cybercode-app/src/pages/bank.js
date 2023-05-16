import React from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import Npc from "../assets/npc/bank-npc.png";
import dep from "../assets/bank-deposit.png";
import withdraw from "../assets/bank-withdraw.png";
import depItem from "../assets/bank-deposit-items.png";
import withdrawItem from "../assets/bank-withdraw-items.png";

const Bank = () => {
    return (
        <>
            <div className='bank-header'>
                <Nav.Link className='back-btn' as={Link} to={'/'}>&#8249; Back</Nav.Link>
                <div className='balance'>
                    <div className='bal-btc'>[99999 btc]</div>
                    <div className='bal-units'>[9999 units]</div>
                </div>
            </div>
            <div className='bank-main'>
                <div className='bank-banner'>
                    <div className='bank-page-info'>
                        <div className='page-name'>Bank Of Arasaka</div>
                        <div className='npc-info'>
                            Lexi:<br/>
                            Thanks for visting today. Need any favors?
                        </div>
                    </div>
                </div>
                <img src={Npc} className='npc'/>
                <div className='deposit-bal'>BALANCE: 0</div>
                <div className='bank-actions'>
                    <div className='ba deposit'>
                        <img className='ba-img' src={dep}/>
                        <div className='ba-text'>
                            <div className='ba-name'>DEPOSIT</div>
                            <div className='ba-desc'>Put Bitcoins into bank</div>
                        </div>
                    </div>
                    <div className='ba deposit'>
                        <img className='ba-img' src={withdraw}/>
                        <div className='ba-text'>
                            <div className='ba-name'>DEPOSIT</div>
                            <div className='ba-desc'>Put Bitcoins into bank</div>
                        </div>
                    </div>
                    <div className='ba deposit'>
                        <img className='ba-img' src={depItem}/>
                        <div className='ba-text'>
                            <div className='ba-name'>DEPOSIT</div>
                            <div className='ba-desc'>Put Bitcoins into bank</div>
                        </div>
                    </div>
                    <div className='ba deposit'>
                        <img className='ba-img' src={withdrawItem}/>
                        <div className='ba-text'>
                            <div className='ba-name'>DEPOSIT</div>
                            <div className='ba-desc'>Put Bitcoins into bank</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Bank;