import React from 'react';
import PropTypes from 'prop-types';

export const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <li id="nav-message">{props.message}</li>
                <li id="nav-score">Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    message: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    topScore: PropTypes.number.isRequired
};