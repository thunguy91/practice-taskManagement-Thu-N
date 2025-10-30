import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail'
import { Routes, Route, Link } from 'react-router'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetail />} />

        
      </Routes>

    </>
  )
}

export default App
