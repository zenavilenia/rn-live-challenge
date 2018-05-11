import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { setWord } from '../store/game/action';

class Home extends Component {
  setRandomWord() {
    let { words, word } = this.props.game;
    let randomWord = words[Math.floor(Math.random()*words.length)];
    this.props.setWord(randomWord);
    this.props.navigation.navigate('Game');
  }

  render() {
    return (
      <View style= { styles.card }>
        <TouchableHighlight style={ styles.btnTweet }>
          <Text
            onPress={ () => {
              this.setRandomWord()
            }}
          >New Game</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderRadius: 8,
    borderWidth: 3,
    margin: 16,
  },
  btnTweet: {
    width: 100,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 2,
    display: 'flex',
    alignItems: 'center',
  }
})

const mapStateToProps = (state) => ({
  game: state.game
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setWord
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);