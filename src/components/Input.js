import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components";

const InputContainer = styled.TextInput`
  width: 300;
  height: 50;
  margin: 5px;
  border: 1px solid #80a9ed;
  padding-left: 10;
  border-radius: 17;
  font-size: 18px;
`;

const Input = ({ onChangeText, value, keyboardType }) => (
  <InputContainer
    onChangeText={onChangeText}
    value={value}
    placeholder={"Enter the amount"}
    keyboardType={keyboardType}
  />
);

export default Input;
