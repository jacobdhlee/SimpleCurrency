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
  getCurrency() {
    fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
      .then(data => data.json())
      .then(data => {
        let list = [];
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
      })
      .catch(err => console.log(`error from getting data Error is ${err}`));
  }

  render() {
    return (
      <Store.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </Store.Provider>
    );
  }
}
export default MyStore;
export { Store };
