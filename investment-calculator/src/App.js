import { useState } from 'react';

import './index.css';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

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
        <Results input={userInput} />
      </>

    </div>
  );
}

export default App;
