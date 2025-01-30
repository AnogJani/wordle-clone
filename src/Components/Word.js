import './Word.css';
import Letter from './Letter';

const wordLength = 5;

export default function Word(props) {

    const word = props.word;

    return (
      <div className="Word">
        {Array(wordLength).fill('').map((letter, index) => (
          <Letter key={index} letter={word[index]}/>
        ))}
      </div>
    );
}