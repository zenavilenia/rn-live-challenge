import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class End extends Component {
  render() {
    let { isWin } = this.props.game;
    if (isWin) {
      return (
        <View>
          <Text>You Win</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>You Lose</Text>
        </View>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  game: state.game
})

export default connect(mapStateToProps, null)(End);