import { useEffect, useRef, useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../css/typingGame.css';
import Top from '../components/Top';

const sentences = [
  "The quick brown fox jumps over the lazy dog and runs away quickly without looking back.",
  "Typing is a fundamental skill that helps people express thoughts clearly and efficiently.",
  "JavaScript enables interactive web pages and is an essential part of web applications."
];

export default function Typing_game() {
  const [quote, setQuote] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [missedWords, setMissedWords] = useState([]);
  const [scoreboard, setScoreboard] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    setQuote(sentences[Math.floor(Math.random() * sentences.length)]);
  }, []);

  function startGame() {
    setUserInput('');
    setWpm(null);
    setAccuracy(null);
    setMissedWords([]);
    setStartTime(Date.now());
    setIsMoving(true);
    inputRef.current.focus();
  }

  function endGame() {
    setIsMoving(false);
    const endTime = Date.now();
    const timeElapsed = (endTime - startTime) / 1000 / 60;
    const inputWords = userInput.trim().split(/\s+/);
    const quoteWords = quote.trim().split(/\s+/);
    const correctCount = inputWords.filter((word, i) => word === quoteWords[i]).length;
    const accuracyCalc = Math.round((correctCount / quoteWords.length) * 100);
    const missed = quoteWords.filter((word, i) => word !== inputWords[i]);
    const wpmCalc = Math.round(inputWords.length / timeElapsed);
    setWpm(wpmCalc);
    setAccuracy(accuracyCalc);
    setMissedWords(missed);
    setScoreboard(prev => [...prev, { wpm: wpmCalc, accuracy: accuracyCalc, missed: missed.length }]);
  }

  return (
    <>
      
      <div className="home-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="top-container">
          <Top />
          <div className="typing_veiw">
            <h2>Typing Speed Game</h2>
            <div className="scroll-box">
              <p className={`scrolling-text ${isMoving ? 'move' : ''}`}>{quote}</p>
            </div>
            <textarea
              ref={inputRef}
              rows="4"
              placeholder="Type here as the sentence scrolls..."
              className="typing-box"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            ></textarea>
            <div className="buttons">
              <button onClick={startGame}>Start</button>
              <button onClick={endGame}>Done</button>
            </div>
            {wpm !== null && (
              <div className="results">
                <p><strong>WPM:</strong> {wpm}</p>
                <p><strong>Accuracy:</strong> {accuracy}%</p>
                <p><strong>Missed Words:</strong> {missedWords.join(', ') || 'None'}</p>
              </div>
            )}
            <div className="scoreboard">
              <h3>Scoreboard</h3>
              <ul>
                {scoreboard.map((score, index) => (
                  <li key={index}>
                    <strong>Game {index + 1}:</strong> {score.wpm} WPM, {score.accuracy}% accuracy, {score.missed} missed
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
