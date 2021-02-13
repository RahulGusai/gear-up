import React from 'react';
import './index.css'


export default class LeftDialog extends React.Component {
    constructor(props) {
        super(props);

        this.addNewCard = this.addNewCard.bind(this);
    }

    componentDidMount() {
        console.log(this.props.boards);
        console.log(this.props.currentIndex);
        
        document.querySelector(`.board-list-wrapper .board-list .boards-list-${this.props.currentIndex}`).style.background = "#4E9E45";
    }

    componentDidUpdate() {
        document.querySelector(`.board-list-wrapper .board-list .boards-list-${this.props.currentIndex}`).style.background = "#4E9E45";
    }

    addNewCard() {
        this.props.addNewCard();
    }

    render() {
        var boards = this.props.boards.map( (board,index) => {
            return(
                <li key={index} class="boards-list" onClick={() => this.props.changeCurrentBoard(index)}>
                    <button className={`boards-list-${index}`}>{board.name}</button>
                </li>   
            );
        });

        return (
            <div class="left-dialog-wrapper">
                    <div class="heading">
                        <label class="currentBoardLabel"><u>{this.props.boards[this.props.currentIndex]["name"]}</u></label>
                        <div class="footer">
                            <label class="card-label">Tasks- {this.props.boards[this.props.currentIndex]["tasksCount"]} </label>
                            <label class="task-label">Cards- {this.props.boards[this.props.currentIndex]["cardsCount"]} </label>
                        </div>
                    </div>

                    <div class="board-list-wrapper">
                        <label>Boards</label>
                        <div class="board-list">
                            <ul>
                                {boards}
                                <li>
                                    <button class="add-new-board">Add New Board</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="options-wrapper">
                        <label>Options</label>
                        <div class="options-list">
                            <ul>
                                <li onClick={this.addNewCard}>
                                    <button>Add New List</button>
                                </li>
                                <li>
                                    <button onClick={this.props.changeTheme}>Change Theme</button>
                                </li>
                            </ul>
                        </div>
                    </div>
    
            </div>
        );
    }
}

