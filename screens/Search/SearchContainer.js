import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default class SearchContainer extends React.Component {
  state = {
    loading: false,
    tvResults: null,
    movieResults: null,
    searchTerm: "",
    error: null,
    valid: true
  };
  handleSearchUpdate = text => {
    this.setState({ searchTerm: text, valid: true });
  };
  onSubmitEditing = async () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.setState({ loading: true });
      let tvResults, movieResults, error, valid;
      try {
        ({ results: tvResults } = await tvApi.searchTV(searchTerm));
        ({ results: movieResults } = await movieApi.searchMovies(searchTerm));
        if (movieResults === null || movieResults.length < 1) {
          if (tvResults === null || tvResults.length < 1) {
            valid = false;
          }
        } else {
          valid = true;
        }
      } catch {
        error = "Can't search";
      } finally {
        this.setState({
          loading: false,
          tvResults,
          movieResults,
          searchTerm,
          error,
          valid
        });
      }
    }
  };
  render() {
    const { loading, tvResults, movieResults, searchTerm, valid } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        tvResults={tvResults}
        movieResults={movieResults}
        searchTerm={searchTerm}
        handleSearchUpdate={this.handleSearchUpdate}
        onSubmitEditing={this.onSubmitEditing}
        valid={valid}
      />
    );
  }
}
