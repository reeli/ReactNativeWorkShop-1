import React from 'react'
import { TextInput, AlertIOS } from 'react-native'

const styles = {
  filter: {
    paddingHorizontal: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
}

class FilterPanel extends React.Component {
  constructor() {
    super()
    this.state = { filter: '' }
  }

  render() {
    return (
      <TextInput
        style={styles.filter}
        onChangeText={(text) => this.setState({ filter: text })}
        onEndEditing={(event) => AlertIOS.alert(event.nativeEvent.text)}
      />
    )
  }
}

export default FilterPanel
