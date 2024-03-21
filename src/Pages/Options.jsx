import { FaArrowLeft,} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import selectionContext from '../data/selectionContext'
import { nanoid } from 'nanoid'

const Options = () => {
  const {category,  setCategory} = useContext(selectionContext)

  const handleCategory = (category) => {
    setCategory(category)
  }
  const categoryArray = [{title: 'General knowledge', key:9}, {title: 'Maths', key:19}, {title: 'History', key:23}, {title: 'Geography', key:22}, {title: 'Sports', key:21}, {title: 'Anime', key:31}]

  const displayOptions = categoryArray.map ((category) => {
    return (
      <Link key= {nanoid()} to='questions'>
      <button onClick={()=>{handleCategory(category.key)}} key={nanoid()} className="bg-gray-800 w-64 h-64 mx-10 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out">{category.title}</button>
      </Link>
    )
  })

  return (
    <div className="flex justify-center p-8 flex-col">
      <div className='flex items-center'>
        <Link to='/'>
      <button className="bg-gray-800 w-10 h-10 flex text-3xl justify-center items-center mx-10 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md mt-4 shadow-lg hover:shadow-xl transition duration-300 ease-in-out"><FaArrowLeft className='text-2xl'/></button>
      </Link>
      <h1 className="text-5xl">Select Your category</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex-wrap flex w-3/4">
        
       {displayOptions}
        </div>

      </div>
    </div>
  )
}

export default Options
