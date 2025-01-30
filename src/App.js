import { useState } from 'react';
import './App.css';
import Word from './Components/Word';

const guessCount = 6;

export default function App() {

  const correctWord = pickRandomWord();
  const [guesses, setGuesses] = useState(Array(guessCount).fill(''));
  const [currentGuess, setCurrentGuess] = useState('');
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);

  function pickRandomWord() {
    const words = fetchWords();
    return words[Math.floor(Math.random() * words.length)];
  }

  function fetchWords() {
    return fetch('https://api.frontendexpert.io/api/fe/wordle-words')
      .then(response => response.json())
      .then(words => words);
  }

  function HandleGuess() {
    const newGuesses = [...guesses];
    newGuesses[currentGuessIndex] = currentGuess;
    setGuesses(newGuesses);
    setCurrentGuess('');
    setCurrentGuessIndex(currentGuessIndex + 1);
  }

  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <div ClassName="Board">
        {guesses.map((guess, index) => (
          <Word key={index} word={guess}/>
        ))}
      </div>
      <input value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)}></input>
      <button onClick={HandleGuess}>Guess</button>
    </div>
  );
}