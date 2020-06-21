import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answer: null
    }
  }

  getAnswer = () => {
    let potentialAnswers = ["Yes!", "Maybe...", "Not in your life!", "Can't answer that!", "Absolutely!", "Are you sure about that?"];
    return potentialAnswers[Math.floor(Math.random() * potentialAnswers.length)];
  }

  handleSubmit = () =>{
    const answer = this.getAnswer()
    this.setState({answer: answer})
  }

  render(){
    return (
      <div id="container">
        <h1>Magic 8 Ball</h1>
        <input class="textbox" type='text' placeholder="Ask Me a Question!"
        />
        <br />
        <button class="button"
          onClick={this.handleSubmit}>
          Ask the Magic 8 Ball
        </button>

        {this.state.answer &&
        <div id="whenClicked">
          <h2 class="response"> The Magic 8 Ball says:</h2> <h3>{this.state.answer} </h3>
        </div>
        }
      </div>

    )
  }
}

export default App;
