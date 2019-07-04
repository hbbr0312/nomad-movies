import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: {
            isMovie,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview
          }
        }
      }
    } = props;
    this.state = {
      isMovie,
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overview,
      loading: true
    };
  }
  async componentDidMount() {
    const { isMovie, id } = this.state;
    let error, genres, overview, status, date, backgroundPhoto;
    try {
      if (isMovie) {
        ({
          genres,
          overview,
          status,
          release_date: date,
          backdrop_path: backgroundPhoto
        } = await movieApi.getMovie(id));
      } else {
        ({
          genres,
          overview,
          status,
          first_air_date: date,
          backdrop_path: backgroundPhoto
        } = await tvApi.getTV(id));
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        loading: false,
        genres,
        overview,
        status,
        date,
        backgroundPhoto
      });
    }
  }
  render() {
    const {
      isMovie,
      id,
      posterPhoto,
      backgroundPhoto,
      title,
      voteAvg,
      overview,
      loading,
      date,
      status,
      genres
    } = this.state;
    return (
      <DetailPresenter
        id={id}
        posterPhoto={posterPhoto}
        backgroundPhoto={backgroundPhoto}
        title={title}
        voteAvg={voteAvg}
        overview={overview}
        isMovie={isMovie}
        loading={loading}
        date={date}
        status={status}
        isMovie={isMovie}
        genres={genres}
      />
    );
  }
}
