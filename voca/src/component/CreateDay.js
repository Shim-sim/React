import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const CreateDay = () => {
	const days = useFetch('https://study-json.run.goorm.io/days')
	const navigate = useNavigate()
	
	const addDay = () => {
		fetch(`https://study-json.run.goorm.io/days/`, {
			method : 'POST',
			headers: {
				'Content-Type' : 'application/json',
			},
			body : JSON.stringify({
				day : days.length + 1
			}),
		})
		.then(res => {
			if(res.ok) {
				alert('날짜가 추가 됐습니다.!')
				navigate(`/`)
			}
		})
	}
	
	return(
		<div>
			<h3>현재 일수 : {days.length}일</h3>
			<button onClick={addDay}>Day 추가</button>
		</div>
	)
}

export default CreateDay