/* eslint-disable */

import { useState } from 'react'
import Header from './component/Header.js'
import DayList from './component/DayList.js'
import Day from './component/Day.js'
import EmptyPage from './component/EmptyPage.js'
import CreateWord from './component/CreateWord.js'
import CreateDay from './component/CreateDay.js'
import { BrowerRouter, Route, Routes, Link } from 'react-router-dom'

function App() {


  return (
    <div className="App">
     	<Header />
			<Routes>
				<Route path="/" element={ <DayList /> } />
				<Route path="day/:day" element={ <Day /> } />
				<Route path="create_word" element={ <CreateWord />} />
				<Route path="create_day" element={ <CreateDay />} />
				<Route path="*" element={ <EmptyPage /> } />
			</Routes>
    </div>
  );
}

export default App;

