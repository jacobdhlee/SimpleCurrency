import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
  height: 60;
  width: 400;
  justify-content: center;
  align-items: center;
  /* border-bottom-width: 1px; */
`;

const Currency = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;
const CurrencyText = styled.Text`
  font-size: 15px;
`;
const Convert = styled.View`
  flex: 6;
  justify-content: center;
  align-items: center;
`;

const ConvertText = styled.Text`
  font-size: 15px;
`;

const HistoryList = ({ time, rate }) => (
  <Container>
    <Currency>
      <CurrencyText>{time}</CurrencyText>
    </Currency>
    <Convert>
      <ConvertText>{rate}</ConvertText>
    </Convert>
  </Container>
);

export default HistoryList;
