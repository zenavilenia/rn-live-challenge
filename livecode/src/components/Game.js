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
          console.log('new hidden word', newHiddenWord)
          if(newHiddenWord.indexOf("_") === -1) {
            this.props.setStatus();
            this.props.navigation.navigate('End');
          }
          isFind = true;
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
    if (this.state.guessLeft <= 2) {
      status = "Can't You Guess It?"
    }
    return (
      <View >
        <View style= { styles.card }>
          <Text>Ini Game</Text>
          <Text> { this.state.hiddenWord.join(' ') } </Text>
          <Text>Turn Left: { this.state.guessLeft }</Text>
          <Text>Guessed Word: { this.state.guessedWord }</Text>
          <Text>Game Status: { status } </Text>
        </View>
        <View style={ styles.flexContainer }>
          <View style={ styles.btnFlex }>
            <Button style={ styles.btn } title='Q' onPress={ () => { this.guessTry('Q') } } />
            <Button style={ styles.btn } title='W' onPress={ () => { this.guessTry('W') } }/>
            <Button style={ styles.btn } title='E' onPress={ () => { this.guessTry('E') } }/>
            <Button style={ styles.btn } title='R' onPress={ () => { this.guessTry('R') } }/>
            <Button style={ styles.btn } title='T' onPress={ () => { this.guessTry('T') } }/>
            <Button style={ styles.btn } title='Y' onPress={ () => { this.guessTry('Y') } }/>
            <Button style={ styles.btn } title='U' onPress={ () => { this.guessTry('U') } }/>
            <Button style={ styles.btn } title='I' onPress={ () => { this.guessTry('I') } }/>
            <Button style={ styles.btn } title='O' onPress={ () => { this.guessTry('O') } }/>
            <Button style={ styles.btn } title='P' onPress={ () => { this.guessTry('P') } }/>
          </View>

          <View style={ styles.btnFlex }>
            <Button style={ styles.btn } title='A' onPress={ () => { this.guessTry('A') } } />
            <Button style={ styles.btn } title='S' onPress={ () => { this.guessTry('S') } }/>
            <Button style={ styles.btn } title='D' onPress={ () => { this.guessTry('D') } }/>
            <Button style={ styles.btn } title='F' onPress={ () => { this.guessTry('F') } }/>
            <Button style={ styles.btn } title='G' onPress={ () => { this.guessTry('G') } }/>
            <Button style={ styles.btn } title='H' onPress={ () => { this.guessTry('H') } }/>
            <Button style={ styles.btn } title='J' onPress={ () => { this.guessTry('J') } }/>
            <Button style={ styles.btn } title='K' onPress={ () => { this.guessTry('K') } }/>
            <Button style={ styles.btn } title='L' onPress={ () => { this.guessTry('L') } }/>
          </View>

          <View style={ styles.btnFlex }>
            <Button style={ styles.btn } title='Z' onPress={ () => { this.guessTry('Z') } }/>
            <Button style={ styles.btn } title='X' onPress={ () => { this.guessTry('X') } }/>
            <Button style={ styles.btn } title='C' onPress={ () => { this.guessTry('C') } }/>
            <Button style={ styles.btn } title='V' onPress={ () => { this.guessTry('V') } }/>
            <Button style={ styles.btn } title='B' onPress={ () => { this.guessTry('B') } }/> 
            <Button style={ styles.btn } title='N' onPress={ () => { this.guessTry('N') } }/> 
            <Button style={ styles.btn } title='M' onPress={ () => { this.guessTry('M') } }/>
          </View>
        </View>
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
  flexContainer: {
    height:200,
    width:500,
  },
  btnFlex: {
    flex: 1,
    flexDirection: 'row'
  },
  btn: {
    width: 20,
    height: 20,
  }
})

const mapStateToProps = (state) => ({
  game: state.game
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setStatus
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Game);