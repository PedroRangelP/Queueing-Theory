import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './reset.css'
import './styles.css'

import MM1 from './Pages/MM1'
import MMs from './Pages/MMs'
import MMsK from './Pages/MMsK'
import MG1 from './Pages/MG1'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate replace to='/MM1' />} />
            <Route path='/MM1' element={<MM1 />} />
            <Route path='/MMs' element={<MMs />} />
            <Route path='/MMsK' element={<MMsK />} />
            <Route path='/MG1' element={<MG1 />} />
        </Routes>
    )
}

export default App