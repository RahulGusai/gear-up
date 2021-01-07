import './index.css';
import React from 'react';
import Task from './Task';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
        
        this.showModal = this.showModal.bind(this);
    }

    componentDidMount() {
        const taskNodes = [...document.querySelectorAll(`.tasks-list-wrapper-${this.props.cardIndex} .task-brief`)];
        let height = 0
        taskNodes.forEach((node,index) =>{
            height = height + node.clientHeight; 
        });

        height = height + (taskNodes.length+2)*10 + 60;
        let tasksContainerElem = document.querySelector(`.tasks-list-wrapper-${this.props.cardIndex}`);
        tasksContainerElem.style.setProperty('height', `${height}` + "px" );
        tasksContainerElem.style.setProperty('grid-template-rows', `repeat(${taskNodes.length},auto)` );
    }

    componentDidUpdate() {
   
    }


    showModal() {
        console.log("Displaying task modal now");
        this.props.displayModalCb(this.props.name , {});
    }

    render() {
        const tasks = this.props.tasks[this.props.name].map( (task,index) => {
            return(
                <Task index={index} taskObject={task} cardName={this.props.name} cardIndex={this.props.cardIndex} displayModalCb={this.props.displayModalCb} class="task"></Task>
            );
        });

        let tasksClassN = `tasks-list-wrapper-common tasks-list-wrapper-${this.props.cardIndex}`; 

        return(
            <div className="list-wrapper">
                <label class="list-name">{this.props.name}</label>

                <div className={tasksClassN}> 
                    {tasks}
                    <div class="add-new-task" onClick={this.showModal}>
                        <i class="fa fa-plus" aria-hidden="true"></i>    
                    </div>
                </div>

            </div>
        );
    }

}
