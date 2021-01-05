import './index.css'
import React from 'react';
import List from './List';

export default class AppContent extends React.Component {
    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
    }

    addTask(cardName,taskTitle) {

    }

    render() {
        const lists = this.props.cards.map( (card,index) => {
            return (
                <List  addTask={this.addTask} cardIndex={index} name={card} tasks={this.props.tasks[index]} displayModalCb={this.props.displayModalCb}></List>
            );
        });
        
        return(
            <div class="app-content-wrapper">
                {lists}
            </div>
        );
    }



}
