import React, { Component } from "react";
import { View, Text, Dimensions, FlatList } from "react-native";
import { Grid, LineChart, XAxis, YAxis } from "react-native-svg-charts";
import styled from "styled-components";

import HistoryList from "../components/HistoryList";

const { width, height } = Dimensions.get("screen");
const Main = styled.View`
  flex: 1;
`;
const Title = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;
const Container = styled.View`
  flex: 7;
  justify-content: center;
  align-items: center;
`;

const GraphContainer = styled.View`
  height: ${height * 0.4}; 
  width: ${width};
  padding: 20px; 
  flex-direction: row;
`;

const FlatContainer = styled.View`
  flex: 7;
`;

class Chart extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log("navigation ", navigation);
    const { base, currency } = navigation.state.params.allData;
    return {
      title: `${base} - ${currency}`
    };
  };
  state = {
    dates: [],
    historyData: [],
    base: "",
    currency: ""
  };
  componentDidMount() {
    const {
      dates,
      historyData,
      base,
      currency
    } = this.props.navigation.getParam("allData");
    this.setState({ dates, historyData, base, currency });
  }
  render() {
    const axesSvg = { fontSize: 10, fill: "lightgrey" };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;

    return (
      <Main>
        <Title>
          <Text>Past 3month Change</Text>
        </Title>
        <Container>
          <GraphContainer>
            <YAxis
              data={this.state.historyData}
              style={{ marginBottom: xAxisHeight }}
              contentInset={verticalContentInset}
              svg={axesSvg}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <LineChart
                style={{ flex: 1 }}
                data={this.state.historyData}
                contentInset={verticalContentInset}
                svg={{ stroke: "rgb(134, 65, 244)" }}
              >
                <Grid />
              </LineChart>
              <XAxis
                style={{ marginHorizontal: -10, height: xAxisHeight }}
                data={this.state.historyData}
                formatLabel={(value, index) => index}
                contentInset={{ left: 10, right: 10 }}
                svg={axesSvg}
              />
            </View>
          </GraphContainer>
        </Container>
        <FlatContainer>
          <FlatList
            data={this.state.historyData}
            renderItem={item => {
              return (
                <HistoryList
                  time={this.state.dates[item.index]}
                  rate={item.item.toFixed(2)}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </FlatContainer>
      </Main>
    );
  }
}

export default Chart;
