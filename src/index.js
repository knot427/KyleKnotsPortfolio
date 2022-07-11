import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ImagePuzzleBoard} from "./slidingPuzzleGame";
import{TabFolderViewer} from "./TabFolderViewer";
const resumePDF = require('./assets/Resume Kyle Knot.pdf');
const pdfSVG = require('./assets/pdf-icon.png');
const backgroundPNG = require('./assets/MaybeBackground.png');

class HomePage extends React.Component {
    render() {
        return(
            <div className={'parallax'} style={{
                backgroundImage: `url(${backgroundPNG})`,
                backgroundSize: "cover",
                minHeight: '100vh',
                boxSizing: 'border-box'}}>
                <div>
                    <div className={'box-row'}>
                        <div className={'box-column'}>
                            <div className={'name-title'}>
                                <div>Kyle</div>
                                <div>Knot</div>
                            </div>
                            <div className={"text-box"}>
                                <div className={'box-row'}>
                                    <div className={'box-column'}>
                                        <h2>Contact</h2>

                                        <a href={'https://www.linkedin.com/in/kyle-knot/'} target={'_blank'} rel={'noreferrer noopener'}>LinkedIn</a>
                                        <a href={'https://github.com/knot427'} target={'_blank'} rel={'noreferrer noopener'}>GitHub</a>
                                        <a href={'mailto:kyleknot@outlook.com'} target={'_blank'} rel={'noreferrer noopener'}>kyleknot@outlook.com</a>
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
                                            <a href={resumePDF} target={'_blank'} rel={'noreferrer noopener'} style={{
                                                top: '50%'
                                            }}>Open resume in new tab</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'box-column'}>
                                <TabFolderViewer key={'folderViewer'} borderColour={'#c7f5f5'} inactiveColour={'#2138ad'} />
                        </div>
                            <div className={'box-column'}>
                                <ImagePuzzleBoard rows={4} columns={4} width={300} height={300} />
                            </div>
                    </div>
                </div>
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
