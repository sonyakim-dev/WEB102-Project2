import { useState } from "react";
import "./App.css";
import Cards from "./Cards";

const cards = [
  {
    word: "inertia",
    level: "medium",
    english: "a tendency to do nothing or to remain unchanged",
    korean: "관성",
  },
  {
    word: "rebellion",
    level: "easy",
    english:
      "an act of violent or open resistance to an established government or ruler",
    korean: "반역, 반란, 폭동",
  },
  {
    word: "facilitate",
    level: "easy",
    english: "make (an action or process) easy or easier",
    korean:
      "〈물건이〉 …을 수월하게[편하게] 하다; 〈행동·조치 등을〉 촉진[조성]하다",
  },
  {
    word: "disparate",
    level: "medium",
    english: "essentially different in kind; not allowing comparison",
    korean:
      "종류가 다른, 본질적으로 다른; 여러 가지 요소를 포함하는[로 이루어진]",
  },
  {
    word: "salient",
    level: "hard",
    english: "most noticeable or important",
    korean: "두드러진, 현저한",
  },
  {
    word: "laconic",
    level: "hard",
    english: "(of a person, speech, or style of writing) using very few words",
    korean: "〈말 등이〉 짧으나 함축성 있는, 간결한",
  },
];

const randomIndex = Array.from({ length: cards.length }, (_, i) => i);
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(randomIndex);

function App() {
  const [currPage, setCurrPage] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [checkGuess, setCheckGuess] = useState(null);

  const handleFlipCards = () => {
    setIsFlipped((curr) => !curr);
  };
  const handlePrevButton = () => {
    setCurrPage((curr) => (curr > 0 ? curr - 1 : 0));
    setIsFlipped(false);
    setGuess("");
    setCheckGuess(null);
  };
  const handleNextButton = () => {
    setCurrPage((curr) => (curr < cards.length - 1 ? curr + 1 : curr));
    setIsFlipped(false);
    setGuess("");
    setCheckGuess(null);
  };
  const handleSubmit = (e) => {
    guess && cards[randomIndex[currPage]].korean.includes(guess)
      ? setCheckGuess(true)
      : setCheckGuess(false);
    console.log(cards[randomIndex[currPage]].korean.includes(guess), guess);
    setIsFlipped(true);
  };
  const handleShuffle = () => {
    shuffle(randomIndex);
    setCurrPage(() => 0);
  };

  return (
    <div className="App">
      <h1>English Words Practice</h1>
      <h3>Practice your english words with flashcards!</h3>
      <h4>Number of cards: {cards.length}</h4>
      <br />
      <Cards
        onClick={handleFlipCards}
        isFlipped={isFlipped}
        word={cards[randomIndex[currPage]].word}
        level={cards[randomIndex[currPage]].level}
        english={cards[randomIndex[currPage]].english}
        korean={cards[randomIndex[currPage]].korean}
      />

      <div className="input">
        <input
          type="text"
          value={guess}
          onChange={function (e) {
            setGuess(() => e.target.value);
          }}
          style={{height: "30px"}}
        />
        <button onClick={handleSubmit}>Submit</button>
        <div className="answer">
          {guess && checkGuess === true ? (
            <div>✅</div>
          ) : checkGuess === false ? (
            <div>⛔️</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="buttons">
        <button
          onClick={handlePrevButton}
          disabled={currPage === 0 ? true : false}
        >
          Prev
        </button>
        <button
          onClick={handleNextButton}
          disabled={currPage === cards.length - 1 ? true : false}
        >
          Next
        </button>
        <button onClick={handleShuffle} style={{backgroundColor: "grey"}}>Shuffle</button>
      </div>
    </div>
  );
}

export default App;
