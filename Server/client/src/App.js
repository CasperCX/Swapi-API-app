import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, sortData } from './actions';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedTerm: "people",
      selectedSort: "height"
    };
  }

  componentWillMount() {
    this.props.getData("people");
  }

  handleOptionChange(event) {
    this.setState({
      selectedTerm: event.target.value
    });

    this.props.getData(event.target.value);
  };

  handleSortChange(event) {
    this.setState({
      selectedSort: event.target.value
    });
    
    const sorted_arr = this.sortByKey(event.target.value).reverse();
    this.props.sortData(sorted_arr);
  };

  sortByKey(key) {
    return this.props.data.sort(function(a, b) {
      var x = parseInt(a[key]); 
      var y = parseInt(b[key]);
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
};

  setUnit(item) {
  return this.state.selectedSort == "height" ? "CM" : "KG";
  };

  setMeasure(item) {
    return this.state.selectedSort == "height" ? item.height : item.mass;
  };

  render() {
    let count = 0;
    console.log(this.props.data);
    return (
     <div className="container">
          <form>
        <div className="radio">
          <label>
            <input type="radio" value="people" name="option" onChange={this.handleOptionChange.bind(this)} />
            People
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="planets" name="option" onChange={this.handleOptionChange.bind(this)} />
            Planets
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="starships" name="option" onChange={this.handleOptionChange.bind(this)} />
            Starships
          </label>
        </div>
      </form>
       <button value="height" onClick={this.handleSortChange.bind(this)}>Sort by Height</button>
       <button value="mass" onClick={this.handleSortChange.bind(this)}>Sort by Mass</button>
       <span class="right-align"><h1>Viewing: {this.state.selectedTerm.toUpperCase()}</h1></span>
       <h2>Sorted by: {this.state.selectedSort.toUpperCase()}</h2>
        <div>
        </div>
        <div>
          {this.props.data.map((item, i) => 
            <h4 key={item.name}>{i+1}. {item.name} - {this.setMeasure(item)} {this.setUnit(item)}</h4> )}
        </div>
      </div>
      )
  }
};

const mapStateToProps = state => {
  return {
    data: state.data
  }
};

export default connect(mapStateToProps, { getData, sortData })(App);
