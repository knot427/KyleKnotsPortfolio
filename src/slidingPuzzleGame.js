import React from 'react';
import './slidingPuzzleGame.css';
const puzzleImage = require('./assets/Puzzle Photo.png')



export class ImagePuzzleBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: Array.from(Array(this.props.columns).keys()).map(i =>
                Array.from(Array(this.props.rows).keys()).map(j => (i * this.props.rows) + j)
            ),
            text: "Sliding Tile Puzzle",
        }
        let swapTime = 30;
        let shuffleSwaps = 320;
        setTimeout(() => {
            let newState = {
                data: this.state.data.slice(),
                text: this.state.text.slice(),
            };
            newState.text = "Shuffling";
            this.setState(newState);
            let id = setInterval( () => this.shuffle(1), swapTime);
            setTimeout(() => {
                clearInterval(id);
                let newState = {
                    data: this.state.data.slice(),
                    text: "Slide tiles into the space to reassemble the picture.",
                };
                this.setState(newState);
            }, shuffleSwaps * swapTime);
        }, 1500);
    }

    render() {
        return (
            <div style={{
                backgroundColor: '#323232FF',
                border: '2px solid #000000FF',
                borderRadius: 4,
                borderColor: '#000000FF',
                width: '100%',
                maxWidth: this.props.width
            }}>
                <div style={{
                    backgroundColor: '#323232FF',
                    border: '2px solid #000000FF',
                    borderColor: '#000000FF',
                }}>
                    {
                        this.state.data.map(row =>
                            <div key={"tileGameRow:" + row[0]} className="flexbox-container">
                                {
                                    row.map(i =>
                                        this.buildPuzzleTile(i)
                                    )
                                }
                            </div>
                        )
                    }
                </div>

                {this.state.text}
            </div>


        );

    }

    buildPuzzleTile(index) {
        if (index !== (this.props.rows * this.props.columns) - 1) {
            return (
                <div onClick={() => this.swapPieces(index)} onDragStart={() => false} draggable={false} key={"tileGamePieceDiv:" + index} style={{ width: (this.props.width / this.props.rows), height: (this.props.height / this.props.columns), overflow: 'hidden', position: 'relative' }}>
                    <img key={"tileGamePieceTileImage:" + index} onDragStart={() => false} draggable={false} src={String(puzzleImage)} alt='Puzzle Piece' style={{
                        position: "absolute",
                        width: this.props.width,
                        height: this.props.height,
                        left: -(index % this.props.rows) * (this.props.width / this.props.rows),
                        top: -Math.floor(index / this.props.columns) * (this.props.height / this.props.columns),

                    }} />
                </div>
            );
        } else {
            return (
                <div onClick={() => this.swapPieces(index)} onDragStart={() => false} draggable={false} style={{ width: (this.props.width / this.props.rows), height: (this.props.height / this.props.columns), overflow: 'hidden', position: 'relative' }}>
                    <img src={String(puzzleImage)} onDragStart={() => false} draggable={false} alt='Puzzle Piece' className='bw-img' style={{
                        position: "absolute",
                        width: this.props.width,
                        height: this.props.height,
                        left: -(index % this.props.rows) * (this.props.width / this.props.rows),
                        top: -Math.floor(index / this.props.columns) * (this.props.height / this.props.columns),

                    }} />
                </div>
            );
        }

    }

    swapPieces(i) {

        let blankx = -1;
        let blanky = -1;
        let piecex = -1;
        let piecey = -1;

        for (let x = 0; x < this.props.rows; x++) {
            for (let y = 0; y < this.props.columns; y++) {
                if (this.state.data[x][y] === (this.props.rows * this.props.columns) - 1) {
                    blankx = x;
                    blanky = y;
                }
                if (this.state.data[x][y] === i) {
                    piecex = x;
                    piecey = y;
                }
            }
        }

        if ((((blankx + 1 === piecex) || (blankx - 1 === piecex)) &&  blanky === piecey) || (((blanky + 1 === piecey) || (blanky - 1 === piecey)) &&  blankx === piecex)) {
            let newState = {
                data: this.state.data.slice(),
                text: this.state.text.slice(),
            }

            newState.data[piecex][piecey] = this.state.data[blankx][blanky];
            newState.data[blankx][blanky] = i;

            this.setState(newState);
        }
    }

    shuffle(n) {
        let blankx = -1;
        let blanky = -1;

        for (let x = 0; x < this.props.rows; x++) {
            for (let y = 0; y < this.props.columns; y++) {
                if (this.state.data[x][y] === (this.props.rows * this.props.columns) - 1) {
                    blankx = x;
                    blanky = y;
                }
            }
        }

        for (let i = 0; i < n; i++) {
            let dir = Math.floor(Math.random() * 2);
            dir = (dir - 0.5) / Math.abs(dir - 0.5);
            let select = Math.floor(Math.random() * 2);
            let newx = Math.max(Math.min(blankx - (dir * select), this.props.rows - 1), 0);
            let newy = Math.max(Math.min(blanky + (dir * (1 - select)), this.props.columns - 1), 0);

            if (newx === blankx && newy === blanky) {
                newx = Math.max(Math.min(blankx - (dir * select), this.props.rows - 2), 1);
                newy = Math.max(Math.min(blanky + (dir * (1 - select)), this.props.columns - 2), 1);
            }

            blankx = newx;
            blanky = newy;

            this.swapPieces(this.state.data[blankx][blanky]);

        }

    }
}