import React from 'react';
import './index.css'
import TopBar from './TopBar'
import LeftDialog from './LeftDialog'
import AppContent from './AppContent'          
import TaskModal from './TaskModal'
import ListModal from './ListModal'
import ColorModal from './ColorModal'
import axios from 'axios';

export default class AppIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            //STEPS
            // 1. Fetch board data from the API
            // 2. Feed the data to the React Component
            // 3. Upon some change, databse will be changed.
            // 4. First two steps will occur on mounting of component subsequent re-rendering.

            // boards: [],
            currentIndex: 0,
            displayModal: false,
            newListModal: false,
            themeModal: false,

            //cards: this.fetchCardDetails(),
            tasks: ["To-Do List","Doing","High Priority","Daily Agenda","Less Priority"],
            taskName:"",
           
            modalTask: {},
            cardIndex: 0,

            //tasks: this.fetchTaskDetails()
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
    
    componentDidMount() {
        // // Fetch board details
        // axios.get("/data/boards",{
        //     "headers": {
        //         "Authorization": "Bearer " + localStorage.getItem("access")
        //     }
        // })
        // .then( (response) => {
        //         console.log(response.data);
        //         this.setState({
        //             boards: response.data
        //         });
        //     } 
        // )
        // .catch( (error) => {
        //     console.log("PROMISE GOT REJECTED");
        //     console.log(error);
        //     }
        // );
    }
    
    async fetchBoardList() {
        // let boards; 
        let res = await axios.get("/data/boards",{ 
            "headers": {
                "Authorization": "Bearer " + localStorage.getItem("access")
            }
        })
        .then( (response) => {
            console.log(response.data);
            return response.data;
            // boards = response.data;
        })
        .catch( (error) => {
            console.log("PROMISE GOT REJECTED");
            console.log(error);
            }
        );
            
        console.log(res);
        return res;
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
        let tasks = this.state.boards[this.state.currentIndex]["tasks"].slice();
        
        tasks = tasks.map((task,index) => {
            console.log(task);
            if ( task[this.state.cardName] !== undefined) {
                if (flag==0){
                    task[this.state.cardName].push(taskObject);
                }
                else {
                    console.log("UPDATING");
                    task[this.state.cardName][this.state.taskIndex] = taskObject;    
                }
            }
            return task;
        });

        let boards = this.state.boards.slice();
        boards[this.state.currentIndex]["tasks"]=tasks;        

        this.setState({
            boards: boards,
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
        let boards;
        // Fetch board details
        
        boards = this.fetchBoardList();
        console.log(boards);
        let resolved = Promise.all(boards);
        console.log(resolved);

        
        
        console.log("Demo statement");        

        return (
            <div class="app-wrapper">
                <TopBar onLogout={this.props.onLogout}></TopBar>
                
                <section class="main-app">
                    <LeftDialog  addNewCard={this.addNewCard} changeTheme={this.changeTheme} boards={boards} currentIndex={this.state.currentIndex} changeCurrentBoard={this.changeCurrentBoard}></LeftDialog>
                    {/* <AppContent boards={this.state.boards} boardIndex={this.state.currentIndex} displayModalCb={this.displayModal}></AppContent>
                    <ColorModal displayFlag={this.state.themeModal} closeThemeModal={this.closeThemeModal}></ColorModal>                     */}
                </section>

                {/* <ListModal addNewList={this.addList} displayFlag={this.state.newListModal} closeModal={this.closeNewListModal}></ListModal>
                <TaskModal task={this.state.modalTask} addTask={this.addTask} displayFlag={this.state.displayModal} closeModal={this.closeModal}></TaskModal> */}
            </div>
        );
    }

}