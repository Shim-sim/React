/* eslint-disable */

import { useState } from 'react'
import Header from './component/Header.js'
import DayList from './component/DayList.js'
import Day from './component/Day.js'
import { BrowerRouter, Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
    <div className="App">
     	<Header />
			<Routes>
				<Route path="/" element={ <DayList /> } />
				<Route path="/day/:day" element={ <Day /> } />
			</Routes>
    </div>
  );
}

export default App;

// 왜 useParams 그 애플코딩으로 복습같이하기