
import '../Styles/BubblesBackground.css'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import themeContext from '../data/themeContext'
import { FaMoon } from 'react-icons/fa'

const Home = () => {

  // const generateRandomDelay = () => {
  //   return Math.random() * 2; // Adjust the range as needed
  // };

  // const renderBubbles = () => {
  //   const bubbles = [];
  //   for (let i = 0; i < 20; i++) {
  //     bubbles.push(
  //       <div key={i} className="bubble" style={{'--delay': generateRandomDelay() + 's'}}>sike ilied</div>
  //     );
  //   }
  //   return bubbles;
  // };
const {theme, setTheme} = useContext(themeContext)

  return (
    <div className={`flex justify-center ${theme ? 'bg-gray-800': ''} items-center flex-col bubbles-background`}>
      <button onClick={() => {setTheme(!theme)}} className="bg-none absolute left-2 top-0 hover:bg-white text-2xl text-gray-800 font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">   <FaMoon/> </button>
      {/* {renderBubbles} */}
      <h1 className={`font-gambarino ${theme ? 'text-white shadow-lg': ''} text-9xl`}>Quizlly</h1>
      <p className={`font-gambarino ${theme ? 'text-white shadow-lg': ''} text-4xl`}> Knowledge Unlocked, One Question at a Time. </p>
      <Link to='options'>
      <button className={`bg-gray-800 ${theme ? 'bg-white text-gray-700 hover:bg-white' : ''} hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out`}>Start Quiz</button>
      </Link>
      <div className='flex items-center justify-between'>
      <button className="bg-gray-800 mr-6 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">Leaderboard</button>
      <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">Custom Quiz</button>
      </div>
    </div>
  )
}

export default Home
