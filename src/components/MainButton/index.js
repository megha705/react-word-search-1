import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import './styles.css';

export default function MainButton(props) {
  const { concept, isExit = false, isSearchWord = false } = props;

  return (
    <div className="main-button">
      {!isExit && !isSearchWord && 
        <Link 
          className="main-button-item"
          to={{ 
            pathname: '/' + concept.title.split(' ').join('').toLowerCase(), 
            state: {concept} 
          }} 
        > 
          <p>{concept.title}</p> 
          <div className="button-arrow">
            <FiArrowRight className="button-arrow-item" size={28} />
          </div>
        </Link>
      }
      {isSearchWord && 
        <Link 
          className="main-button-item"
          to={{ 
            pathname: '/' + concept.title.split(' ').join('').toLowerCase() + '/wordsearch', 
            state: {concept} 
          }} 
        > 
          <p>Caça Palavras</p> 
          <div className="button-arrow">
            <FiArrowRight className="button-arrow-item" size={28} />
          </div>
        </Link>
      }
      {isExit && 
        <Link 
          className="main-button-item"
          to={{ 
            pathname: '/'
          }} 
        > 
          <p>Sair</p> 
          <div className="button-arrow">
            <FiArrowRight className="button-arrow-item" size={28} />
          </div>
        </Link>
      }
    </div>
  )       
}