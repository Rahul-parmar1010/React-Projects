import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const options = ['rock', 'paper', 'scissors'];

  const handleUserChoice = (choice) => {
    const computerRandomChoice = options[Math.floor(Math.random() * options.length)];
    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
    checkWinner(choice, computerRandomChoice);
  };

  const checkWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      setResult('It\'s a tie!');
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  const handleRefresh = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };
   
  return (
    <div className="container mt-5 text-light">
      <h1 className="text-center mb-5 ">Rock Paper Scissors</h1>
      <div className="d-flex justify-content-between">
        <h4>Your Choice: {userChoice}</h4> 
         <h4>Result: {result}</h4>
        <h4>Computer's Choice: {computerChoice}</h4>
      </div>

      
      <div className="text-center my-5">
        <h5>Choose an option:</h5>
        <button className="btn btn-primary m-1" onClick={() => handleUserChoice('rock')}>Rock</button>
        <button className="btn btn-primary m-1" onClick={() => handleUserChoice('paper')}>Paper</button>
        <button className="btn btn-primary m-1" onClick={() => handleUserChoice('scissors')}>Scissors</button>
        <button className="btn btn-light m-1" onClick={handleRefresh}>Refresh</button>
      </div>
    </div>
  );
};

export default RockPaperScissors;


