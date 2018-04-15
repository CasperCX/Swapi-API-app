import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getData();
  };

  render() {
    console.log("data:", this.props.data);
    return (
      <div>Home;</div>
      )
  }
};

const mapStateToProps = state => {
  return {
    data: state.data
  }
};

export default connect(mapStateToProps, { getData })(App);
