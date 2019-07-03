import React, { Component } from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movieApi } from "../../api";

export default class extends Component {
  state = {
    loading: true,
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null
  };

  async componentDidMount() {
    let nowPlaying, upcoming, popular, error;
    try {
      ({ results: nowPlaying } = await movieApi.getNowPlaying());
      ({ results: upcoming } = await movieApi.getUpcoming());
      ({ results: popular } = await movieApi.getPopular());
    } catch (error) {
      console.log(error);
      error = "Cannot get movies";
    } finally {
      this.setState({ loading: false, upcoming, nowPlaying, popular, error });
    }
  }

  render() {
    const { loading, upcoming, popular, nowPlaying } = this.state;
    return (
      <MoviesPresenter
        loading={loading}
        upcoming={upcoming}
        popular={popular}
        nowPlaying={nowPlaying}
      />
    );
  }
}
