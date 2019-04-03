import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex-direction: row;
  height: 80;
  width: 400;
  justify-content: center;
  align-items: center;
  /* border-bottom-width: 1px; */
`;

const Currency = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;
const CurrencyText = styled.Text`
  font-size: 15px;
`;
const Convert = styled.View`
  flex: 7;
  justify-content: center;
  align-items: center;
`;

const ConvertText = styled.Text`
  font-size: 15px;
`;
const List = ({ symbol, convert, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <Currency>
        <CurrencyText>{symbol}</CurrencyText>
      </Currency>
      <Convert>
        <ConvertText>{convert}</ConvertText>
      </Convert>
    </Container>
  </TouchableOpacity>
);

export default List;
