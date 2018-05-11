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
  constructor() {
    super();

    this.state = {
      hiddenWord: '',
      guessLeft: 5,
    };
  }

  hideWord() {
    let { word } = this.props.game;
    let wordTmp = word.split("");
    let tmp = []
    for(let i in wordTmp) {
      if(wordTmp[i] === " ") {
        tmp.push("&nbsp;");
      } else {
        tmp.push("_");
      }
    }
    this.setState({
      hiddenWord: tmp.join(' ')
    })
  }

  changeGuessLeft() {
    this.setState({
      guessLeft: guessLeft-1
    })
  }

  checkGame() {
    if(this.state.guessLeft <= 0) {

    }
  }

  componentDidMount() {
    this.hideWord();
  }

  

  render() {
    let { word } = this.props.game;
    return (
      <View>
        <Text>Ini Game</Text>
        <Text> { this.state.hiddenWord } </Text>
        <Text>Turn Left: { this.state.guessLeft }</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  game: state.game
})

export default connect(mapStateToProps, null)(Game);