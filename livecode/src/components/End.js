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

class End extends Component {
  setRandomWord() {
    let { words, word } = this.props.game;
    let randomWord = words[Math.floor(Math.random()*words.length)];
    this.props.setWord(randomWord);
    this.props.navigation.navigate('Game');
  }

  render() {
    let { isWin } = this.props.game;
    let status = '';
    isWin ?
      status = 'You Win' :
      status = "You Lose"
    return (
      <View>
        <Text>{ status }</Text>
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
  tweetCard: {
    backgroundColor: '#ffffff',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderRadius: 8,
    borderWidth: 3,
    margin: 0,
    width: 220,
  },
  tweetText: {
    backgroundColor: '#ffffff',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 2,
    margin: 4,
  },
  inputTweet: {
    display: 'flex',
    borderStyle: 'solid',
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'stretch',
    width: '90%'
  },
  btnTweet: {
    width: 60,
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

export default connect(mapStateToProps, mapDispatchToProps)(End);