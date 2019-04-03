import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

const MainButton = styled.TouchableOpacity`
  align-items : center;
  justify-content: center;
  width: 300;
  height: 50;
  background-color: #a5c7ff;
  margin: 16px;
  border-radius: 20px;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
`;

const MyButton = ({ title, onPress }) => (
  <MainButton onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </MainButton>
);

export default MyButton;
