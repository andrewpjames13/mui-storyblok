import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Storyblok from '../../../../utils/Storyblok';
import MuiTypography from '../../../MuiTypography/MuiTypography';
import MuiExpansionPanel from '../../../MuiExpansionPanel/MuiExpansionPanel';
import MuiList from '../../../MuiList/MuiList';

const MuiCardContent = ({
  content,
  rootClass,
}) => {
  const components = {
    MuiTypography,
    MuiExpansionPanel,
    MuiList,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <CardContent
      className={styles.root}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </CardContent>
  );
};

export default MuiCardContent;

MuiCardContent.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * Content passed to render
   * components:
    MuiTypography,
    MuiExpansionPanel,
    MuiList,
   */
  content(props, propName, componentName) {
    const validComponents = [
      'MuiTypography',
      'MuiExpansionPanel',
      'MuiList',
    ];
    return validComponents(props, propName, componentName, validComponents);
  },
};

MuiCardContent.defaultProps = {
  rootClass: [],
  content: [],
};
