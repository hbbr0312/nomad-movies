import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makePhotoUrl } from "../utils/makeUrl";

const Image = styled.Image`
  width: 110px;
  height: 160px;
  border-radius: 2.5px;
`;

const MoviePoster = ({ path }) => (
  <Image source={{ uri: makePhotoUrl(path) }} />
);

MoviePoster.prototype = {
  path: PropTypes.string
};

export default MoviePoster;
