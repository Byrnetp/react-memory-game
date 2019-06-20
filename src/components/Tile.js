import React from 'react';
import PropTypes from 'prop-types';

export const Tile = (props) => {
    return (
        <img
            className='tile' 
            src={props.src}
            alt={props.alt} 
            onClick={props.update} />
    );
}

Tile.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired
};