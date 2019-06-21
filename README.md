# React Memory Game

A simple single-page memory game made using React

https://byrnetp.github.io/react-memory-game/

## Purpose

This single page web application was made to practice and develop my React skills. It features a game where the purpose is to click on as many owl images as possible without clicking on any owl more than once. The main react component uses its state to keep track of the game's score, top score, a message to display to the user, and a history of owl images that have been clicked thus far. When a click event occurs, the application's state is updated to reflect the proper values for state variables. If the user clicks on an owl they have already clicked on, the history of clicked images is reset so that the user can try again. In this case, the score will reset but the top score will remain. 