import React from 'react';
import PropTypes from 'prop-types';
import { GridListTileBar } from '@material-ui/core';
import Storyblok from '../../../../utils/Storyblok';
import {
  validComponents,
  muiStringProp,
} from '../../../../utils/customProps';
import MuiIconButtonRedirect from '../../../MuiIconButtonRedirect/MuiIconButtonRedirect';

const MuiGridListTileBar = ({
  actionIcon,
  titlePosition,
  rootClass,
  subtitle,
  title,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <>
      <GridListTileBar
        title={title}
        subtitle={<span>{subtitle}</span>}
        actionIcon={
          actionIcon.map(icon => (
            <MuiIconButtonRedirect {...icon} />
          ))
        }
        titlePosition={titlePosition}
        className={styles.root}
      />
    </>
  );
};

export default MuiGridListTileBar;

MuiGridListTileBar.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: node
   * String or element serving as subtitle (support text).
   */
  subtitle: PropTypes.string,
  /**
   * mui prop: node
   * Title to be displayed on tile.
   */
  title: PropTypes.string,
  /**
   * mui prop: 'bottom', 'top'
   * Position of the title bar.
   */
  titlePosition(props, propName, componentName) {
    const validProps = ['bottom', 'top'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * Content passed to render
   * components: MuiIconButtonRedirect
   */
  actionIcon(props, propName, componentName) {
    const components = ['MuiIconButtonRedirect'];
    return validComponents(props, propName, componentName, components, 1);
  },
};

MuiGridListTileBar.defaultProps = {
  rootClass: [],
  title: '',
  titlePosition: 'bottom',
  subtitle: '',
  actionIcon: [],
};
