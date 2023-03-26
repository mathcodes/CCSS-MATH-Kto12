import React, { useState } from 'react';
import allDayMathProblems from './allDayMathProblems';

function App() {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentProblemIndex < allDayMathProblems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
    }
  };

  const problem = allDayMathProblems[currentProblemIndex];

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-500">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{problem.question}</h1>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleAnswer(problem.optionA === problem.correctAnswer)}>{problem.optionA}</button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleAnswer(problem.optionB === problem.correctAnswer)}>{problem.optionB}</button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleAnswer(problem.optionC === problem.correctAnswer)}>{problem.optionC}</button>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleAnswer(problem.optionD === problem.correctAnswer)}>{problem.optionD}</button>
        </div>
        <div className="mt-4">
          <p>Score: {score}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
