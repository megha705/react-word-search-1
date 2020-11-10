import React, { useState, useEffect } from 'react';
import wordsearch from 'wordsearch';
import WordsearchSolver from 'word-search-solver';
import WordList from '../../components/WordList';
import WordSearch from '../../components/WordSearch';
import Button from '../../components/Button';
import MainButton from '../../components/MainButton';
import Footer from '../../components/Footer';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import Header from '../../components/Header';
import './styles.css';

function createEmptyPuzzle(width, height) {
  return Array(height).fill(Array(width).fill('•'));
} 

export default function WordSeach(props) {
  const { concept } = props.location.state;

  const [words, setWords] = useState(concept.words);
  const [excludedWords, setExcludedWords] = useState([]);
  const [width, setWidth] = useState(16);
  const [height, setHeight] = useState(16);
  const [solution, setSolution] = useState();
  const [showSolution, setShowSolution] = useState(false);
  const [puzzle, setPuzzle] = useState(createEmptyPuzzle(width, height));


  useEffect(() => {
    updatePuzzle();
  }, [words])

  const handleWordAdded = (word) => {
    const handleWords = words.slice();
    if (word.trim().length > 1 && handleWords.indexOf(word) === -1) {
      handleWords.push(word.toLowerCase().replace(/\s/g, ''));
      setWords(handleWords);
      updatePuzzle();
    }
  };

  const handleWordRemoved = (word) => {
    const handleWords = words.slice();
    if (handleWords.indexOf(word) !== -1) {
      handleWords.splice(handleWords.indexOf(word), 1);
      setWords(handleWords);
      updatePuzzle();
    }
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const updatePuzzle = () => {
    if (words.length) {
      const ws = wordsearch(words, width, height, { backwards: 0.25 });
      const solutionResponse = WordsearchSolver(ws.grid, words);
      setSolution(solutionResponse)
      setPuzzle(ws.grid);
      setExcludedWords(ws.unplaced);
    } else {
      setPuzzle(createEmptyPuzzle(width, height));
      setExcludedWords([]);
    }
  }

  return (
    <div className="Editor">
      <Header title={concept.title} />
      <div className="Editor-wordsearch">
        <div className="Editor-panel-left">
          <div className="Editor-wordlist">
            <WordList
              title="Palavras"
              words={words}
              emptyMessage="No words yet&mdash;add some!"
              onWordAdded={handleWordAdded}
              onWordRemoved={handleWordRemoved}
              editable
            />
          </div>
          <div className="Editor-showSolution-container" onClick={toggleSolution}>
            {showSolution? <p>Esconder</p> : <p>Mostrar</p>}
            <Button className="Editor-showSolution" onClick={toggleSolution}>
              {showSolution ? <AiFillEye size={28} /> : <AiFillEyeInvisible size={28} />}
            </Button>
          </div>
        </div>
        <div className="center">
          <WordSearch puzzle={puzzle} solution={solution} showSolution={showSolution} />
        </div>
        <div className="Editor-panel-right">
          <div className="Editor-wordlist">
          </div>
          <div className="exit-button">
            <MainButton isExit={true} />
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}