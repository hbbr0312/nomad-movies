import React, { Component } from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends Component {
  state = {
    loading: true,
    topRated: null,
    popular: null,
    airingToday: null
  };
  async componentDidMount() {
    let topRated, popular, airingToday, error;
    try {
      ({ results: topRated } = await tvApi.getTopRated());
      ({ results: popular } = await tvApi.getPopular());
      ({ results: airingToday } = await tvApi.getAiringToday());
    } catch (error) {
      console.log(error);
      error = "Cannot get tv";
    } finally {
      this.setState({
        loading: false,
        topRated,
        popular,
        airingToday,
        error
      });
    }
  }
  render() {
    const { loading, topRated, popular, airingToday } = this.state;
    return (
      <TVPresenter
        loading={loading}
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
      />
    );
  }
}
