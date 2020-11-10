import React, { useState } from 'react';
import TextInput from '../TextInput';
import Word from '../Word';
import './styles.css';

export default function WordList(props) {
  const [newWord, setNewWord] = useState('');

  const handleNewWordChange = (e) => {
    setNewWord(e.target.value);
  };

  const handleSubmit = () => {
    props.onWordAdded(newWord);
    setNewWord('');
  };

  const words = props.words.map(w => (
    <Word
      word={w}
      controls={props.editable}
      onRemove={() => props.onWordRemoved(w)}
      key={w}
    />
  ))

  return (
    <div className="WordList">
      {props.title &&
        <div className="WordList-heading">{props.title}</div>
      }
      {props.emptyMessage && props.words.length === 0 &&
        <div className="WordList-emptyMessage">{props.emptyMessage}</div>
      }
      <ul className="WordList-list">
        {words} 
      </ul>
    </div>
  )
}