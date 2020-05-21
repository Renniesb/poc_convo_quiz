import React from 'react';
import ResponseText from './ResponseText';
import { Route } from 'react-router-dom';


class App extends React.Component {
  state = {inputs:[] }
  handleOnChange = e => {
     this.setState({[e.target.name]:e.target.value})
  }
  render() { 
    return ( 
    <div className="App">
      <Route
            path='/question/:questionId'
            render={({ 
              match 
          }) => (
              <ResponseText track={this.trackInputs} change={this.handleOnChange} match={match} />
          )} 
          />
    </div>
   );
  }
}
 
export default App;
