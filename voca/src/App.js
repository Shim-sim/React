/* eslint-disable */

import { useState } from 'react'
import Header from './component/Header.js'
import DayList from './component/DayList.js'
import Day from './component/Day.js'
import EmptyPage from './component/EmptyPage.js'
import { BrowerRouter, Route, Routes, Link } from 'react-router-dom'

function App() {


  return (
    <div className="App">
     	<Header />
			<Routes>
				<Route path="/" element={ <DayList /> } />
				<Route path="day/:day" element={ <Day /> } />
				<Route path="*" element={ <EmptyPage /> } />
			</Routes>
    </div>
  );
}

export default App;

