import React from 'react';
import Header from '../../components/Header';
import MainButton from '../../components/MainButton';
import Footer from '../../components/Footer';

import './styles.css';

export default function ConceptExample(props) {
  const { concept } = props.location.state;

  return (
    <div className="container">
      <Header title={concept.title} />
      <div className="container-body">
        <div className="container-text">
          <p>{concept.text}</p> 
        </div>
        <div className="container-button">
          <MainButton concept={concept} isSearchWord={true} />
        </div>
      </div>
      <Footer />

    </div>
  )
}