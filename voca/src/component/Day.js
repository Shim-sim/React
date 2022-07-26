/* eslint-disable */
import dummy from './../db/data.json'
import Word from './Word.js'
import { Link, useParams  } from 'react-router-dom'

const Day = () => {
	
	const { day } = useParams()
	const wrodList = dummy.words.filter(word => word.day === Number(day));
	
	return (
	<>	
		<h2>Day {day}</h2>
		<table>
			<tbody>
				{wrodList.map(word => (
					<Word word={word} key={word.id}/>
				))}
			</tbody>
		</table>
	</>	
	)
}

export default Day