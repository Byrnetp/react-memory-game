import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Board } from './components/Board';
import { Footer } from './components/Footer';

let images = [
  {src: 'http://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_barnaby.png', alt: 'barnaby'},
  {src: 'http://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_bogart.png', alt: 'bogart'},
  {src: 'http://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_buzz.png', alt: 'buzz'},
  {src: 'http://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_crystal.png', alt: 'crystal'},
  {src: 'http://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_data.png', alt: 'data'},
  {src: 'https://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_goblin.png', alt: 'goblin'},
  {src: 'http://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_farnsworth.png', alt: 'farnsworth'},
  {src: 'http://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_jasper.png', alt: 'jasper'},
  {src: 'http://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_jersey.png', alt: 'jersey'},
  {src: 'http://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_junior.png', alt: 'junior'},
  {src: 'https://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_peabody.png', alt: 'peabody'},
  {src: 'https://www.worldbirdsanctuary.org/wp-content/uploads/resident_owls_minerva.png', alt: 'minerva'}
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