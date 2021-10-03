import React, { useEffect } from 'react';
import { checkWin } from '../../settings/settings';

const Message = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'Tebrikler kahraman! Kazandın! ';
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Bu sefer olmadı. Tekrar denemek ister misin? ';
    finalMessageRevealWord = `Bulmaya çalıştığın kelime: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="message" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="message-popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Şansını Tekrar Dene</button>
      </div>
    </div>
  )
}

export default Message
