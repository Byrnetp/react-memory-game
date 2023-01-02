import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Board } from './components/Board';
import { Footer } from './components/Footer';

let images = [
  {src: 'https://imgur.com/YbgWJS2', alt: 'barnaby'},
  {src: 'https://imgur.com/scLso7U', alt: 'bogart'},
  {src: 'https://imgur.com/VSLepIN', alt: 'buzz'},
  {src: 'https://imgur.com/OJls2qJ', alt: 'crystal'},
  {src: 'https://imgur.com/dSJoMXz', alt: 'data'},
  {src: 'https://imgur.com/9pkBJzv', alt: 'goblin'},
  {src: 'https://imgur.com/HveyRIs', alt: 'farnsworth'},
  {src: 'https://imgur.com/jzdUSr5', alt: 'jasper'},
  {src: 'https://imgur.com/aj53FBg', alt: 'jersey'},
  {src: 'https://imgur.com/GvraQhk', alt: 'junior'},
  {src: 'https://imgur.com/8dfn1Vq', alt: 'peabody'},
  {src: 'https://imgur.com/UgydPy5', alt: 'minerva'}
];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      message: 'Click on any image to start!',
      clicked: []
    }
    this.update = this.update.bind(this);
  }

  update(e) {
    const clickTarget = e.target.alt;
    if (this.state.clicked.indexOf(clickTarget) !== -1) {
      this.setState({
        score: 0,
        message: 'Sorry, you chose incorrectly. try again!',
        clicked: []
      });
    } else if (this.state.score === images.length - 1) {
      this.setState({
        score: 0,
        topScore: this.state.topScore+1, 
        message: 'You Win! Click another owl to play again.',
        clicked: []
      });
    } else if (this.state.score+1 > this.state.topScore) {
      this.setState({
        score: this.state.score+1,
        topScore: this.state.topScore+1,
        message: 'Nice job! You got a new high score!',
        clicked: this.state.clicked.concat(clickTarget)
      });
    } else {
      this.setState({
        score: this.state.score+1,
        message: 'Nice job!',
        clicked: this.state.clicked.concat(clickTarget)
      });
    }
  }

  render() {
    images = images.sort((a, b) => 0.5 - Math.random());
    return (
      <div className="App">
        <Navbar 
          score={this.state.score} 
          topScore={this.state.topScore} 
          message={this.state.message} />
        <Header />
        <Board 
          images={images}
          update={this.update} />
        <Footer />
      </div>
    );
  }
}