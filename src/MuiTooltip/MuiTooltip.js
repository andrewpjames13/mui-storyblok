import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Storyblok from '../utils/Storyblok';

const MuiIconButtonRedirect = lazy(() => import('../MuiIconButtonRedirect/MuiIconButtonRedirect'));
const MuiIconButtonHref = lazy(() => import('../MuiIconButtonHref/MuiIconButtonHref'));
const MuiIconButtonDownload = lazy(() => import('../MuiIconButtonDownload/MuiIconButtonDownload'));
const MuiIconButtonDialog = lazy(() => import('../MuiIconButtonDialog/MuiIconButtonDialog'));

const MuiButtonRedirect = lazy(() => import('../MuiButtonRedirect/MuiButtonRedirect'));
const MuiButtonHerf = lazy(() => import('../MuiButtonHerf/MuiButtonHerf'));
const MuiButtonDownload = lazy(() => import('../MuiButtonDownload/MuiButtonDownload'));
const MuiButtonDialog = lazy(() => import('../MuiButtonDialog/MuiButtonDialog'));

const MuiTooltip = ({
  rootClass,
  title,
  arrow,
  placement,
  content,
}) => {
  const components = {
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiButtonRedirect,
    MuiButtonHerf,
    MuiButtonDownload,
    MuiButtonDialog,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);
  return (
    <Tooltip
      className={styles.root}
      placement={placement}
      title={title}
      arrow={arrow}
    >
      <IconButton>
        {/*
          Warning: validateDOMNesting(...): <button> cannot appear as a descendant of <button>
          components use IconButton to wrap MuiIcon and handle onClick event but when its
          rendered Tooltip is not able to show message
        */}
        <Suspense fallback={<div />}>
          {(createElement(components[content[0].component], content[0]))}
        </Suspense>
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltip;

MuiTooltip.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** text for tooltip */
  title: PropTypes.string.isRequired,
  /** If true, adds an arrow to the tooltip. */
  arrow: PropTypes.bool,
  /** mui prop: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top' */
  placement: PropTypes.string,

  /** MuiButtonRedirect; Allowed maximum: 1 */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiTooltip.defaultProps = {
  arrow: false,
  placement: 'bottom',
  rootClass: [],
};