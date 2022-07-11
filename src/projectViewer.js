import React from 'react';

export class ProjectViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectArray: [
                ['Digital Portfolio', 'July 2022', "A collection of information and links that help people interested in my work to get to know me better. It was built using react and javascript.", null, null],
                ['Giselle Generator', 'June 2022', "A convolutional generative adversarial network that generates 32X32 colour images of my girlfriends face. It was built using python and trained on a dataset of handpicked photos from my phone.", null, "https://github.com/knot427/Giselle-Generator"],
                ['Sample Title', 'sample date', "sample Desc", () => console.log("clicked"), null],
                ['Sample Title', 'sample date', "sample Desc", () => console.log("clicked"), null],
                ['Sample Title', 'sample date', "sample Desc", () => console.log("clicked"), "https://www.google.ca"],
                ['Sample Title', 'sample date', "sample Desc", null, "https://www.bing.ca"],
            ],
        }
    }

    render() {
        return(
            <div style={{
                width: '100%',
                height: '100%',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                display: "flex",
            }}>
                {this.state.projectArray.map(project => {
                    return(
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: '16px',
                            backgroundColor: '#799ce8',
                            border: '4px solid #2138ADFF',
                            borderRadius: '8px',
                            width: '100%',
                            maxWidth: '500px',
                            justifyContent: "space-between",
                        }}>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                width: '100%',
                                maxWidth: '500px'
                            }}>
                                <h2>
                                    {project[0]}
                                </h2>
                                <h3>
                                    {project[1]}
                                </h3>
                            </div>
                            <div style={{
                                width: '100%',
                                maxWidth: '500px',
                                whiteSpace: 'pre-wrap',
                            }}>
                                {project[2]}
                            </div>
                            {
                                project[3] === null? <div></div> : (
                                    <div onClick={project[3]} style={{
                                        margin: '16px',
                                        backgroundColor: '#ccffff',
                                        border: '2px solid #2138ADFF',
                                        borderRadius: '8px',
                                    }}>
                                        Check it out!
                                    </div>
                                )
                            }

                            {
                                project[4] === null? <div></div> : (
                                    <a href={project[4]} target={'_blank'} rel={"noreferrer noopener"}>GitHub</a>
                                )
                            }
                        </div>
                    );
                })}

            </div>
        );
    }
}