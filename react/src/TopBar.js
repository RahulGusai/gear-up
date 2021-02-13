import './index.css'
import React from 'react';

export default class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        this.accountBtnClick = this.accountBtnClick.bind(this);
    }

    accountBtnClick(e) {
        e.preventDefault();
        let dropdownElem = document.querySelector(".topbar-wrapper .account-btn-wrapper .account-btn-dropdown");
        const visibility = dropdownElem.style.visibility;
        if ( (visibility === "") | (visibility === 'hidden') ) {
            dropdownElem.style.setProperty("visibility","visible");
        }
        else {
            dropdownElem.style.setProperty("visibility","hidden");
        }

    }

    render() {
        return( 
            <div class="topbar-wrapper">
                <button onclick={this.accountBtnClick} class="home-btn"><i class="fa fa-home"></i></button>
                <input class="search-items"/>
                <i class="fa fa-search search-icon"></i>

                <img class="logo" src="logo.png"/>

                <button class="plus-btn"><i class="fa fa-plus"></i></button>
                <button class="notify-btn"><i class="fa fa-bell"></i></button>
                <div class="account-btn-wrapper">
                        <button onClick={this.accountBtnClick} class="account-btn">R</button>
                        <div class="account-btn-dropdown">
                            <a>Home</a>
                            <a>Settings</a>
                            <a>Profile</a>
                            <a onClick={this.props.onLogout}>Logout</a>
                         </div>
                </div>
            </div>
        );
    }

}
