import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

export default function navigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <NavLink exact={props.exact} activeClassName={classes.active} to={props.link}>{props.children}</NavLink>
    </li>
  )
}
