import React, { Component } from 'react';
let lastScrollY = 0;
let down = false;

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            downX: 0,
            downY: 0,
            rotateX: 0,
            rotateY: 0
        };
    }

    componentDidMount() { window.addEventListener ('scroll', this.handleScroll); }
    componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll); }

    handleScroll = () => {
        lastScrollY = window.scrollY;


        console.log(lastScrollY);
    };

    handleMouseDown = (event, mobile) => {
        down = true;
        if (mobile) {
            this.setState({
                downX: event.changedTouches[0].pageX,
                downY: event.changedTouches[0].pageY
            });
        } else {
            this.setState({
                downX: event.pageX,
                downY: event.pageY
            });
            document.getElementById("dragFrame").style.cursor = "grabbing"
        }
    };

    handleMouseMove = (event, mobile) => {
        if (down) {
            let state = this.state;
            let difX, difY = 0;
            console.log(mobile);
            if (mobile) {
                difX = state.downX - event.changedTouches[0].pageX;
                difY = state.downY - event.changedTouches[0].pageY;
            } else {
                difX = state.downX - event.pageX;
                difY = state.downY - event.pageY;
            }
            let newRotateX = state.rotateX + difX;
            let newRotateY = state.rotateY + difY;

            // console.log(difX);
            if (document.getElementById("directions"))
                document.getElementById("directions").remove();

            document.getElementById("front").style.webkitTransform = `rotateY(${newRotateX}deg) rotateX(${newRotateY}deg)`;
            document.getElementById("front").style.transform = `rotateY(${newRotateX}deg) rotateX(${newRotateY}deg)`;
            document.getElementById("back").style.webkitTransform = `rotateY(${newRotateX + 180}deg) rotateX(${-newRotateY}deg)`;
            document.getElementById("back").style.transform = `rotateY(${newRotateX + 180}deg) rotateX(${-newRotateY}deg)`;

            // console.log(newRotateX, newRotateX%180, (newRotateX%180)-45, ((newRotateX%180)-45)/45, (((newRotateX%180)-45)/45)*330);
            // console.log(newRotateX, (((newRotateX%180)-45)/45)*330);
            // if (newRotateX > 0) {
            //     document.getElementById("shineFront").style.left = -((((newRotateX % 180) - 45) / 45) * 330) + "px";
            //     document.getElementById("shineBack").style.left = ((((newRotateX % 180) - 45) / 45) * 330) + "px";
            //     // document.getElementById("shineFront").style.left = ((((newRotateY % 180) - 45) / 45) * 200) + "px";
            //     // document.getElementById("shineBack").style.left = -((((newRotateY % 180) - 45) / 45) * 200) + "px";
            // } else {
            //     document.getElementById("shineFront").style.left = -((((newRotateX % 180) + 45) / 45) * 330) + "px";
            //     document.getElementById("shineBack").style.left = ((((newRotateX % 180) + 45) / 45) * 330) + "px";
            //     // document.getElementById("shineFront").style.left = ((((newRotateY % 180) + 45) / 45) * 200) + "px";
            //     // document.getElementById("shineBack").style.left = -((((newRotateY % 180) + 45) / 45) * 200) + "px";
            // }

            // console.log(Math.abs(newRotateX%360), Math.abs(newRotateY%360), Math.abs(newRotateX%360/90), Math.abs(newRotateY%360/90))
            // if ((Math.abs(newRotateX%360/90) > 1 && Math.abs(newRotateX%360/90) < 3) ^ (Math.abs(newRotateY%360/90) > 1 && Math.abs(newRotateY%360/90) < 3)) {
            //     document.getElementById("front").style.zIndex = 1;
            //     document.getElementById("back").style.zIndex = 2;
            // } else {
            //     document.getElementById("front").style.zIndex = 2;
            //     document.getElementById("back").style.zIndex = 1;
            // }

        }
    };

    handleMouseUp = (event, mobile) => {
        down = false;
        let state = this.state;
        let newRotateX, newRotateY = 0;
        if (mobile) {
            newRotateX = state.rotateX + state.downX - event.changedTouches[0].pageX;
            newRotateY = state.rotateY + state.downY - event.changedTouches[0].pageY;
        } else {
            newRotateX = state.rotateX + state.downX - event.pageX;
            newRotateY = state.rotateY + state.downY - event.pageY;
            document.getElementById("dragFrame").style.cursor = "grab"
        }
        this.setState({
            rotateX: newRotateX,
            rotateY: newRotateY
        });
    };

    render() {
        return (
            <div style={{width: "100vw", height: "100vh", perspective: "50em"}} id="dragFrame"
                 onMouseDown={(e) => this.handleMouseDown(e, 0)} onMouseMove={(e) => this.handleMouseMove(e, 0)} onMouseUp={(e) => this.handleMouseUp(e, 0)}
                 onTouchStart={(e) => this.handleMouseDown(e, 1)} onTouchMove={(e) => this.handleMouseMove(e, 1)} onTouchEnd={(e) => this.handleMouseUp(e, 1)}>
                <pre id="directions">DRAG OR SWIPE</pre>
                <div id="front" className="front">
                    <div className="top">
                        <h1>HELLO</h1>
                        <p>my name is</p>
                    </div>
                    <h1 className="name">ALDO</h1>
                    <div className="bottom"/>
                    {/*<div id="shineFront" className="shine"/>*/}
                </div>
                <div id="back" className="back">
                    <h2>Work</h2>
                    <a href="https://weakmindedmasses.com">Weak Minded Masses</a><br/>
                    <a href="https://parkerschmidt.co">Parker Schmidt</a><br/>
                    <br/>
                    <div className="bottom">
                        <a href="https://github.com/jlamberti">Github</a>
                        <a href="mailto:jlamberti2015@gmail.com">Contact</a>
                    </div>
                    {/*<div id="shineBack" className="shine"/>*/}
                    {/*<div className="top">*/}
                        {/*<h1>HELLO</h1>*/}
                        {/*<h4>my name is</h4>*/}
                    {/*</div>*/}
                    {/*<h1 className="name">Karen</h1>*/}
                    {/*<div className="bottom">*/}
                        {/*<a href="mailto:jlamberti2015@gmail.com">Contact</a>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}