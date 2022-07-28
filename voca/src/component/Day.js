/* eslint-disable */
import Word from './Word.js'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const Day = () => {
	
	const { day } = useParams()
	const words = useFetch(`https://study-json.run.goorm.io/words?day=${day}`)
	
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
	</>	
	)
}

export default Day