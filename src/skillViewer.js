import React from 'react';
import starImage from "./assets/star.png";
import tsLogo from "./assets/typescriptLogo.png";
import jsLogo from "./assets/JavaScriptlogo.png";
import threejsLogo from "./assets/threejslogo.png";
import nodejsLogo from "./assets/nodejslogo.png";
import javaLogo from "./assets/javalogoTransparent.png";
import sqlLogo from "./assets/sqllogotransparent.png";
import pythonLogo from "./assets/pythonlogotransparent.png";
import numpyLogo from "./assets/numpylogo.png";
import pilLogo from "./assets/pillowlogo.png";
import tensorflowLogo from "./assets/tensorflowlogotransparent.png";
import matplotlibLogo from "./assets/matplotliblogo.png";
import pandasLogo from "./assets/pandasLogo.png";
import reactLogo from "./assets/reactLogotransparent.png";
import openglLogo from "./assets/openglLogo.png";
import gitLogo from "./assets/gitLogo.png";
import './skillViewer.css';


export class SkillViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectArray: [
                ['TypeScript', 'I have used TypeScript for the creation of servers and implementing the server side of REST APIs', tsLogo, null, 5],
                ['JavaScript', 'I have used javascript for the creation of webpages as well as graphical applications using Three.js.', jsLogo, "https://github.com/knot427/KyleKnotsPortfolio", 4],
                ['Three.js', 'Using Three.js I have created 3D and sprite animations. I have used it for rigging, running my own custom shaders, and creating custom procedural scenes.', threejsLogo, null, 4],
                ['Node.js', 'I have used Node.js to create several servers including websites, and API services.', nodejsLogo, null, 4],
                ['Java', 'Java was the first language I understood thoroughly. I have created a number of applications, including graphical, an API service, and networking related applications.', javaLogo, null, 5],
                ['SQL', 'I have used SQL queries as in database management contexts as well as part of an API service.', sqlLogo, null, 5],
                ['Python', 'Python has been my language of choice for accomplishing simple tasks, machine learning, data manipulation, networking related scripts, image processing, and solving difficult math problems. I am also familiar with object oriented python as well as working with it collaboratively in a notebook setting.', pythonLogo, null, 5],
                ['NumPy', 'I have used NumPy for data processing, mathematical problem solving, computer vision, and machine learning.', numpyLogo, null, 5],
                ['PIL', 'I have used Pillow for image manipulation, computer vision, and preparing machine learning datasets.', pilLogo, null, 4],
                ['TensorFlow', 'Using TensorFlow I have created, trained, and used neural networks, convolutional neural networks, and image recognition systems. I have used it both locally and in remote settings.', tensorflowLogo, null, 4],
                ['MatPlotLib', 'I have used MatPlotLib to visualize various types of data, presentation of data, and for human in the loop data analysis.', matplotlibLogo, null, 4],
                ['Pandas', 'I have used Pandas to lead data and files in machine learning, data science, and computer vision applications.', pandasLogo, null, 4],
                ['React', 'I have made a couple UIs using react including this digital portfolio.', reactLogo, null, 4],
                ['Machine Learning', 'I have used various machine learning techniques for classification, clustering, regression, and generation. Including but not limited to outlier detection, object recognition, prediction tasks, and image generation.', null, null, 4],
                ['OpenGL', 'I have used OpenGL in C++ for 2D and 3D tasks. I have written my own vertex and fragment shaders, and have created interactive applications using it.', openglLogo, null, 4],
                ['REST APIs', 'I have created and implemented Rest APIs both on the client side and the server sides.', null, null, 5],
                ['Git', 'Almost every project I have worked on above a certain size has used git. I have practice managing multiple branches, working collaboratively, and fixing issues when necessary.', gitLogo, null, 5],
            ],
            rightDisplay: (<></>),
        }
    }

    render() {
        return(
            <div style={{
                display: "flex",
                height: "100%",
            }}>
                <div style={{
                    display: "flex",
                    height: "100%",
                    width: "50%",
                    marginLeft: "4px",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                }}>
                    {this.state.projectArray.map((array) => (<div className={"link"} style={{cursor: "default",}} onMouseOver={() => this.setRightDisplay(array)}>{array[0]}</div>))}
                </div>
                {this.state.rightDisplay}
            </div>
        );
    }

    setRightDisplay(array) {
        let newState = {
            projectArray: this.state.projectArray.slice(),
            rightDisplay: (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    width: '50%'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '95%',
                        height: "100%",
                        backgroundColor: 'darkgoldenrod',
                        borderRadius: '4px',
                        border: '4px solid gold',
                        justifyContent: 'space-evenly'
                    }}>
                        {array[2] === null? <div></div> : <div className={'center'}> <img src={array[2]} alt={"Logo"} style={{
                            height: '64px',
                            width: '64px',
                        }} /> </div>}
                        <div className={'center'}>
                            {array[0]}
                        </div>
                        <div className={'center'}>
                            {array[1]}
                        </div>
                        {array[3] === null? <div></div> : <a className={'center'} href={array[3]} target={'_blank'} rel={'noreferrer noopener'}>GitHub</a>}
                        {this.renderStars(array[4])}
                    </div>
                </div>

            )
        }
        this.setState(newState);
    }

    renderStars(n) {
        return(
            <div className={'center'} >
                {
                    Array(n).fill(1).map(() => (
                        <img src={String(starImage)} alt='star' style={{
                            width: '30px',
                            height: '30px',
                        }} />
                    ))
                }

            </div>
        );

    }
}