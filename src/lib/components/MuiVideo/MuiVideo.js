import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import StoryBlok from '../../utils/Storyblok';
import {
  dimensionProp,
} from '../../utils/customProps';
const MuiVideo = ({
  url,
  height,
  width,
  controls,
  playing,
  loop,
  light,
  playbackRate,
  playsinline,
  pip,
  rootClass,
}) => {
  const styles = StoryBlok.anchorOrginToObj(rootClass);

  return (
    <>
      <ReactPlayer
        url={url}
        height={height}
        width={width}
        controls={controls}
        playing={playing}
        loop={loop}
        light={light}
        playbackRate={playbackRate}
        playsinline={playsinline}
        pip={pip}
        style={{ margin: '0', ...styles }}
      />
    </>
  );
};

export default MuiVideo;

MuiVideo.propTypes = {
  /**
   * storyblok multiselect of css classes
  */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * The Url for the video.
   */
  url: PropTypes.string.isRequired,
  /**
   * height for the video .
   */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /**
   * width for the video.
   */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /**
   * Set to true or false to display native player controls
   * Controls cannot be hidden for Wistia videos
   */
  controls: PropTypes.bool,
  /**
   * Set to true or false to pause or play the media.
   */
  playing: PropTypes.bool,
  /**
   * Set to true or false to loop the media.
   */
  loop: PropTypes.bool,
  /**
   * Set to true to show just the video thumbnail, which loads the full player on click
   * Pass in an image URL to override the preview image
   */
  light: PropTypes.bool,
  /**
   * Set the playback rate of the player
   * Only supported by YouTube, Wistia, and file paths
   */
  playbackRate: PropTypes.number,
  /**
   * Applies the playsinline attribute where supported.
   */
  playsinline: PropTypes.bool,
  /**
   * Set to true or false to enable or disable picture-in-picture mode
   * Only available when playing file URLs in certain browsers
   */
  pip: PropTypes.bool,
};

MuiVideo.defaultProps = {
  height: '500px',
  width: '640px',
  controls: false,
  playing: false,
  loop: false,
  light: false,
  playbackRate: 1,
  playsinline: false,
  pip: false,
  rootClass: [],
};
