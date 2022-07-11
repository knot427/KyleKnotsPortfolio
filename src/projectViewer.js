import React from 'react';

export class ProjectViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectArray: [
                ['Digital Portfolio', 'July 2022', "A collection of information and links that help people interested in my work to get to know me better. It was built using react and javascript.", null, null],
                ['Giselle Generator', 'June 2022', "A convolutional generative adversarial network that generates 32X32 colour images of my girlfriends face. It was built using python and trained on a dataset of handpicked photos from my phone.", null, "https://github.com/knot427/Giselle-Generator"],
                ['Course Querier', 'April 2022', "A fullstack application that involved a front end written in pure HTML allowing a user to communicate with a server using a REST API to perform complex data querying on various datasets. The backend server was written using typescript and was able to handle large amounts of data, complex multi-stage queries, and backing up to disc. Unfortunately due to it being a school project I do not have the right to share a link to the code for the project.", null, null],
                ['RANSAC Object Recognition System', 'March 2022', "A python script that could recognise objects in an image from a database using the RANSAC technique. Unfortunately due to it being a school project I do not have the right to share a link to the code for the project.", null, null],
                ['Proxy Server Attack', 'Oct 2021', "A python program that would allow a user to connect to a website and through it and log the http packets. Unfortunately due to it being a school project I do not have the right to share a link to the code for the project.", null, null],
                ['Waterway Management System', 'Nov 2020', "A fullstack application that allowed a user to add, remove, and query data through a UI regarding ecosystem health. The front end was developed using react, the server was written in java, and there was a database portion that built using mySQL. The database was kept in BCNF to reduce unnecessary data redundancy and for efficient querying. Unfortunately due to it being a school project I do not have the right to share a link to the code for the project.", null, null],
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