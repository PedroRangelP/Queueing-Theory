import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './reset.css'
import './styles.css'

import MM1 from './Pages/MM1'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/MM1' />} />
            <Route path='/MM1' element={<MM1 />} />
        </Routes>
    )
}

export default App