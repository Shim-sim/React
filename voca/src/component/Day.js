/* eslint-disable */
import Word from './Word.js'
import { Link, useParams, useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Day = () => {
	
	const { day } = useParams()
	const words = useFetch(`https://study-json.run.goorm.io/words?day=${day}`)
	const navigate = useNavigate()
	const page = Number(day)

	return (
	<>	
		<h2>Day {day}</h2>
		{words.length === 0 && <span>Loading...</span>}
		<table>
			<tbody>
				{words.map(word => (
					<Word word={word} key={word.id}/>
				))}
			</tbody>
		</table>
		<div className="paginate">
		 <Link to={`/day/${page-1}`}><IoIosArrowBack /></Link>
		 <Link to={`/day/${page+1}`}><IoIosArrowForward/></Link>
		</div>
	</>	
	)
}

export default Day