import React from 'react';
import Component1 from './component1.js';
import Component2 from './component2.js';

class App extends React.Component {
  render(){
  return (
    <div className="App">
        <Component1 store = {this.props.store}/>
        <Component2 />
    </div>
  );}
}

export default App;
