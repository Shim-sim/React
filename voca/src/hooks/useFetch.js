import { useState, useEffect } from 'react'

const useFetch = (url) => {
	const [data, setData] = useState([])
	
	useEffect(()=> {
		fetch(url)
		.then(res => {
			return res.json()
		})
		.then(data => {
			setData(data)
		})
	}, [url])
	
	return data
}

export default useFetch

/*
커스텀 훅을 만든다.
fetch로 받았던 부분을 url 파라미터로 뚫어놓고,
setData(data)를 받는다.
return data 를 해주면 결국에는 api로 받은 데이터만 data에 남기 때문에
커스텀 훅을 사용하는 곳에서 변수에만 담아줘서 api 호출에 성공하면
data에는 받아온 데이터만 남게 된다!
*/