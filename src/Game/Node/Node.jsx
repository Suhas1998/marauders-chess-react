import React, {Component} from 'react';
import './Node.css';

export default class Node extends Component {

    // imgUrl for different players' pieces
    img_dict = { 1: {"king": "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg",
                    "bishop": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg",
                    "knight": "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg",
                    "rook": "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"
                    },
                2: {"king": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg",
                    "bishop": "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg",
                    "knight": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg",
                    "rook": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"
                    },
                0: {"":""}
                };

    render() {
        const {
            row,
            col,
            isLeft,
            isRight,
            isBottom,
            isTop,
            // onMouseDown,
            // onMouseEnter,
            // onMouseUp,
            player,
            piece,
            imgUrl,
        } = this.props;
        const extraClassName = isLeft
         ? 'node-left'
         : isRight? 'node-right'
         : isBottom ? 'node-bottom'
         : isTop ? 'node-top'
         : '';

        return (
            <div
                id = {`node-${row}-${col}`}
                className = {`node ${extraClassName}`}
                // onMouseDown = {() => onMouseDown(row, col)}
                // onMouseEnter = {() => onMouseEnter(row, col)}
                // onMouseUp = {() => onMouseUp()}
                style = {{"backgroundImage": "url('"+this.img_dict[player][piece]+"')",
                            "backgroundPosition": "center",
                            "backgroundRepeat": "no-repeat",
                        "backgroundColor": getBgColor(row, col)}}
            ></div>
        );
    }
}

const getBgColor = (row, col) => {
    // for Boards A, C, E
    if((row < 5 && (Math.floor(col/5))%2 === 0) || (row >= 5 && (Math.floor(col/5))%2 === 1)){
        return ((row+col)%2==0)? 'rgb(25, 121, 169)':'white';
    }
    // for boards B, D, F
    else {
        return ((row+col)%2==0)? 'rgb(144, 184, 214)':'white';
    }
};