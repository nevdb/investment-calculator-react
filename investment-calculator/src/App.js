import { useState } from 'react';

import './index.css';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import AuthInputs from './components/AuthInputs.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div className="App">
      <>
        <Header />
        <UserInput userInput={userInput} onChangeInput={handleChange} />
        {
          inputIsValid ? <Results input={userInput} /> : <p>Please enter a period greater than zero!</p>
        }

        <AuthInputs />
      </>

    </div>
  );
}

export default App;
