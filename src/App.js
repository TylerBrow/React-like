import React, { Component } from 'react';
import './styles.css';

class App extends Component {
  state = {
    countLikes : 0,
    str : 'Likes'
  }

  countLikes = () => {
    this.setState ({
    countLikes : this.state.countLikes + 1
  })
    if (this.state.countLikes === 0){
      this.setState ({
        str : 'Like'
      })
    } else {
      this.setState ({
        str: 'Likes'
      })
    }
}
  
  render() {
    return (
      <div>
        <button onClick = {this.countLikes}>{this.state.countLikes} {this.state.str}</button>
      </div>
    );
  }
}

export default App;
