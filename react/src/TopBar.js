import './index.css'
import React from 'react';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return( 
            <div class="topbar-wrapper">
                <button class="home-btn"><i class="fa fa-home"></i></button>
                <input class="search-items"/>
                <i class="fa fa-search search-icon"></i>
                
                <img class="logo" src="logo.png"/>

                <button class="plus-btn"><i class="fa fa-plus"></i></button>
                <button class="notify-btn"><i class="fa fa-bell"></i></button>
                <button class="account-btn">R</button>
            </div>
        );
    }

}
