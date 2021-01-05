import './index.css'
import React from 'react';

export default class ListModal extends React.Component {
    constructor(props) {
        super(props);

        this.addList = this.addList.bind(this);
    }

    addList() {
        const listNameElem = document.querySelector(`.list-modal .name`);
        this.props.addNewList(listNameElem.value);
    }

    render(){
        const classN = this.props.displayFlag ? "list-modal show" : "list-modal hide";
        return(
            <div className={classN}>
                <i class="fa fa-close close-icon" onClick={this.props.closeModal}></i>
                <textarea placeholder="Enter a name for the list" class="name"></textarea>
                <div class="add-list-btn" onClick={this.addList}>
                    <label>Add</label>
                </div>
            </div>        
        );
    }
}
