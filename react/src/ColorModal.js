import React from 'react';


export default class ColorModal extends React.Component {
    constructor(props){
        super(props);

        this.colorList = [ '000000', '993300', '333300', '003300', '003366', '000066', '333399', '333333', 
                           '660000', 'FF6633', '666633', '336633', '336666', '0066FF', '666699', '666666', 
                           'CC3333', 'FF9933', '99CC33', '669966', '66CCCC', '3366FF', '663366', '999999', 'CC66FF', 'FFCC33', 'FFFF66',
                           '99FF66', '99CCCC', '66CCFF', '993366', 'CCCCCC', 'FF99CC', 'FFCC99', 'FFFF99', 'CCffCC', 'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF' ];

        this.bgColor = "";
        this.fgColor = "";
     
        this.closeModal = this.closeModal.bind(this);                       
        this.showColorPicker = this.showColorPicker.bind(this);
        this.pickColor = this.pickColor.bind(this);
        this.setColor = this.setColor.bind(this);
    }

    componentDidMount() {
        let picker = document.querySelector(".color-picker-container .color-picker");
        picker.style.setProperty('visibility','hidden');
        
        this.colorList.forEach( (color,index) => {
            let blockElem = document.querySelector(`.color-item-${index}`);    
            blockElem.style.setProperty('background-color','#' + color);
        });
    
    }

    showColorPicker(e) {
        this.holderElemClass=e.target.className;
        let picker = document.querySelector(".color-picker-container .color-picker");
        picker.style.setProperty('visibility','visible');
    }

    closeModal() {
        let picker = document.querySelector(".color-picker-container .color-picker");
        picker.style.setProperty('visibility','hidden');
        this.props.closeThemeModal();
    }

    pickColor(e) {
        let holder = document.querySelector(`.color-picker-container .${this.holderElemClass}`);
        holder.style.setProperty("background-color",e.target.style.backgroundColor);
     
        let picker = document.querySelector(".color-picker-container .color-picker");
        picker.style.setProperty('visibility','hidden');
    }

    setColor(e) {
        let body = document.getElementsByTagName('body')[0];
        let bgColorHolder = document.querySelector(`.color-picker-container .bg-color-holder`);    
        body.style.setProperty('background-color',bgColorHolder.style.backgroundColor);

        let leftDialog = document.querySelector(`.app-wrapper .main-app .left-dialog-wrapper`);
        let topBar = document.querySelector(`.app-wrapper .topbar-wrapper`);
        let fgColorHolder = document.querySelector(`.color-picker-container .fg-color-holder`);    
        leftDialog.style.setProperty('background-color',fgColorHolder.style.backgroundColor);
        topBar.style.setProperty('background-color',fgColorHolder.style.backgroundColor);
   
        let picker = document.querySelector(".color-picker-container .color-picker");
        picker.style.setProperty('visibility','hidden');
        this.props.closeThemeModal();
    }

    render(){
        const classN = this.props.displayFlag ? "color-picker-container show" : "color-picker-container hide";

        const colors = this.colorList.map((color,index)=> {
            let temp = `color-item color-item-${index}`
            return (
                <li key={index} className={temp} onClick={this.pickColor}></li>
            );
        });

        return(
            <div className={classN}>
                <div class="heading">
                    <p>Choose color (# hex)</p>
                    <i onClick={this.closeModal} class="fa fa-close close-icon"></i>
                </div>
                
                <div class="holder-wrapper">
                    <p>Background-</p>
                    <div onClick={this.showColorPicker} class="bg-color-holder"></div>
                </div>    

                <div class="holder-wrapper">
                    <p>Foreground-</p>
                    <div onClick={this.showColorPicker} class="fg-color-holder"></div>
                </div>    

               <button onClick={this.setColor}>Set color</button>

                <div class="color-picker" id="color-picker">
                    {colors }
                </div>
            </div>
        );
    }

}
