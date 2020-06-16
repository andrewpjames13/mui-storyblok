import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';

import Storyblok from '../../../../utils/Storyblok';
import MuiListItemAvatar from './components/MuiListItemAvatar/MuiListItemAvatar';
import MuiListItemIcon from './components/MuiListItemIcon/MuiListItemIcon';
import MuiListItemSecondaryAction from './components/MuiListItemSecondaryAction/MuiListItemSecondaryAction';
import MuiListItemText from './components/MuiListItemText/MuiListItemText';
import MuiContactButton from '../../../MuiContactButton/MuiContactButton';

const MuiListItem = ({
  rootClass,
  alignItems,
  dense,
  disableGutters,
  divider,
  selected,

  contactButton,
  listItemAvatar,
  listItemIcon,
  listItemSecondaryAction,
  listItemText,
}) => {
  const components = {
    MuiListItemAvatar,
    MuiListItemIcon,
    MuiListItemSecondaryAction,
    MuiListItemText,
    MuiContactButton,
  };
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const avatar = listItemAvatar[0];
  const icon = listItemIcon[0];
  const secondaryAction = listItemSecondaryAction[0];
  const text = listItemText[0];
  const contact = contactButton[0];
  return (
    <ListItem
      className={styles.root}
      dense={dense}
      alignItems={alignItems}
      disableGutters={disableGutters}
      divider={divider}
      selected={selected}
    >
      {avatar ? createElement(components[avatar.component], { ...avatar }) : null}
      {icon ? createElement(components[icon.component], { ...icon }) : null}
      {text ? createElement(components[text.component], text) : null}
      {
        secondaryAction
          ? createElement(components[secondaryAction.component], secondaryAction)
          : null
      }
      {contact ? createElement(components[contact.component], { ...contact }) : null}
    </ListItem>
  );
};

export default MuiListItem;

MuiListItem.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** mui prop: 'flex-start'| 'center'
   * Defines the align-items style property.
  */
  alignItems: PropTypes.string,
  /** mui prop: true | false
   * If true, compact vertical padding designed for keyboard and mouse input will be used.
   * */
  dense: PropTypes.bool,
  /** mui prop: true | false
   * If true, the left and right padding is removed.
   * */
  disableGutters: PropTypes.bool,
  /** mui prop: true | false
   * If true, a 1px light border is added to the bottom of the list item.
   * */
  divider: PropTypes.bool,
  /** mui prop: true | false
   * Use to apply selected styling.
   * */
  selected: PropTypes.bool,

  /** MuiListItemAvatar Allowed maximum: 1 */
  listItemAvatar: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),
  /** MuiListItemAvatar Allowed maximum: 1 */
  contactButton: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),
  /** MuiListItemIcon Allowed maximum: 1 */
  listItemIcon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),
  /** MuiListItemText Allowed maximum: 1 */
  listItemText: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  /** MuiListItemSecondaryAction Allowed maximum: 1 */
  listItemSecondaryAction: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),
};

MuiListItem.defaultProps = {
  alignItems: 'center',
  dense: false,
  disableGutters: false,
  divider: false,
  selected: false,
  rootClass: [],
  listItemAvatar: [],
  listItemIcon: [],
  listItemSecondaryAction: [],
  contactButton: [],
};
