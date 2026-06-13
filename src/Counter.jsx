import {useState} from 'react'; 

function Counter() {
  const [score, setScore] = useState(0); // Counter useState
    
  // Function to handle score increasing 
  const handleIncrease = () => 
    setScore(score + 1);

  // Function to handle score decreasing , also ensuring it doesn't go below 0, otherwise it could be (function dec(){setScore(score - 1)})
  const handleDecrease = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  };

  // Function to handle score resetting  to 0
  const handleReset = () => 
    setScore(0);

    // To create the counter for UI (browser)
  return (
    <div className="counter-display-box">
        <h4>Scores</h4>
        <div className="display-score">{score}</div>
        <div className="counter-buttons">
            <button onClick={handleIncrease} className="btn btn2 increase"> Increase </button>
            <button onClick={handleDecrease} className="btn btn2 decrease"> Decrease </button>
            <button onClick={handleReset} className="btn btn2 reset">       Reset    </button>
        </div>
    </div>
  );
}

export default Counter;