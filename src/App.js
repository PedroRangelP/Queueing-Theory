import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './reset.css'
import './styles.css'

import MM1 from './Pages/MM1'
import MMs from './Pages/MMs'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/MM1' />} />
            <Route path='/MM1' element={<MM1 />} />
            <Route path='/MMs' element={<MMs />} />
        </Routes>
    )
}

export default App