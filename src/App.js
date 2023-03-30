import React, { useState } from 'react'; // Importing the React library and the useState hook from the 'react' module.
import allDayMathProblems from './allDayMathProblems'; // Importing an array of math problems from a separate file.

function App() { // Defining a function component named 'App'.
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0); // Declaring a state variable for the current problem index, and a function to update it, initialized to 0.
  const [score, setScore] = useState(0); // Declaring a state variable for the score, and a function to update it, initialized to 0.




  const handleAnswer = (isCorrect) => { // Declaring a function named 'handleAnswer' that takes a boolean argument indicating whether the selected answer is correct or not.
    if (isCorrect) { // If the selected answer is correct:
      setScore(score + 1); // Increase the score by 1.
    }
    if (currentProblemIndex < 8) { // If there are more problems remaining:
      setCurrentProblemIndex(currentProblemIndex + 1); // Move to the next problem by updating the current problem index.
    } else {
      document.getElementById('question').innerHTML = `You got ${score} / 8 correct!`; // Otherwise, display the final score.
      // disable buttons
      document.getElementById('question').param = 'disabled';
    }
  };

  // choose a random problem from the array
  const problem = allDayMathProblems[Math.floor(Math.random() * allDayMathProblems.length)];
  return ( // Return a JSX element representing the UI.
    <div className="container mx-auto"> {/* A div element with a 'container mx-auto' class. */}
      <div className="flex flex-col justify-center items-center h-screen bg-purple-500"> {/* A div element with 'flex', 'flex-col', 'justify-center', 'items-center', 'h-screen', and 'bg-purple-500' classes. */}
        <div className="bg-white rounded-lg p-8 h-1/2 w-1/4 shadow-lg"> {/* A div element with 'bg-white', 'rounded-lg', 'p-8', and 'shadow-lg' classes. */}
          <h1 id="question" className="text-3xl font-bold mb-4">{problem.question}</h1> {/* A heading element displaying the current problem question. */}
          <div className="grid grid-cols-2 gap-4"> {/* A div element with a 'grid' class, displaying answer options in two columns with a gap of 4. */}
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleAnswer(problem.optionA === problem.correctAnswer)}>{problem.optionA}</button> {/* A button element displaying the first answer option, with a click handler that calls the handleAnswer function with a boolean argument indicating whether the selected answer is correct. */}
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleAnswer(problem.optionB === problem.correctAnswer)}>{problem.optionB}</button> {/* A button element displaying the second answer option, with a click handler that calls the handleAnswer function with a boolean argument indicating whether the selected answer is correct. */}
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleAnswer(problem.optionC === problem.correctAnswer)}>{problem.optionC}</button> {/* A button element displaying the third answer option, with a click handler that calls the handleAnswer function with a boolean argument indicating whether the selected answer is correct. */}
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg" onClick={() => handleAnswer(problem.optionD === problem.correctAnswer)}>{problem.optionD}</button> {/* A button element displaying the fourth answer option, with a click handler that calls the handleAnswer function with a boolean argument indicating whether the selected answer is correct. */}
          </div>
        </div>
        <div className="mt-4">
          <p id="score" className="text-white font-bold">Score: {score}/ 8 </p> {/* /A paragraph element displaying the current score. */}
        </div>
      </div>
    </div>
  );
}

export default App;
{/* // Exporting the App function component as the default export. */}