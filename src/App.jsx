import UserInput from './components/UserInput';
import Results from './components/Results';

import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validDuration = userInput.duration > 0;

  const handleChange = (inputIndentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <UserInput onChange={handleChange} userInput={userInput} />
      {validDuration ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
