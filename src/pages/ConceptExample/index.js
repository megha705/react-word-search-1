import React from 'react';
import Header from '../../components/Header';
import MainButton from '../../components/MainButton';
import Footer from '../../components/Footer';

import './styles.css';

export default function ConceptExample(props) {
  const { concept } = props.location.state;

  return (
    <div className="concept-container">
      <Header title={concept.title} />
      <div className="container-body">
        <div className="container-text">
          {concept.text.map(item => {
            if(item.type === 'text') {
              return <p className="item-text">{item.text}</p>
            }
            if(item.type === 'title') {
              return <h2>{item.text}</h2>
            }
            if(item.type === 'code') {
               
              return <div className="code"> {item.text.map(codeItem => {
                return <pre className="code-text">{codeItem}</pre>
              })} </div>
            }
          })}
        </div>
        <div className="container-button">
          <MainButton concept={concept} isSearchWord={true} />
        </div>
      </div>
      <Footer />

    </div>
  )
}