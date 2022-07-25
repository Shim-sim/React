/* eslint-disable */
import dummy from './../db/data.json'


const Day = () => {
	const day = 2
	const wrodList = dummy.words.filter(word => (
		word.day === day
	))
	
	return (
	<>	
		<h2>Day {day}</h2>
		<table>
			<tbody>
				{wrodList.map(word => (
					<tr key={word.id}>
						<td>{word.eng}</td>
						<td>{word.kor}</td>
					</tr>
				))}
			</tbody>
		</table>
	</>	
	)
}

export default Day