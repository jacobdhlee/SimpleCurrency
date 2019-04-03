import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import PickersSelect from "react-native-picker-select";

const PickerContainer = styled.View`
  width: 300;
  height: 50;
  margin: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid #80a9ed;
  border-radius: 20;
`;

const pickerStyle = {
  inputIOS: {
    color: "grey",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  inputAndroid: {
    color: "white"
  },
  underline: { borderTopWidth: 0 }
};

const Pickers = ({ onValueChange, value, items, onDonePress }) => {
  return (
    <PickerContainer>
      <PickersSelect
        style={pickerStyle}
        onValueChange={onValueChange}
        value={value}
        items={items}
        onDonePress={onDonePress}
      />
    </PickerContainer>
  );
};

export default Pickers;
