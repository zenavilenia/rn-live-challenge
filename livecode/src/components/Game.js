import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { setStatus } from '../store/game/action';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      hiddenWord: [],
      guessLeft: 5,
      guessedWord: []
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
      hiddenWord: tmp
    })
  }

  guessTry(guessword) {
    this.checkGame();

    let { word } = this.props.game;
    let wordTmp = word.split("");
    let isFind = false;
    if(this.state.guessedWord.indexOf(guessword) === -1) {
      for (let i in wordTmp) {
        if (wordTmp[i] === guessword) {
          let newHiddenWord = []
          for (let j in this.state.hiddenWord) {
            if (j === i) {
              newHiddenWord.push(wordTmp[i]);
            } else {
              newHiddenWord.push(this.state.hiddenWord[j]);
            }
          }
          this.setState({
            hiddenWord: newHiddenWord
          })
          isFind = true;
          if (this.state.hiddenWord.indexOf("_") === -1) {
            this.props.setStatus();
            this.props.navigation.navigate('End');
          }
        }
      }
      if(!isFind) {
        let newGuessedWord = [...this.state.guessedWord, guessword]
        this.setState({
          guessedWord: newGuessedWord
        })
        let newGuessLeft = this.state.guessLeft-1;
        this.setState({
          guessLeft: newGuessLeft
        })
      }
    }

    this.checkGame();
  }

  checkGame() {
    if (this.state.guessLeft <= 1 ) {
      this.props.navigation.navigate('End');
    } else if (this.state.hiddenWord.indexOf("_") === -1) {
      this.props.setStatus();
      this.props.navigation.navigate('End');
    }
  }

  componentDidMount() {
    this.hideWord();
  }

  render() {
    let { word } = this.props.game;
    let status = "Good Guess"
    if (this.props.guessLeft <= 2) {
      status = "Can't You Guess It?"
    }
    return (
      <View>
        <View>
          <Text>Ini Game</Text>
          <Text> { this.state.hiddenWord.join(' ') } </Text>
          <Text>Turn Left: { this.state.guessLeft }</Text>
          <Text>Guessed Word: { this.state.guessedWord }</Text>
          <Text>Game Status: { status }</Text>
        </View>
        <View style={{ height:200, width:500 }}>
          <View style={{flex:1, flexDirection:'row'}}>
            <Button style={{width:20}} title='Q' onPress={ () => { this.guessTry('Q') } } />
            <Button style={{ width: 20 }} title='W' onPress={ () => { this.guessTry('W') } }/>
            <Button style={{ width: 20 }} title='E' onPress={ () => { this.guessTry('E') } }/>
            <Button style={{ width: 20 }} title='R' onPress={ () => { this.guessTry('R') } }/>
            <Button style={{ width: 20 }} title='T' onPress={ () => { this.guessTry('T') } }/>
            <Button style={{ width: 20 }} title='Y' onPress={ () => { this.guessTry('Y') } }/>
            <Button style={{ width: 20 }} title='N' onPress={ () => { this.guessTry('N') } }/>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button style={{ width: 20 }} title='A' onPress={ () => { this.guessTry('A') } } />
            <Button style={{ width: 20 }} title='S' onPress={ () => { this.guessTry('S') } }/>
            <Button style={{ width: 20 }} title='D' onPress={ () => { this.guessTry('D') } }/>
            <Button style={{ width: 20 }} title='F' onPress={ () => { this.guessTry('F') } }/>
            <Button style={{ width: 20 }} title='G' onPress={ () => { this.guessTry('G') } }/>
            <Button style={{ width: 20 }} title='H' onPress={ () => { this.guessTry('H') } }/>
            <Button style={{ width: 20 }} title='M' onPress={ () => { this.guessTry('M') } }/>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button style={{ width: 20 }} title='J' onPress={ () => { this.guessTry('J') } }/>
            <Button style={{ width: 20 }} title='U' onPress={ () => { this.guessTry('U') } }/>
            <Button style={{ width: 20 }} title='I' onPress={ () => { this.guessTry('I') } }/>
            <Button style={{ width: 20 }} title='K' onPress={ () => { this.guessTry('K') } }/>
            <Button style={{ width: 20 }} title='L' onPress={ () => { this.guessTry('L') } }/>
            <Button style={{ width: 20 }} title='O' onPress={ () => { this.guessTry('O') } }/>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button style={{ width: 20 }} title='P' onPress={ () => { this.guessTry('P') } }/>
            <Button style={{ width: 20 }} title='Z' onPress={ () => { this.guessTry('Z') } }/>
            <Button style={{ width: 20 }} title='X' onPress={ () => { this.guessTry('X') } }/>
            <Button style={{ width: 20 }} title='C' onPress={ () => { this.guessTry('C') } }/>
            <Button style={{ width: 20 }} title='V' onPress={ () => { this.guessTry('V') } }/>
            <Button style={{ width: 20 }} title='B' onPress={ () => { this.guessTry('B') } }/>  
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  game: state.game
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setStatus
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Game);