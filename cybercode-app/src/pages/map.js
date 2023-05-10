import React from 'react';
import act_pic1 from "../images/diamond.png";
import act_pic2 from "../images/cyberwear.png";
import act_pic3 from "../images/printer.png";
import act_pic4 from "../images/weapon.png";
import act_pic5 from "../images/mart.png";
import act_pic6 from "../images/terminal.png";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import act_pic7 from "../images/bank.png";
import act_pic8 from "../images/tpost.png";
import act_pic9 from "../images/terminal.png";
import gt_pic1 from "../images/travel.png";
import gt_pic2 from "../images/com-area.png";
import gt_pic3 from "../images/market.png";
import gt_pic4 from "../images/band.png";

const Map = () => {
    return (
            <div className='main'>
                <div className="info-pic">
                    <div className="page-name"> Shangri-La City Center </div>
                    <div className="page-info">
                        <div className="info">
                            [Central Hub] <br/>
                            One of the busiest cities in the continent. Here you can find all sorts of people from around the globe.
                        </div>
                    </div>
                </div>
                <div className="actions">
                    <div className="chapter-name"> INTERACTABLE</div>
                    <div className="act-row">
                        <a className="act-items exchange-office" >
                            <div className="act-item-img"><img src={act_pic1}/></div>
                            <div className="act-item-name">ARASAKA UNIT EXCHANGE</div>
                        </a>
                        <a className="act-items cyberwear">
                            <div className="act-item-img"><img src={act_pic2}/></div>
                            <div className="act-item-name">COSMETIC CYBERWEAR</div>
                        </a>
                        <a className="act-items printer">
                            <div className="act-item-img"><img src={act_pic3}/></div>
                            <div className="act-item-name">MOLECULAR 3D PRINTER</div>
                        </a>
                    </div>
                    <div className="act-row">
                        <a className="act-items weapon-smith">
                            <div className="act-item-img"><img src={act_pic4}/></div>
                            <div className="act-item-name">WEAPON SMITH</div>
                        </a>
                        <a className="act-items mart">
                            <div className="act-item-img"><img src={act_pic5}/></div>
                            <div className="act-item-name">TRINOKY MART</div>
                        </a>
                        <a className="act-items terminal">
                            <div className="act-item-img"><img src={act_pic6}/></div>
                            <div className="act-item-name">TERMINAL</div>
                        </a>
                    </div>
                    <div className="act-row">
                        <Nav.Link className="act-items bank" as={Link} to="/bank">
                            <div className="act-item-img"><img src={act_pic7}/></div>
                            <div className="act-item-name">BANK OF ARASAKA</div>
                        </Nav.Link>
                        <a className="act-items trade-post">
                            <div className="act-item-img"><img src={act_pic8}/></div>
                            <div className="act-item-name">LEE'S TRADING POST</div>
                        </a>
                        <a className="act-items cali-station">
                            <div className="act-item-img"><img src={act_pic9}/></div>
                            <div className="act-item-name">CALIBRATION STATION</div>
                        </a>
                    </div>

                </div>
                <div className="go-to">
                    <div className="chapter-name">TRAVEL</div>
                    <div className="gt-items station">
                        <div className="gt-item-img"><img src={gt_pic1}/></div>
                        <div className="gt-item-info">
                            <div className="gt-item-name">GO TO HYPER TRAIN CENTRAL STATION</div>
                            <div className="gt-item-descript">[Adventure] Using the hyperloop, you can travel at supersonic speed across the continent with ease.</div>
                        </div>
                    </div>
                    <div className="gt-items bussines">
                        <div className="gt-item-img"><img src={gt_pic2}/></div>
                        <div className="gt-item-info">
                            <div className="gt-item-name">GO TO SHANGRI-LA COMMERCIAL AREA</div>
                            <div className="gt-item-descript">[Job Hub] Here are many shops and businesses reside. The perfect location to hone and refine your skills.</div>
                        </div>
                    </div>
                    <div className="gt-items shop">
                        <div className="gt-item-img"><img src={gt_pic3}/></div>
                        <div className="gt-item-info">
                            <div className="gt-item-name">GO TO SHANGRI-LA MARKET STREET</div>
                            <div className="gt-item-descript">[Player Market] The famous market street in Shangri-La. Loads of market stalls fill the street.</div>
                        </div>
                    </div>
                    <div className="gt-items band-room">
                        <div className="gt-item-img"><img src={gt_pic4}/></div>
                        <div className="gt-item-info">
                            <div className="gt-item-name">GO TO GANG HEADQUARTERS</div>
                            <div className="gt-item-descript">[Gang] The headquarters for you and your gang members to plan and execute your next operation</div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Map;