import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Game extends Component {
  render() {
    return (
      <View>
        <Text>Ini Game</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  game: state.game
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setWord
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);