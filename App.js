import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading, Font } from "expo";
import TabNavigation from "./navigation/TabNavigation";

export default class App extends Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      console.log("ready");
      return <TabNavigation />;
    } else {
      console.log("not yet");
      return (
        <AppLoading
          startAsync={this.loadAssets}
          onFinish={this.handleLoaded}
          onError={this.handleError}
        />
      );
    }
  }
}
