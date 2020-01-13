import React from 'react'

import classes from './NavigationItem.css';

export default function navigationItem(props) {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
    </li>
  )
}
