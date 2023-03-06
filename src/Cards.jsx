import {} from 'react';

function Cards({isFlipped, onClick, word, level, english, korean}) {
  const levelColor = {easy: "green", medium: "yellow", hard: "red"}

  return (
    <div className='card' onClick={onClick}>
      <div className='card-front'>
        <div>
          <p className='level'
            style={{backgroundColor: `${levelColor[level]}`, borderRadius: "5px", color: "black"}}
          >{level}</p>
        </div>
        <h2>{word}</h2>
      </div>

      <div className='card-back' style={{opacity: `${isFlipped ? "100%" : "0%"}`}}>
        <p><strong>English: </strong>{english}</p>
        <p><strong>Korean: </strong>{korean}</p>
      </div>
    </div>
  )
}

export default Cards;