import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity 
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as  appActions from '../../actions/index';
import { bindActionCreators } from 'redux';

 class Hometab extends Component {

handleBack(){
 console.log(this.props)
  this.props.actions.appInitialized();
}
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity  style={styles.welcome} onPress={()=>this.handleBack()}>
            <Text>Back</Text>
        </TouchableOpacity >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(appActions, dispatch) }
}

export default connect(null, mapDispatchToProps)(Hometab)
