import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MovieScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";

const TabNavigation = createBottomTabNavigator(
  {
    Movies: MovieScreen,
    TV: TVScreen,
    Search: SearchScreen
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
