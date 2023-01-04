import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Board } from './components/Board';
import { Footer } from './components/Footer';

let images = [
  {src: 'https://i.imgur.com/YbgWJS2.jpg', alt: 'barnaby'},
  {src: 'https://i.imgur.com/scLso7U.jpg', alt: 'bogart'},
  {src: 'https://i.imgur.com/VSLepIN.jpg', alt: 'buzz'},
  {src: 'https://i.imgur.com/OJls2qJ.jpg', alt: 'crystal'},
  {src: 'https://i.imgur.com/dSJoMXz.jpg', alt: 'data'},
  {src: 'https://i.imgur.com/9pkBJzv.jpg', alt: 'goblin'},
  {src: 'https://i.imgur.com/HveyRIs.jpg', alt: 'farnsworth'},
  {src: 'https://i.imgur.com/jzdUSr5.jpg', alt: 'jasper'},
  {src: 'https://i.imgur.com/aj53FBg.jpg', alt: 'jersey'},
  {src: 'https://i.imgur.com/GvraQhk.jpg', alt: 'junior'},
  {src: 'https://i.imgur.com/8dfn1Vq.jpg', alt: 'peabody'},
  {src: 'https://i.imgur.com/UgydPy5.jpg', alt: 'minerva'}
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