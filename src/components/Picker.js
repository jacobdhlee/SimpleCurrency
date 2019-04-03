import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import PickersSelect from "react-native-picker-select";

const PickerContainer = styled.View`
  width: 300;
  height: 50;
  margin: 5px;
`;

const Pickers = ({ onValueChange, value, items, onDonePress }) => {
  return (
    <PickerContainer>
      <PickersSelect
        onValueChange={onValueChange}
        value={value}
        items={items}
        onDonePress={onDonePress}
      />
    </PickerContainer>
  );
};

export default Pickers;
