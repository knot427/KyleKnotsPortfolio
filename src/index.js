import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ImagePuzzleBoard} from "./slidingPuzzleGame";
import{TabFolderViewer} from "./TabFolderViewer";
const resumePDF = require('./assets/Resume Kyle Knot.pdf');
const pdfSVG = require('./assets/pdf-icon.png');
const transparentLogoPNG = require('./assets/croppedTransparentLogo.png');
const logo2Transparent = require('./assets/logo2transparent.png');

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 50,
        };
        let interval = setInterval(() => {
            console.log("running 1");
            this.setState({size: this.state.size + 0.5});
        }, 20);
        setTimeout(() => {
            clearInterval(interval);
            this.setState({size: 100});
            interval = setInterval(() => {
                console.log("running 2");
                this.setState({size: this.state.size - 0.5});
            },10);
        }, 2000);
        setTimeout(() => {
            clearInterval(interval);
            this.setState({size: 0});
        }, 6000);
    }


    render() {
        return(
                <div className={"box-column"} style={{
                    height: '100vh',
                }}>
                    <div className={"mainPage"} style={{
                        position: 'absolute',
                        width: '100%',
                        top: 0,
                        left: 0,
                    }}>
                        <div className={'mainCenter'}>
                            <div className={"box-column"}>
                                <div className={'name-title'}>
                                    <img src={transparentLogoPNG} alt={'Kyle Knot'} style={{
                                        width: '100%',
                                        height: '100%',
                                    }} />
                                </div>
                                <div className={'mainCenter'}>
                                </div>
                                <div className={"text-box"}>
                                    <div className={'box-row'}>
                                        <div className={'box-column'}>
                                            <h2>Contact</h2>
                                            <a className={"link"} href={'https://www.linkedin.com/in/kyle-knot/'} target={'_blank'} rel={'noreferrer noopener'}>LinkedIn</a>
                                            <a className={"link"} href={'https://github.com/knot427'} target={'_blank'} rel={'noreferrer noopener'}>GitHub</a>
                                            <a className={"link"} href={'mailto:kyleknot@outlook.com'} target={'_blank'} rel={'noreferrer noopener'}>kyleknot@outlook.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={"text-box"}>
                                    <div className={'box-row'}>
                                        <div className={'box-column'}>
                                            <h2>Resume</h2>
                                            <div className={'box-row'}>
                                                <img src={pdfSVG} alt={'PDF Logo'} style={{
                                                    width: '32px',
                                                    height: '32px',
                                                    top: '50%'
                                                }} />
                                                <div className={"box-column"}>
                                                    <a className={"link"} href={resumePDF} target={'_blank'} rel={'noreferrer noopener'} style={{
                                                        top: '50%'
                                                    }}>Open resume in new tab</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'mainCenter'}>
                            <TabFolderViewer key={'folderViewer'} borderColour={'#af8f00'} inactiveColour={'#ffdfa3'} />
                        </div>
                        <div className={'mainCenter'}>
                            <ImagePuzzleBoard rows={4} columns={4} width={300} height={300} />
                        </div>
                        </div>
                    {this.state.size <= 0? <></> :
                        <div style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}>
                                <img src={logo2Transparent} alt={'Kyle Knot'} style={{
                                    width: this.state.size + "%",
                                    height: this.state.size + "%",
                                    position: 'relative',
                                    top: (50 - (this.state.size / 2)) + '%',
                                    left: (50 - (this.state.size / 2)) + '%',
                                    opacity: this.state.size / 100,
                                }} />
                        </div>
                    }
                </div>
        );
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>
);
