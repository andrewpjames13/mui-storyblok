import React from 'react';
import PropTypes from 'prop-types';
import { validComponentsRequired } from '../../utils/customProps';
import downloadUrl from '../../utils/downloadUrl';
import MuiIconButton from '../MuiIconButton/MuiIconButton';

/**
 * MuiIconButtonDownload is used in storyblok that will download a href
 */

export const MuiIconButtonDownload = ({
  href,
  fileName,
  iconButton,
}) => {
  const onClick = () => {
    downloadUrl(href, fileName);
  };
  const muiIconButton = iconButton[0];

  return (
    <MuiIconButton
      {...muiIconButton}
      onClick={onClick}
    />
  );
};

export default MuiIconButtonDownload;

MuiIconButtonDownload.propTypes = {
  /** url of the file you want to be downloaded */
  href: PropTypes.string.isRequired,
  /** name of file */
  fileName: PropTypes.string.isRequired,
  /** MuiIconButton Allowed maximum: 1 */
  iconButton(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiIconButton'], 1);
  },
};

MuiIconButtonDownload.defaultProps = {
  iconButton: [],
};
