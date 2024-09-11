import React, { useState } from 'react';

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const totalQuestions = 10;
  const passingScore = 7;

  const questions = [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Markup Language", "HighText Marketing Language"], answer: 0 },
    { question: "Which property is used to change text color in CSS?", options: ["text-color", "color", "font-color", "text-style"], answer: 1 },
    { question: "Which keyword is used to declare a constant in JavaScript?", options: ["let", "var", "const", "constant"], answer: 2 },
    { question: "Which method is used to update state in React?", options: ["setState()", "useState()", "updateState()", "changeState()"], answer: 1 },
    { question: "What is the purpose of the <body> tag in HTML?", options: ["Contains the visible page content", "Defines the document's metadata", "Includes the document's head", "Contains all CSS styles"], answer: 0 },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Control Style Sheets", "Computer Style Sheets"], answer: 0 },
    { question: "What is a hook in React?", options: ["A function that allows you to use state and other React features", "A component lifecycle method", "A function to fetch data", "A JSX element"], answer: 0 },
    { question: "Which operator is used to assign a value in JavaScript?", options: ["=", "==", "===", "+"], answer: 0 },
    { question: "Which tag is used for the largest heading in HTML?", options: ["<h1>", "<h6>", "<p>", "<head>"], answer: 0 },
    { question: "Which property controls the font size in CSS?", options: ["font-style", "font-size", "text-size", "size"], answer: 1 }
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestionIndex].answer) {
        setScore(prevScore => prevScore + 1);
      }
      setSelectedOption(null);
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestionIndex].answer) {
        setScore(prevScore => prevScore + 1);
      }
      setIsSubmitted(true);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black min-h-screen flex items-center justify-center text-white">
      <div className="max-w-3xl mx-auto mt-16 p-10 bg-gray-900 shadow-lg rounded-lg text-center">
        {!isSubmitted ? (
          <>
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">Skill Test</h1>
            <p className="text-2xl font-semibold text-white mb-6">This test is based on your skills, brought to you by <span className="text-blue-400">JobZoom</span>.</p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6">{currentQuestionIndex + 1}. {currentQuestion.question}</h3>

              <div className="grid grid-cols-2 gap-4">
                {currentQuestion.options.map((option, index) => (
                  <label key={index} className="block bg-gradient-to-r from-purple-500 to-pink-600 p-4 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="answer"
                      className="mr-2"
                      value={index}
                      checked={selectedOption === index}
                      onChange={handleOptionChange}
                    /> {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={handleNext}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-10 rounded-lg mx-2"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-10 rounded-lg mx-2"
                >
                  Submit
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="max-w-lg mx-auto mt-16 p-8 bg-gray-900 shadow-lg rounded-lg text-center">
            <h3 className={`text-3xl font-bold mb-6 ${score >= passingScore ? 'text-green-500' : 'text-red-500'}`}>
              {score >= passingScore ? "Congratulations, you are in!" : "Sorry, you didn't pass the test."}
            </h3>
            <p className="text-xl">Your Score: <span>{score}</span>/10</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
