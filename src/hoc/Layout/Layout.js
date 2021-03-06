import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }
  siderDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }
  sideDrawerToggleHandler = () => {
    //prevState because of async setState
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.siderDrawerClosedHandler} />

        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>

    )
  }
}

export default Layout;