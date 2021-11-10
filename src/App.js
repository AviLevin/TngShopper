import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: 1,
      json: "",
      result: [],
    };
  }

  handleIncrement = () => {
    this.setState({ counters: this.state.counters + 1 });
  };

  // https://randomuser.me/api?seed=Shopper

  componentDidMount() {
    fetch("https://randomuser.me/api?seed=Shopper")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          console.log(JSON.stringify(result));
          this.setState({
            isLoaded: true,
            json: JSON.stringify(result, null, 2),
            result: result.results,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    // console.log(this.state.items);
    return (
      <div>
        <button onClick={this.handleIncrement} type="button">
          +
        </button>
        <div>{this.state.counters}</div>
        dddd
        <ul>
          {this.state.result.map((item) => (
            <div>
              <li key={item.id}>{item.name.first}</li>
              <li key={item.id}>{item.name.last}</li>

              <img src={item.picture.medium} />
            </div>
          ))}
        </ul>
        <pre> {this.state.json}</pre>
      </div>
    );
  }
}

export default Counter;
