import React, { Component } from "react";

const Store = React.createContext();

class MyStore extends Component {
  state = {
    list: [],
    base: "USD",
    amount: "",
    date: ""
  };

  componentDidMount() {
    this.getCurrency();
  }
  async getCurrency() {
    let list = [];
    const response = await fetch(
      `https://api.exchangeratesapi.io/latest?base=${this.state.base}`
    );
    const data = await response.json();
    for (let key in data.rates) {
      let each = {};
      each["currency"] = key;
      each["rate"] = data.rates[key];
      list.push(each);
    }
    this.setState({
      list,
      date: data.date
    });
  }

  render() {
    return (
      <Store.Provider
        value={{
          state: this.state,
          changeBase: base => {
            this.setState({ base });
            this.getCurrency();
          }
        }}
      >
        {this.props.children}
      </Store.Provider>
    );
  }
}
export default MyStore;
export { Store };
