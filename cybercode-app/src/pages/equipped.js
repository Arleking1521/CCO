import React, { Component } from 'react';


export default class equipped extends Component {
    render() {
        return (
            <>
                <main>
                    <div class="quick-slots">
                        <div class="chapter-name"> QUICK SLOTS</div>
                        <div class="slots">
                            <div class="qs">QUICK SLOT</div>
                            <div class="qs">QUICK SLOT</div>
                            <div class="qs">QUICK SLOT</div>
                        </div>
                    </div>
                    <div class="equipped">
                        <div class="chapter-name"> EQUIPPED</div>
                        <div class="equip">
                            <div class="eq-name">PRIMARY WEAPON</div>
                            <div class="eq-slot">
                                <div class="eq-slot-pic"></div>
                                .eq-slot-
                                <div class="eq-slot-name"></div>
                                <div class="eq-slot-desc"></div>
                            </div>
                        </div>
                        <div class="equip">
                            <div class="eq-name">SPECIAL WEAPON</div>
                            <div class="eq-slot"></div>
                        </div>
                        <div class="equip">
                            <div class="eq-name">DESTRUCTIVE WEAPON</div>
                            <div class="eq-slot"></div>
                        </div>
                        <div class="equip">
                            <div class="eq-name">HELMET</div>
                            <div class="eq-slot"></div>
                        </div>
                        <div class="equip">
                            <div class="eq-name">UPPER ARMOR</div>
                            <div class="eq-slot"></div>
                        </div>
                        <div class="equip">
                            <div class="eq-name">LOWER ARMOR</div>
                            <div class="eq-slot"></div>
                        </div>
                        <div class="equip">
                            <div class="eq-name">BOOTS</div>
                            <div class="eq-slot"></div>
                        </div>
                        <div class="equip">
                            <div class="eq-name">BACKPACK</div>
                            <div class="eq-slot"></div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}