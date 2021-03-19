import React from 'react';
import './index.css';


export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
    }

    selectCard() {
        this.setState({clicked: !this.state.clicked});
    }

    // checkCardNum() {
    //     if(!this.state.clicked) {
    //         if(this.props.cardCount < 3) {
    //             this.props.countInt();
    //             this.setState({clicked: !this.state.cliked})
    //         } else {
    //             this.setState({clicked: false})
    //         }
    //     } else{
    //         this.props.countDec();
    //         this.setState({clicked: !this.state.cliked})
    //     }
    // }


    render() {
        let styleClass = this.state.clicked ? "selectedCard" : "card";
        
        const shape = [];
        if(this.props.shape === "circle" && this.props.shading === "solid") {
            for (let i = 0; i < this.props.count; i++) {
                shape.push(
                    <svg viewBox="0 0 50 50">
                        <circle cx="50%" cy="50%" r="23" stroke={this.props.color} fill={this.props.color}/>
                    </svg>)
            }
        } else if(this.props.shape === "circle" && this.props.shading === "empty") {
            for (let i = 0; i < this.props.count; i++) {
                shape.push(
                    <svg viewBox="0 0 50 50">
                        <circle cx="50%" cy="50%" r="23" stroke={this.props.color} fill="none"/>
                    </svg>)
            }
        } else if(this.props.shape === "circle" && this.props.shading === "stripe") {
            for (let i = 0; i < this.props.count; i++) {
                shape.push(
                    // this pattern is reference from https://codepen.io/chriscoyier/pen/BmJdrY
                    <svg viewBox="0 0 50 50">
                        <defs>
                            <pattern id="pattern-stripe" 
                            width="5" height="3" 
                            patternUnits="userSpaceOnUse"
                            patternTransform="rotate(45)">
                            <rect width="4" height="3" transform="translate(0,0)" fill="white"></rect>
                            </pattern>
                            <mask id="mask-stripe">
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
                            </mask>      
                        </defs>
                        <circle cx="50%" cy="50%" r="23" stroke={this.props.color} mask="url(#mask-stripe)" fill={this.props.color}/>
                    </svg>)
                    
            }
        } else if(this.props.shape === "triangle" && this.props.shading === "solid") {
            for (let i = 0; i < this.props.count; i++) {
                shape.push(
                    <svg id="triangle" viewBox="0 0 100 100">
                        <polygon points="50 0, 100 100, 0 100" stroke={this.props.color} fill={this.props.color}/>
                    </svg>)
            }
        } else if(this.props.shape === "triangle" && this.props.shading === "empty") {
            for (let i = 0; i < this.props.count; i++) {
                shape.push(
                    <svg id="triangle" viewBox="0 0 100 100">
                        <polygon points="50 0, 99 99, 0 99" stroke={this.props.color} strokeWidth="2" fill="none"/>
                    </svg>)
            }
        } else if(this.props.shape === "triangle" && this.props.shading === "stripe") {
            for (let i = 0; i < this.props.count; i++) {
                shape.push(
                    <svg viewBox="0 0 50 50">
                        <defs>
                            <pattern id="pattern-stripe" 
                            width="4" height="4" 
                            patternUnits="userSpaceOnUse"
                            patternTransform="rotate(45)">
                            <rect width="2" height="4" transform="translate(0,0)" fill="white"></rect>
                            </pattern>
                            <mask id="mask-stripe">
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
                            </mask>      
                        </defs>
                        <polygon points="25 0, 50 50, 0 50" stroke={this.props.color} mask="url(#mask-stripe)" fill={this.props.color}/>
                    </svg>)
            }
        } else if(this.props.shape === "square" && this.props.shading === "solid") {
            for (let i = 0; i < this.props.count; i++) {
                shape.push(
                    <svg viewBox="0 0 100 100">
                        <rect x="0" y="0" width="100%" height="100%" stroke={this.props.color} fill={this.props.color}/>
                    </svg>)
            }
        } else if(this.props.shape === "square" && this.props.shading === "empty") {
            for (let i = 0; i < this.props.count; i++) {
                shape.push(
                    <svg viewBox="0 0 100 100">
                        <rect x="0" y="0" width="100%" height="100%" stroke={this.props.color} strokeWidth="3" fill="none"/>
                    </svg>)
            }
        } else if(this.props.shape === "square" && this.props.shading === "stripe") {
            for (let i = 0; i < this.props.count; i++) {
                shape.push(
                    <svg viewBox="0 0 50 50">
                        <defs>
                            <pattern id="pattern-stripe" 
                            width="4" height="4" 
                            patternUnits="userSpaceOnUse"
                            patternTransform="rotate(45)">
                            <rect width="2" height="4" transform="translate(0,0)" fill="white"></rect>
                            </pattern>
                            <mask id="mask-stripe">
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-stripe)" />
                            </mask>      
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" stroke={this.props.color} mask="url(#mask-stripe)" fill={this.props.color}/>
                    </svg>)
            }
        }

        return (
            <div className="cardWrap">
                <div className={styleClass} onClick={() => {this.selectCard();}}>
                    {shape}
                </div>
            </div>
        )

    }
}