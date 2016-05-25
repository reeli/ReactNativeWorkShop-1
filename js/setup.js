'use strict';

import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import fetchUserlist from './reducers/userReducer'
import store from './store'

export default class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
      )
  }
}