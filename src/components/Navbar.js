import React from 'react';
import PropTypes from 'prop-types';

export const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <li style={{position: 'absolute', left: '10px'}}>Owl Memory Game</li>
                <li style={{position: 'absolute', left: '40%'}}>{props.message}</li>
                <li style={{position: 'absolute', right: '10px'}}>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    message: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    topScore: PropTypes.number.isRequired
};