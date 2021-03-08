import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import * as math from 'mathjs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: '0'};
    this.addToInput = this.addToInput.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }
  addToInput(val) {
    if(this.state.input == '0') {
      this.setState({input: val});
    } else {
      this.setState({input: this.state.input + val});
    }
  }
  handleClear() {
    this.setState({input: '0'});
  }
  handleEqual() {
    this.setState({input: math.evaluate(this.state.input)})
  }

  render() {
    return (
      <div className='app'>
        <div className='calc-wrapper'>
          <Input input={this.state.input}></Input>
          <div className='row'>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>X</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className='row'>
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className='row'>
            <ClearButton handleClear={this.handleClear}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
