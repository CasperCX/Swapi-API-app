import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions';

class App extends Component {
  constructor() {
    super();
    this.state = { items: [] }
  };

  componentDidMount() {
    this.props.getData();
  //   fetch('https://swapi.co/api/people/?format=json')
  //   .then(res => res.json())
  //   .then( ({ results: items }) => this.setState({ items }))
  // };
  }
  render() {
    //console.log(this.state.items);
    console.log(this.props.data);
    return (
      <div>
        {this.props.data.map(item => 
          <h4 key={item.name}>{item.name}</h4>)}
      </div>
      )
  }
};

const mapStateToProps = state => {
  return {
    data: state.data
  }
};

export default connect(mapStateToProps, { getData })(App);
