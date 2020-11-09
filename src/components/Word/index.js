import React from 'react';
import './styles.css';

export default function Word(props) {
  return (
    <li className="Word">
      <span className="Word-label">{props.word}</span>
      {/* {props.controls &&
        <button className="Word-removeBtn" onClick={props.onRemove}>
          <span className="u-srOnly">Remove word</span>
        </button>
      } */}
    </li>
  )
}