import './index.css'
import React from 'react';


export default class TaskModal extends React.Component {
    constructor(props) {
        super(props);
        
        this.closeModal = this.closeModal.bind(this);
        this.addCard = this.addCard.bind(this);
    }

    closeModal() {
        this.props.closeModal();
    }

    addCard() {
        const titleElem = document.querySelector(`.task-modal .heading .title-wrapper .title-area`);
        const descriptionElem = document.querySelector(`.task-modal .content-wrapper .main .description textarea`);

        const taskObject = {"title":titleElem.value,
                            "description":descriptionElem.value
                        };
    
        if ( Object.keys(this.props.task).length === 0 && this.props.task.constructor === Object) {
            this.props.addTask(taskObject,0);
        }
        else {
            this.props.addTask(taskObject,1);
        }
    }

    componentDidMount() {
        const titleElem = document.querySelector(`.task-modal .heading .title-wrapper .title-area`);
        const descriptionElem = document.querySelector(`.task-modal .content-wrapper .main .description textarea`);

        if ( Object.keys(this.props.task).length === 0 && this.props.task.constructor === Object) {
            titleElem.value = "";
            descriptionElem.value = "";
        }
        else {
            titleElem.value = this.props.task["title"];
            descriptionElem.value = this.props.task["description"];    
        }
    }

     componentDidUpdate() {
        const titleElem = document.querySelector(`.task-modal .heading .title-wrapper .title-area`);
        const descriptionElem = document.querySelector(`.task-modal .content-wrapper .main .description textarea`);
        const labelElem = document.querySelector(`.task-modal .content-wrapper .save-update-btn label`);

        if ( Object.keys(this.props.task).length === 0 && this.props.task.constructor === Object) {
            titleElem.value = "";
            descriptionElem.value = "";
        }
        else {
            titleElem.value = this.props.task["title"];
            descriptionElem.value = this.props.task["description"];
            labelElem.textContent = "Update Card";
        }
    }

    render() {
        const classN = this.props.displayFlag ? "task-modal show" : "task-modal hide";

        return(
            <div className={classN}>
                <div class="heading">
                    <div class="title-wrapper">
                        <img class="icon" src="card.png"/>  
                        <textarea placeholder="Enter a title for this card..." class="title-area"></textarea>
                    </div>  
                    <i class="fa fa-close close-icon" onClick={this.closeModal}></i>
                </div>

                <div class="content-wrapper">
                    <div class="content">
                        <section class="main">
                            <div class="description">
                                <i class="fa fa-bars"></i>
                                <div class="textarea-wrapper">
                                    <label>Description</label>
                                    <textarea placeholder="Enter more detailed description here(optional).."></textarea>
                                    <button class="save-btn">Save</button>
                                </div>
                            </div>
                            
                            <div class="activity">
                                <div class="heading">
                                    <i class="fa fa-plus"></i>    
                                    <label>Activity</label>
                                    <button class="hide-details">Hide Details</button>
                                </div>

                                <div class="comments-wrapper">
                                    <div class="heading">
                                        <button class="account-btn">R</button>
                                        <textarea class="comment-area" placeholder="Write a comment..."></textarea>
                                    </div>
                                </div>
                            </div>
                        </section>
                        
                        <section class="options">
                            <div class="add-options">
                                <label>ADD TO CARD</label>
                                <div class="btn-wrapper">
                                    <label>Members</label>
                                </div>
                                <div class="btn-wrapper">
                                    <label>Checklist</label>
                                </div>
                                <div class="btn-wrapper">
                                    <label>Due Date</label>
                                </div>
                                <div class="btn-wrapper">
                                    <label>Attachment</label>
                                </div>
                            </div>

                            <div class="actions">
                                <label>MOVE</label>
                                <div class="btn-wrapper">
                                    <label>Move</label>
                                </div>
                                <div class="btn-wrapper">
                                    <label>Copy</label>
                                </div>
                                <div class="btn-wrapper">
                                    <label>Watch</label>
                                </div>
                                <div class="btn-wrapper">
                                    <label>Archive</label>
                                </div>
                            </div>   
                        </section>
                    </div>

                    <div class="save-update-btn" onClick={this.addCard}>
                            <label>Add This Card</label>
                    </div>

                </div>

            </div>
        );
    }

















}