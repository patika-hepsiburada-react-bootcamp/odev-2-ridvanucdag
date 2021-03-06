import React, { useState, useEffect } from 'react';
import Header from './components/Title/Title';
import Figure from './components/Hangman/Hangman';
import WrongLetters from './components/ErrorMessage/ErrorMessage';
import Word from './components/Random/Random';
import Popup from './components/Message/Message';
import Notification from './components/Wrong/Wrong';
import { showNotification as show } from './settings/settings';
import './App.css';

const words = ['Yazılım', 'Programlama', 'Bilgisayar', 'Hepsiburada', 'Türkiye', 'Rıdvan'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
   const [playable, setPlayable] = useState(true);
   const [correctLetters, setCorrectLetters] = useState([]);
   const [wrongLetters, setWrongLetters] = useState([]);
   const [showNotification, setShowNotification] = useState(false);

   useEffect(() => {
      const handleKeydown = (event) => {
         const { key, keyCode } = event;
         if (playable && keyCode >= 65 && keyCode <= 90) {
            const letter = key.toLowerCase();
            if (selectedWord.includes(letter)) {
               if (!correctLetters.includes(letter)) {
                  setCorrectLetters((currentLetters) => [
                     ...currentLetters,
                     letter,
                  ]);
               } else {
                  show(setShowNotification);
               }
            } else {
               if (!wrongLetters.includes(letter)) {
                  setWrongLetters((currentLetters) => [
                     ...currentLetters,
                     letter,
                  ]);
               } else {
                  show(setShowNotification);
               }
            }
         }
      };
      window.addEventListener('keydown', handleKeydown);

      return () => window.removeEventListener('keydown', handleKeydown);
   }, [correctLetters, wrongLetters, playable]);

   function playAgain() {
      setPlayable(true);

      // Empty Arrays
      setCorrectLetters([]);
      setWrongLetters([]);

      const random = Math.floor(Math.random() * words.length);
      selectedWord = words[random];
   }

   return (
      <>
         <Header />
         <div className='gamepages'>
            <Figure wrongLetters={wrongLetters} />
            <WrongLetters wrongLetters={wrongLetters} />
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
         </div>
         <Popup
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
            selectedWord={selectedWord}
            setPlayable={setPlayable}
            playAgain={playAgain}
         />
         <Notification showNotification={showNotification} />
      </>
   );
}

export default App;
