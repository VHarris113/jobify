import React, { Component } from 'react'
import Cron from 'react-cron-generator'
import 'react-cron-generator/dist/cron-builder.css'


class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
       
      };
  }

  render() {
    return (<div>
      <Cron
        onChange={(e)=> {this.setState({value:e});}}
        value={this.state.value}
        showResultText={true}
        showResultCron={true}
        />
                            
    </div>)
  }
}

export default App;