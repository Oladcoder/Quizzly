import { FaArrowLeft, FaArrowRight, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const QuestionPage = ({ questions }) => {
  const [count, setCount] = useState(0);
  const [isAnswer, setIsAnswer] = useState(false);
  const [chosenAnswerIndex, setChosenAnswerIndex] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [finalShuffledOptions, setFinalShuffledOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [correctBg, setcorrectBg] = useState(false);
  const [showBgColor, setShowBgColor] = useState(false);
  const [correctBgChanger, setcorrectBgchanger] = useState(false);

  // console.log(showCorrectAnswer)
  // setShowCorrectAnswer(false)

  const listArray = [1,2,3,4,5,6,7,8,9,10]
  const displayedList = listArray.map( (number) => {
    return(
      <li key={number} className={`border-white border-2 ${count+1 == number? 'bg-white text-black' : ''} rounded-full h-10 flex justify-center m-2 items-center w-10`}>
      {number}
    </li>
    )
  })

  const chooseAnswer = (index) => {
    const chosenAnswer = questions[count].answers[index];
    const isCorrect = chosenAnswer === questions[count].correct_answer;
    console.log(index);

    if (isCorrect) {
      setScore(score + 1);
      setShowBgColor(true);
      setcorrectBg(true);
    }

    setShowBgColor(true);
    console.log(score);
    console.log(correctBg);
    console.log("im working now");

    // Set the chosen answer index and correctness
    setChosenAnswerIndex(index);
    setIsAnswer(isCorrect);

    // Show the correct answer only if the selected answer is incorrect
    setShowCorrectAnswer(true);
  };

  const isCorrectAnswer = (index) => {
    return (
      index ===
      questions[count].answers.findIndex(
        (answer) => answer === questions[count].correct_answer
      )
    );
  };

  //handles the question number
  const handleCountClick = () => {
    setCount(count + 1);
    setShowCorrectAnswer(false);
    setShowBgColor(false);
    setcorrectBg(false);
  };

  // function to shuffle the options array
  const shuffledArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements at indices i and j
    }
    return array;
  };

  useEffect(() => {
    const shuffledOptions = shuffledArray(options);
    setShowCorrectAnswer(false);
    setFinalShuffledOptions(shuffledOptions);
    setShowBgColor(false);
    setcorrectBg(false);
  }, [count]);

  const options = questions[count].answers;

  console.log(options);

  //displaying the question options
  const displayOptions = finalShuffledOptions.map((option, index) => {
    //generates the random key value
    // const uniquekey = nanoid()

    //   const handleOptionClick = () => {
    //     if(option === questions[count].correct_answer){
    //       setIsAnswer(true)
    //     }
    //   else{
    //     setIsAnswer(false)
    //   }
    //   console.log(isAnswer)
    // }
    return (
      <button
        onClick={() => {
          chooseAnswer(index);
          // setShowCorrectAnswer(false)
        }}
        key={index}
        className={`bg-gray-800 w-56 h-56 mx-14 hover:bg-gray-700 ${
          showCorrectAnswer && isCorrectAnswer(index) ? "bg-green-500" : ""
        } text-white font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out`}
        disabled={showCorrectAnswer}
      >
        {option}
      </button>
    );
  });
  // To display the score page after the quiz
  if (count === 9) {
    return (
      <div className="h-screen w-screen flex justify-center flex-col items-center">
        <h1 className="text-3xl">
          You scored {score} out of 10
          <Link to = '/'>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"><FaArrowLeft /></button>
          </Link>
        </h1>
      </div>
    );
  }
  return (
    <div className="flex w-screen h-full">
      <div className="bg-black flex justify-center w-1/12 h-screen">
        <ul className="text-white flex justify-center flex-col">
         {displayedList}        </ul>
      </div>
      <div
        className={` ${
          correctBg && showBgColor
            ? "bg-green-200"
            : !correctBg && showBgColor
            ? "bg-red-200"
            : !showBgColor
            ? "bg-white"
            : ""
        } flex justify-center flex-col items-center`}
      >
        <div className="flex">
          <Link to="/options">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <FaArrowLeft />
            </button>
          </Link>
          <Link to="options">
            <button
              className=" hover:bg-gray-700 text-black
       font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              {" "}
              <FaMoon />{" "}
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <h1>Question {count + 1}/10</h1>
          <h1 className="text-3xl mt-6">{questions[count].question}</h1>
        </div>
        <div className="flex flex-wrap justify-center w-8/12">
          {displayOptions}
        </div>

        {/* <Link to='options'> */}
        <button
          onClick={handleCountClick}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          Next <FaArrowRight />{" "}
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default QuestionPage;
