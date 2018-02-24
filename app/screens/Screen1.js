import React, { Component } from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';

class Screen extends Component {
  handlePress = () => {
    console.log(this.props,"hjhj")
/*    this.props.navigator.showInAppNotification({
 screen: "Screen3", // unique ID registered with Navigation.registerScreen
 passProps: {}, // simple serializable object that will pass as props to the in-app notification (optional)
 autoDismissTimerSec: 1 // auto dismiss notification in seconds
});*/
   /* this.props.navigator.toggleDrawer({
  side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
  animated: true, // does the toggle have transition animation or does it happen immediately (optional)
  to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
});*/
    this.props.navigator.push({
      screen: 'Screen3',
      title: 'Screen 3',
    });
  };

  render() {
    return (
      <Container
        backgroundColor="#F44336"
        onPress={this.handlePress}
      />
    );
  }
}

export default Screen;
