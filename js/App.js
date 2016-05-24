/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {View, StatusBar, StyleSheet, ListView} from 'react-native';
import NavBar from './components/NavBar';
import UserCard from './components/UserCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchUserListAction } from './actions/userListAction'

class App extends Component {
  constructor() {
    super();
    StatusBar.setBarStyle('light-content');
    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
  }

  dataSource: ListView.DataSource;
  
  componentWillMount() {
    this.props.fetchAction()
  }

  render() {
    const { userlist, dispatch } = this.props

    const ds = this.dataSource.cloneWithRows(userlist);
    console.log(userlist);
    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
          dataSource={ds}
          renderRow={(user) => <UserCard user= {user}/>}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  }
});


// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    userlist: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAction: bindActionCreators(fetchUserListAction, dispatch)
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select, mapDispatchToProps)(App)
