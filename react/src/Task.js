
import './index.css'
import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    
        this.textAreaAdjust = this.textAreaAdjust.bind(this);
        this.updateTextAreaHeight = this.updateTextAreaHeight.bind(this);
        this.textAreaClick = this.textAreaClick.bind(this);
    }

    textAreaClick() {
        this.props.displayModalCb(this.props.cardName,this.props.taskObject,this.props.index);    
    }

    componentDidMount() {
        const taskBriefElem = document.querySelector(`.task-brief-${this.props.cardIndex}-${this.props.index}`);
        taskBriefElem.value = this.props.taskObject["title"];
        
        this.updateTextAreaHeight(taskBriefElem);    
    }

    componentDidUpdate() {
        const taskBriefElem = document.querySelector(`.task-brief-${this.props.cardIndex}-${this.props.index}`);
        taskBriefElem.value = this.props.taskObject["title"];
        
        this.updateTextAreaHeight(taskBriefElem);
    }

    updateTextAreaHeight(element) {
        element.style.height = "1px";
        element.style.height = (element.scrollHeight)+"px";

        const taskNodes = [...document.querySelectorAll(`.tasks-list-wrapper-${this.props.cardIndex} .task-brief`)];
        let height = 0
        taskNodes.forEach((node,index) =>{
            height = height + node.clientHeight; 
        });

        height = height + (taskNodes.length+2)*10 + 60;
        let tasksContainerElem = document.querySelector(`.tasks-list-wrapper-${this.props.cardIndex}`);
        tasksContainerElem.style.setProperty('height', `${height}` + "px" );
    }

    textAreaAdjust(element) {
        element.target.style.height = "1px";
        element.target.style.height = (element.target.scrollHeight)+"px";

        const taskNodes = [...document.querySelectorAll(`.tasks-list-wrapper-${this.props.cardIndex} .task-brief`)];
        let height = 0
        taskNodes.forEach((node,index) =>{
            height = height + node.clientHeight; 
        });

        height = height + (taskNodes.length+2)*10 + 50;
        let tasksContainerElem = document.querySelector(`.tasks-list-wrapper-${this.props.cardIndex}`);
        tasksContainerElem.style.setProperty('height', `${height}` + "px" );
    }


    render() {
        const classN = `task-brief task-brief-${this.props.cardIndex}-${this.props.index}`;

        return(
            <textarea className={classN} onClick={this.textAreaClick} onKeyUp={this.textAreaAdjust}>
            </textarea>
        );
    }

}
