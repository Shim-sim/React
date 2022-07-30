/* eslint-disable */

import useFetch from '../hooks/useFetch'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateWord = () => {
	const days = useFetch('https://study-json.run.goorm.io/days')
	const navigate = useNavigate();
	const [isLoading, setIsLoding] = useState(false)
	
	const onSubmit = (e) => {
		e.preventDefault()
		
	if(!isLoading) {
		setIsLoding(true)
		fetch(`https://study-json.run.goorm.io/words/`, {
			method : 'POST',
			headers: {
				'Content-Type' : 'application/json',
			},
			body : JSON.stringify({
				day : dayRef.current.value,
				eng : engRef.current.value,
				kor : korRef.current.value,
				isDone : false
			}),
		})
		.then(res => {
			if(res.ok) {
				alert('단어가 생성 됐습니다!')
				navigate(`/day/${dayRef.current.value}`)
				setIsLoding(false)
			}
		})}
	}
	
	const engRef = useRef(null)
	const korRef = useRef(null)
	const dayRef = useRef(null)
	
	return (
		<form onSubmit={onSubmit}>
			<div className="input_area">
				<label>Eng</label>
				<input type="text" placeholder="computer" ref={engRef}/>
			</div>
			<div className="input_area">
				<label>Kor</label>
				<input type="text" placeholder="컴퓨터" ref={korRef}/>
			</div>
			<div className="input_area">
				<label>Day</label>
				<select ref={dayRef}>
					{days.map(day => (
						<option key={day.id} value={day.day}>
							{day.day}
						</option>
					))}
				</select>
			</div>
			<button>{isLoading ? 'Saving...' : '저장'}</button>
		</form>
	)
}

export default CreateWord