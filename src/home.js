import React, { Component } from 'react';
import Tilt from "react-tilt";

function Experience(props) {
    return (
        <div className="experience">
            <h2>{props.position}</h2>
            <h3>{props.location}</h3>
        </div>
    );
}

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <header>
                    <Tilt className="Tilt2" options={{scale: 1, perspective: 50, reset: true}}>
                        <h1>ALDO LAMBERTI</h1>
                    </Tilt>
                </header>
                <div className="bio">
                    <h>Javascript</h>
                    <p>/React</p>
                    <p>/Node.js</p>
                    <p>/Java</p>
                    <p>/Python</p>
                    <p>/MySQL</p>
                    <p>/NoSQL</p>
                    <p>/Android</p>
                    <p>/C(++)</p>
                    <p>/Firebase</p>
                    <p>/Excel</p>
                    <p>/Bash</p>
                </div>
                <div className="work">
                    <h1>PROFESSIONAL</h1>
                    <div className="experience">
                        <h2>Full Stack Web Developer</h2>
                        <p><a href="http://www.byui.edu/faculty-technology-center">BYU-I</a></p>
                        <p className="details">Currently employed at the Faculty Technology Center at BYU-I as a web developer. I work on a team with other students to complete project requests from a variety of sources. </p>
                    </div>
                    <div className="experience">
                        <h2>Intern</h2>
                        <p><a href="http://hobertlab.org/">Columbia University</a></p>
                        <p className="details">Worked independently to transfer Hobert Lab's database to a new platform, Google Sheets. Learned Javascript and jQuery independently to improve user experience of database.</p>
                    </div>
                    <div className="experience">
                        <h2>Varied Positions</h2>
                        <p><a href="https://catamaranresort.com/">Catamaran Resort</a></p>
                        <p className="details">Worked various positions in food and service department (beach attendant, restaurant bus person, bar bus person, event setup and service) as a season employee. All positions were centered on discerning guest needs and meeting service standards.</p>
                    </div>
                </div>
                <div className="personal">
                    <h1>PERSONAL</h1>
                    <div className="experience">
                        <h2>WMM</h2>
                        <p><a href="https://weakmindedmasses.com/">Weak Minded Masses</a></p>
                        <p className="details"></p>
                    </div>
                    <div className="experience">
                        <h2>Parker Schmidt</h2>
                        <p><a href="/">Portfolio</a></p>
                        <p className="details"></p>
                    </div>
                    <div className="experience">
                        <h2>Music</h2>
                        <p><a href="https://soundcloud.com/aldo-lamberti">Montecito</a></p>
                        <p className="details"></p>
                    </div>
                </div>
                <div className="contact">
                    <h1>CONTACT</h1>
                    <a href="mailto:jlamberti2015@gmail.com">EMAIL</a>
                    <a href="https://github.com/jlamberti">GITHUB</a>
                </div>
            </div>
        );
    }
}