import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Storyblok from '../../../../utils/Storyblok';

const GridItem = ({
  alignContent,
  alignItems,
  rootClass,
  direction,
  justify,
  lg,
  md,
  sm,
  wrap,
  spacing,
  xs,
  xl,
  sizeGrid,
  content,
  gridItemComponets,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { padding: '25px' });

  return (
    <Grid
      item
      container
      alignContent={alignContent}
      alignItems={alignItems}
      className={styles.root}
      direction={direction}
      justify={justify}
      lg={sizeGrid(lg)}
      md={sizeGrid(md)}
      sm={sizeGrid(sm)}
      wrap={wrap}
      spacing={Number(spacing)}
      xs={sizeGrid(xs)}
      xl={sizeGrid(xl)}
    >
      {/* {content.map((item, index) => createElement(
        gridItemComponets[item.component],
        Object.assign(item, { key: index }),
      ))} */}
    </Grid>
  );
};

export default GridItem;

GridItem.propTypes = {
  /**
   * developer prop to pass components to a gridItem
   */
  gridItemComponets: PropTypes.shape().isRequired,
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'stretch'| 'center'| 'flex-start'| 'flex-end'| 'space-between'| 'space-around'
   * Defines the align-content style property. It's applied for all screen sizes.
   */
  alignContent: PropTypes.string,
  /**
   * mui prop: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
   * Defines the align-items style property. It's applied for all screen sizes.
   */
  alignItems: PropTypes.string,
  /*
  * mui prop: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  * Defines the flex-direction style property. It is applied for all screen sizes.
  */
  direction: PropTypes.string,
  /**
   * mui prop: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
   * Defines the justify-content style property. It is applied for all screen sizes.
   */
  justify: PropTypes.string,
  /**
   * mui prop: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   * Defines the number of grids the component is going to use. It's applied for the breakpoint and wider screens if not overridden.
   */
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  /**
   * mui prop: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   * Defines the number of grids the component is going to use. It's applied for the breakpoint and wider screens if not overridden.
   */
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  /**
   * mui prop: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   * Defines the number of grids the component is going to use. It's applied for the breakpoint and wider screens if not overridden.
   */
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  /**
   * mui prop:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
   * Defines the space between the type item component. It can only be used on a type container component.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * mui prop: 'nowrap' | 'wrap' | 'wrap-reverse'
   * Defines the flex-wrap style property. It's applied for all screen sizes.
   */
  wrap: PropTypes.string,
  /**
   * mui prop: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   * Defines the number of grids the component is going to use. It's applied for the breakpoint and wider screens if not overridden.
   */
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  /**
   * mui prop: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
   * Defines the number of grids the component is going to use. It's applied for the breakpoint and wider screens if not overridden.
   */
  xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

  /**
   * Content passed to MuiGrid to render
   * components: MuiButtonRedirect,
    MuiCard,
    MuiTypography,
    MuiMenu,
    MuiIcon,
    MuiExpansionPanel,
    MuiList
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** prop passed down from parent not in storyblok */
  sizeGrid: PropTypes.func.isRequired,
};

GridItem.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'center',
  rootClass: [],
  direction: 'row',
  justify: 'center',
  lg: false,
  md: false,
  sm: false,
  spacing: '2',
  wrap: 'wrap',
  xl: false,
  xs: false,
};
