import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from "./screens/Main";
import Chart from "./screens/Chart";

const AppNavigate = createStackNavigator(
  {
    Home: {
      screen: Main
    },
    Detail: {
      screen: Chart
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigate);

export default AppContainer;
