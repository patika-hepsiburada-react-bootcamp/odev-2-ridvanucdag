import React from 'react'

const ErrorMesages = ({ wrongLetters }) => {

  return (
    <div className="error-message">
      <div>
        {wrongLetters.length > 0 && 
          <p>Yanlış Seçim</p>
        }
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
      </div>
    </div>
  )
}

export default ErrorMesages
