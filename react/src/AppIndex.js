import React from 'react';
import './index.css'
import TopBar from './TopBar'
import LeftDialog from './LeftDialog'
import AppContent from './AppContent'          
import TaskModal from './TaskModal'
import ListModal from './ListModal'
import ColorModal from './ColorModal'

export default class AppIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //boardList: this.fetchBoardList()
            boardList: [{"name":"RG","cardsCount":4,"tasksCount":10},
                         {"name":"SampleBoard 2","cardsCount":9,"tasksCount":10},
                         {"name":"SampleBoard 3","cardsCount":6,"tasksCount":20},
                         {"name":"SampleBoard 4","cardsCount":8,"tasksCount":15}],
            currentIndex: 0,
            displayModal: false,
            newListModal: false,
            themeModal: false,

            //cards: this.fetchCardDetails(),
            cards: ["To-Do List","Doing","High Priority","Daily Agenda","Less Priority"],
            cardName:"",
           
            modalTask: {},
            taskIndex: 0,

            //tasks: this.fetchTaskDetails()
            tasks: [ { "To-Do List": [ {"title":"Demo Task 1" , "description":"Demo Description"} , {"title":"Demo Task 2" , "description":"Demo Description"} , {"title":"Demo Task 3" , "description":"Demo Description"} ]} , 
                     { "Doing": [ {"title":"Demo Task 1" , "description":"Demo Description"} , {"title":"Demo Task 2" , "description":"Demo Description"} , {"title":"Demo Task 3" , "description":"Demo Description"}, {"title":"Demo Task 4" , "description":"Demo Description"} ]} ,
                     { "High Priority": [ {"title":"Demo Task 1" , "description":"Demo Description"} , {"title":"Demo Task 2" , "description":"Demo Description"} ]} ,
                     { "Daily Agenda": [ {"title":"Demo Task 1" , "description":"Demo Description"} , {"title":"Demo Task 2" , "description":"Demo Description"} , {"title":"Demo Task 3" , "description":"Demo Description"} , {"title":"Demo Task 4" , "description":"Demo Description"} , {"title":"Demo Task 5"} ]},
                     { "Less Priority": [ {"title":"Demo Task 1" , "description":"Demo Description"} , {"title":"Demo Task 2" , "description":"Demo Description"} ]}]
        };
        
        this.fetchBoardList = this.fetchBoardList.bind(this);
        this.changeCurrentBoard = this.changeCurrentBoard.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.addTask = this.addTask.bind(this);
        this.addNewCard = this.addNewCard.bind(this);
        this.closeNewListModal = this.closeNewListModal.bind(this);
        this.addList =  this.addList.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeThemeModal = this.closeThemeModal.bind(this);
    }
    
    fetchBoardList() {
        
        
    }

    changeCurrentBoard(index) {
        document.querySelector(`.board-list-wrapper .board-list .boards-list-${this.state.currentIndex}`).style.background = "white";
        document.querySelector(`.board-list-wrapper .board-list .boards-list-${index}`).style.background = "#4E9E45";

        this.setState({
            currentIndex: index
        });
    }

    addNewCard() {
        this.setState({
            newListModal: true
        });
        // let cards = this.state.cards.slice();
        // cards.push("Demo Task");

        // let tasks = this.state.tasks.slice();
        // tasks.push({"Demo Task" : []});

        // console.log(cards);
        // this.setState({
        //     cards: cards,
        //     tasks: tasks
        // });
    }

    changeTheme() {
        this.setState({
            themeModal: true    
        });
    }

    displayModal(name,modalTask,index) {
        this.setState({
            displayModal: true,
            cardName: name,            
            modalTask: modalTask,
            taskIndex: index
        });
    }

    closeModal() {
        this.setState({
            displayModal: false
        });
    }

    closeThemeModal() {
        this.setState({
            themeModal: false    
        });
    }

    addTask(taskObject,flag) {
        let tasks = this.state.tasks.slice();
        
        tasks = tasks.map((task,index) => {
            if ( task[this.state.cardName] !== undefined) {
                if (flag==0){
                    task[this.state.cardName].push(taskObject);
                }
                else {
                    
                    task[this.state.cardName][this.state.taskIndex] = taskObject;    
                }
            }
            return task;
        });

        this.setState({
            tasks: tasks,
            displayModal: false
        })
    }

    closeNewListModal() {
        this.setState({
            newListModal: false
        });
    }

    addList(name) {
        let cards = this.state.cards.slice();
        cards.push(name);

        let tasks = this.state.tasks.slice();
        let object = {};
        object[name] = []
        tasks.push(object);

        this.setState({
            cards: cards,
            tasks: tasks,
            newListModal: false    
        });
    }

    render() {
        return (
            <div class="app-wrapper">
                <TopBar></TopBar>
                
                <section class="main-app">
                    <LeftDialog addNewCard={this.addNewCard} changeTheme={this.changeTheme} boardList={this.state.boardList} currentIndex={this.state.currentIndex} changeCurrentBoard={this.changeCurrentBoard}></LeftDialog>
                    <AppContent boardName={this.state.boardList[this.state.currentIndex].name} boardIndex={this.state.currentIndex} displayModalCb={this.displayModal} cards={this.state.cards} tasks={this.state.tasks}></AppContent>
                    {/* <ListModal addNewList={this.addList} displayFlag={this.state.newListModal} closeModal={this.closeNewListModal}></ListModal> */}
                    <ColorModal displayFlag={this.state.themeModal} closeThemeModal={this.closeThemeModal}></ColorModal>                    
                </section>

                <ListModal addNewList={this.addList} displayFlag={this.state.newListModal} closeModal={this.closeNewListModal}></ListModal>
                <TaskModal task={this.state.modalTask} addTask={this.addTask} displayFlag={this.state.displayModal} closeModal={this.closeModal}></TaskModal>
            </div>
        );
    }

}