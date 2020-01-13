import React from 'react'
import classes from './DrawerToggle.css';

export default function drawerToggle(props) {
  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
