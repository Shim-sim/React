/* eslint-disable */
import { Link } from 'react-router-dom'
import { useState } from 'react'

const DayList = () => {
	
	const [days, setDays] = useState([])
	
	return (
		<ul className="list_day">
			{days.map(day => (
				<li key={day.id}>
					<Link to={`/day/${day.day}`}>Day {day.day} </Link>
				</li>
			))}
		</ul>	
	)
}

export default DayList