import './index.css'
import React from 'react';
import List from './List';

export default class AppContent extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const lists = this.props.boardList[this.props.boardIndex]["tasks"].map( (tasks,index) => {
            const cardName = Object.keys(tasks)[0];
            return (
                    <List cardIndex={index} name={cardName} tasks={tasks[cardName]} displayModalCb={this.props.displayModalCb}></List>
                );
        });
        
        return(
            <div class="app-content-wrapper">
                {lists}
            </div>
        );
    }



}
