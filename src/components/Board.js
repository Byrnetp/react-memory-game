import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from './Tile';

export class Board extends React.Component {
    renderTile(i) {
        return (
            <Tile
            src={this.props.images[i].src}
            alt={this.props.images[i].alt}
            update={this.props.update} />
        );
    }

    render() {
        return (
            <div className='board'>
                <div className='board-row'>
                    {this.renderTile(0)}
                    {this.renderTile(1)}
                    {this.renderTile(2)}
                    {this.renderTile(3)}
                </div>
                <div className='board-row'>
                    {this.renderTile(4)}
                    {this.renderTile(5)}
                    {this.renderTile(6)}
                    {this.renderTile(7)}
                </div>
                <div className='board-row'>
                    {this.renderTile(8)}
                    {this.renderTile(9)}
                    {this.renderTile(10)}
                    {this.renderTile(11)}
                </div>
            </div>
        );
    }
}

Board.propTypes = {
    images: PropTypes.array.isRequired
};