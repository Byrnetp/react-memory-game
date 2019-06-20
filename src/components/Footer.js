import React from 'react';

export const Footer = () => {
  return (
    <div id='footer'>
        <ul>
          <li
            style={{position: 'absolute', left: '10px'}}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' alt='react logo' />
            Owl Memory Game
          </li>
          <li
            style={{position: 'absolute', right: '10px'}} >
            Created by Travis Byrne
          </li>
        </ul>
    </div>
  );
}