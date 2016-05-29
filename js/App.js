/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { View, StatusBar, StyleSheet, ListView } from 'react-native'
import NavBar from './components/NavBar'
import UserCard from './components/UserCard'
import { connect } from 'react-redux'
import { fetchUserListAction } from './actions/userListAction'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  }
})

class App extends Component {
  constructor() {
    super()
    StatusBar.setBarStyle('light-content')
    this.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentWillMount() {
    this.props.fetchAction()
  }

  render() {
    const { userlist } = this.props
    const ds = this.dataSource.cloneWithRows(userlist)

    return (
      <View style={styles.container}>
        <NavBar />
        <ListView
          dataSource={ds}
          renderRow={(user) => <UserCard user={user} />} enableEmptySections
        />
      </View>
    )
  }
}

function select(state) {
  return {
    userlist: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAction: () => dispatch(fetchUserListAction())
  }
}

export default connect(select, mapDispatchToProps)(App)
