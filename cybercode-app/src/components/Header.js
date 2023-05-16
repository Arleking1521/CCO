import React from 'react';
import Map from "../pages/map";

const Header = () => {
    return (
        <>
            <header action=" " method="post">
                <div className="level-count"></div>
                <div className="prof-info">
                    <div className="player-info">
                        <div className="nickname"></div>
                        <div className="bandName">Legion[LEG]</div>
                    </div>
                    <div className="level-info">
                        <div className="level-bar"></div>
                        <div className="exp-count"></div>
                    </div>
                    <div className="moneys">
                        <div className="btc">1253025 BTC</div>
                        <div className="units">123456 UNITS</div>
                    </div>
                </div>
            </header>
            <Map/>
        </>
    );
};

export default Header;