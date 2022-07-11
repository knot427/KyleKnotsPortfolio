import React from 'react';
import {ProjectViewer} from "./projectViewer";

const identityTile = require('./assets/backgroundTiles.png');



export class TabFolderViewer extends React.Component {
    constructor(props) {
        super(props);
        console.log(identityTile)
        this.state = {
            tabs: [
                ['About Me', true, (
                    <div style={{
                        position: 'relative',
                    }}>
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            backgroundImage: `url(${identityTile})`,
                            backgroundRepeat: 'repeat',
                            height: '9000px',
                            width: '100%',
                            opacity: 0.1,
                        }}>
                        </div>
                        <div className={'aboutMe'} style={{
                            overflowY: 'auto',
                            position:"absolute",
                            left: 0,
                            top: 0,

                        }}>
                            <p  style={{
                                opacity:2,
                                margin: '8px',
                                color: '#000000FF'
                            }}>
                                I am originally from Saskatchewan but moved to BC to peruse a Bachelor of Science majoring in Computer Science. While there I studied a wide range of topics including software engineering, artificial intelligence, machine learning, algorithms, computer vision, and computer graphics. I personally supplemented these topics by studying in my personal time alternative programming philosophies, uses of machine learning, various programming languages, and software development processes. I have also completed several smaller projects to get hands on experience with these topics.
                            </p>
                            <p  style={{
                                opacity:2,
                                margin: '8px',
                                color: '#000000FF'
                            }}>
                                Currently I am interested in learning Rust and all the pros and cons of its use compared to C++. I am working on a small cellular automata program to explore these features. I am also actively learning about various convolutional neural network topics inspired by the impressive work done by Open Ai’s DALL-E 2 and Google’s Imagen.
                            </p>
                        </div>
                    </div>
                )],
                ['Skills', false, (
                    <div >
                        sample 2
                    </div>
                )],
                ['Projects', false, (
                    <ProjectViewer />
                )]]
        }
    }

    render() {
        return(
            <div style={{
            }}>
                <div className={'box-row'} style={{
                    display: 'flex',
                    justifyContent: 'left',
                    marginLeft: '10px',
                }}>
                    {this.state.tabs.map((tab) => this.drawTab(tab[0], tab[1]))}
                </div>
                <div style={{
                    height: '66vh',
                    width: '100%',
                    maxWidth: '435px',
                    backgroundColor: '#c7f5f5',
                    borderRadius: '10px',
                    border: '4px solid ' + this.props.borderColour,
                    overflow: 'hidden',
                }}>
                    {this.state.tabs.map((tab) => tab[1]? tab[2] : (<></>))}
                </div>
            </div>
        )
    }

    drawTab(text, active) {
        let style;
        if (active) {
            style = {
                borderBottom: '20px solid ' + this.props.borderColour,
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                height: 0,
                width: '100px',
                justifyContent: 'center',

                fontFamily: 'sans-serif',
            }
        } else {
            style = {
                borderBottom: '20px solid ' + this.props.inactiveColour,
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                height: 0,
                width: '100px',
                justifyContent: 'center',

                fontFamily: 'sans-serif',
            }
        }

        return(
            <div onClick={() => this.setActive(text)} key={text} style={style}>
                {text}
            </div>
        )
    }

    setActive(text) {
        let newState = this.state.tabs.slice().map((tab) => [tab[0], tab[0] === text, tab[2]]);
        this.setState({tabs: newState} );
    }

}