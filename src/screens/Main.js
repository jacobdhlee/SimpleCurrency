import React, { Component } from "react";
import { View, Text, FlatList, Animated } from "react-native";
import moment from "moment";
import styled from "styled-components/native";
import { Store } from "../context";
import Input from "../components/Input";
import MyButton from "../components/Button";
import List from "../components/List";
import Pickers from "../components/Picker";

const LoadingView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
`;
const Container = styled.View`
  flex: 5;
  background-color: papayawhip;
  align-items: center;
  justify-content: center;
`;

const ListContainer = styled.View`
  flex: 5;
`;
const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px; 
`;
const MainText = styled.Text`
  font-size: 18px;
`;

class Main extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    amount: 500,
    error: "",
    show: false,
    base: "USD"
  };

  update = show => {
    this.setState({ show });
  };

  changeAmount = amount => {
    this.setState({ amount });
  };

  navigates = async item => {
    try {
      const { navigate } = this.props.navigation;
      let historyData = [];
      let dates = [];
      const todayDate = moment().format("YYYY-MM-DD");
      const yearBefore = moment().subtract(1, "month").format("YYYY-MM-DD");
      const url = `https://api.exchangeratesapi.io/history?start_at=${yearBefore}&end_at=${todayDate}&symbols=${item.currency}&base=${item.base}`;
      const response = await fetch(url);
      const data = await response.json();
      Object.keys(data.rates).forEach(key => {
        dates.push(key);
        historyData.push(data.rates[key][item.currency]);
      });
      const allData = {
        dates,
        historyData,
        base: item.base,
        currency: item.currency
      };
      navigate("Detail", { allData });
    } catch (e) {
      console.log("error is ", e);
    }
  };

  render() {
    const { amount } = this.state;
    {
      if (this.state.show) {
        return (
          <Store.Consumer>
            {context => {
              return (
                <React.Fragment>
                  <Container>
                    <Input
                      keyboardType="numeric"
                      onChangeText={amount => this.changeAmount(amount)}
                    />
                    <MyButton
                      title="Get Rate"
                      onPress={() => this.update(true)}
                    />
                    <MyButton
                      title="Re-Enter"
                      onPress={() => this.update(false)}
                    />

                  </Container>
                  <ListContainer>
                    <FlatList
                      data={context.state.list}
                      renderItem={item => {
                        let price = amount !== 0
                          ? (item.item.rate * amount).toFixed(2)
                          : item.item.rate;
                        let newItem = {
                          ...item.item,
                          base: context.state.base
                        };
                        return (
                          <List
                            onPress={() => this.navigates(newItem)}
                            symbol={item.item.currency}
                            convert={price}
                          />
                        );
                      }}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </ListContainer>
                </React.Fragment>
              );
            }}
          </Store.Consumer>
        );
      } else {
        return (
          <Store.Consumer>
            {context => {
              let newList = context.state.list.map((item, index) => {
                let newObj = {};
                newObj["label"] = item["currency"];
                newObj["value"] = item["currency"];
                newObj["key"] = index;
                return newObj;
              });
              if (context.state.list.length > 0) {
                return (
                  <Container>
                    <Pickers
                      value={this.state.base}
                      items={newList}
                      onValueChange={value => {
                        this.setState({ base: value });
                      }}
                      onDonePress={() => context.changeBase(this.state.base)}
                    />
                    <Input
                      keyboardType="numeric"
                      onChangeText={amount => this.changeAmount(amount)}
                    />
                    <MyButton
                      title="Get Rate"
                      onPress={() => this.update(true)}
                    />
                  </Container>
                );
              } else {
                <LoadingView>
                  <Text>Loading...</Text>
                </LoadingView>;
              }
            }}
          </Store.Consumer>
        );
      }
    }
  }
}

export default Main;
