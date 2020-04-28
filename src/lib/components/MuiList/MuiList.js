/* eslint-disable max-len */
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import Storyblok from '../../utils/Storyblok';
import MuiListItem from './components/MuiListItem/MuiListItem';

const MuiList = ({
  rootClass,
  dense,
  disablePadding,
  width,
  content,
}) => {
  const components = {
    MuiListItem,
  };

  // const styles = Storyblok.arrayToMuiStyles(rootClass, { width, minWidth: '32vw' });
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <List
      className={styles.root}
      dense={dense}
      disablePadding={disablePadding}
      width={width}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </List>
  );
};

export default MuiList;

MuiList.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** mui prop: true | false */
  disablePadding: PropTypes.bool,
  /**
   * mui prop: true | false
   * If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. The prop is available to descendant components as the dense context.
   * */
  dense: PropTypes.bool,
  /** width of list */
  width: PropTypes.string,

  /** MuiListItem */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiList.defaultProps = {
  width: '100%',
  dense: false,
  disablePadding: false,
  rootClass: [],
};
