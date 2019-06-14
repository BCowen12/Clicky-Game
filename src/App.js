import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Data from "./Data";
import Directions from "./components/Directions";

const box = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  paddingTop: '50px',
  paddingBottom: '50px',
  width: '90%',
  margin: '0 auto'
}

const top = {
  background: '#5133a4',
  minHeight: '70px',
  position: 'fixed',
  fontSize: '30px',
  width: '100%',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

class App extends React.Component {
  state = {
    Data,
    score: 0,
    topScore: 0,
    maxScore: 12,
    messageBoard: "",
    storage: []
  };


  processClick = id => {
    const { score, storage } = this.state;
    const currentScore = score + 1;
    if (storage.length >= this.state.maxScore - 1) {
      this.setState({ messageBoard: "You Won! Click to play again." });
      this.reset();
    }
   else if (storage.includes(id)) {
      this.setTop();
      this.setState({ messageBoard: "Incorrect! Try Again." });
      this.reset();
    }
    else {
      storage.push(id);
      this.setState({
        storage,
        score: currentScore,
        messageBoard: "Correct!"
      });
      this.shuffle();
    }
  };

  shuffle = () => {
    const masters = this.state.Data;
    for (let i = masters.length - 1; i > 0; i--) {
      let x = Math.floor(Math.random() * (i + 1));
      [masters[i], masters[x]] = [masters[x], masters[i]];
    }
    this.setState({ characters: masters });
  };

  reset = () => {
    this.shuffle();
    this.setState({
      storage: [],
      score: 0
    });
  };

  setTop = () => {
    const { score, topScore } = this.state;
    if (topScore < score) {
      this.setState({ topScore: score });
    }
  };

  render() {
    return (
      <div>
        <div style={top}>
          <Header
            topScore={this.state.topScore}
            score={this.state.score}
            message={this.state.messageBoard}
          />
          </div>
          <Directions />
          <div style={box}>
            {this.state.Data.map(item => (
              <Cards
                id={item.id}
                key={item.id}
                img={item.img}
                clicky={this.processClick}
              />
            ))}
            </div>
      </div>
    );
  }
}

export default App;
