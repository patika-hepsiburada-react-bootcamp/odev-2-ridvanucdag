import React from 'react';

const Random = ({ selectedWord, correctLetters }) => {

  return (
    <div className="Random">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Random
