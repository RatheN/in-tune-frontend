import React from 'react';
import {connect} from 'react-redux'
import ArtistsContainer from './containers/ArtistsContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App" style={{paddingLeft: '20px'}}>
        <ArtistsContainer/>
      </div>
    );
  }

}


export default App;
